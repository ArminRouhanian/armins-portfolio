import type { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function parseDeviceType(userAgent: string): 'mobile' | 'desktop' | 'tablet' {
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|Opera Mini/i.test(userAgent)) {
    return 'mobile';
  }
  return 'desktop';
}

function parseBrowser(userAgent: string): string {
  if (/edg([ea]|ios)?\//i.test(userAgent)) {
    return 'Edge';
  }
  if (/opr\/|opera/i.test(userAgent)) {
    return 'Opera';
  }
  if (/firefox|fxios/i.test(userAgent)) {
    return 'Firefox';
  }
  if (/chrome|crios/i.test(userAgent)) {
    return 'Chrome';
  }
  if (/safari/i.test(userAgent)) {
    return 'Safari';
  }
  return 'Other';
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    res.status(200).json({ success: false, message: 'DATABASE_URL not configured' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { session_id, device_id, utm_source, utm_medium, utm_campaign } = body || {};

    if (!session_id || !device_id || !UUID_REGEX.test(session_id) || !UUID_REGEX.test(device_id)) {
      res.status(400).json({ error: 'Invalid session or device identifier' });
      return;
    }

    const userAgent = req.headers['user-agent'] || '';
    const deviceType = parseDeviceType(userAgent);
    const browser = parseBrowser(userAgent);

    const cleanSource = typeof utm_source === 'string' ? utm_source.trim().slice(0, 100) : null;
    const cleanMedium = typeof utm_medium === 'string' ? utm_medium.trim().slice(0, 100) : null;
    const cleanCampaign = typeof utm_campaign === 'string' ? utm_campaign.trim().slice(0, 150) : null;

    const sql = neon(databaseUrl);

    await sql`
      INSERT INTO tracking_events (
        utm_source,
        utm_medium,
        utm_campaign,
        device_type,
        browser,
        session_id,
        device_id
      )
      VALUES (
        ${cleanSource},
        ${cleanMedium},
        ${cleanCampaign},
        ${deviceType},
        ${browser},
        ${session_id},
        ${device_id}
      )
      ON CONFLICT (session_id, COALESCE(utm_source, ''), COALESCE(utm_campaign, ''))
      DO NOTHING
    `;

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
