import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { neon } from '@neondatabase/serverless';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

loadEnvFile(path.resolve(__dirname, '..', '.env.local'));

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('DATABASE_URL not found in .env.local');
  process.exit(1);
}

const sql = neon(dbUrl);

async function runTest() {
  const handlerModule = await import('../api/track.ts');
  const handler = handlerModule.default;

  const mockRes = () => {
    const res = {
      statusCode: 200,
      headers: {},
      body: null,
      setHeader(k, v) {
        this.headers[k] = v;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(data) {
        this.body = data;
        return this;
      }
    };
    return res;
  };

  const sessionId1 = '11111111-1111-4111-8111-111111111111';
  const deviceId1 = '22222222-2222-4222-8222-222222222222';

  const req1 = {
    method: 'POST',
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    },
    body: {
      session_id: sessionId1,
      device_id: deviceId1,
      utm_source: 'resume',
      utm_medium: 'pdf',
      utm_campaign: 'head_of_design'
    }
  };

  const res1 = mockRes();
  await handler(req1, res1);

  if (res1.statusCode !== 200 || !res1.body?.success) {
    throw new Error(`Test 1 failed with response: ${JSON.stringify(res1)}`);
  }

  const rows1 = await sql`
    SELECT id, utm_source, utm_medium, utm_campaign, device_type, browser, session_id, device_id
    FROM tracking_events
    WHERE session_id = ${sessionId1}
  `;

  if (rows1.length === 0 || rows1[0].device_type !== 'desktop' || rows1[0].browser !== 'Chrome') {
    throw new Error(`Test 1 verification failed: ${JSON.stringify(rows1)}`);
  }

  console.log('✓ Test 1 Passed (Desktop Chrome, utm_source=resume):', rows1[0]);

  const sessionId2 = '33333333-3333-4333-8333-333333333333';
  const deviceId2 = '44444444-4444-4444-8444-444444444444';

  const req2 = {
    method: 'POST',
    headers: {
      'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1'
    },
    body: {
      session_id: sessionId2,
      device_id: deviceId2,
      utm_source: 'linkedin',
      utm_medium: 'social',
      utm_campaign: 'inmail_outreach'
    }
  };

  const res2 = mockRes();
  await handler(req2, res2);

  const rows2 = await sql`
    SELECT id, utm_source, utm_medium, utm_campaign, device_type, browser, session_id, device_id
    FROM tracking_events
    WHERE session_id = ${sessionId2}
  `;

  if (rows2.length === 0 || rows2[0].device_type !== 'mobile' || rows2[0].browser !== 'Safari') {
    throw new Error(`Test 2 verification failed: ${JSON.stringify(rows2)}`);
  }

  console.log('✓ Test 2 Passed (Mobile Safari, utm_source=linkedin):', rows2[0]);

  const resDuplicate = mockRes();
  await handler(req1, resDuplicate);

  const rowsDuplicate = await sql`
    SELECT COUNT(*)::int AS count
    FROM tracking_events
    WHERE session_id = ${sessionId1}
  `;

  if (rowsDuplicate[0].count !== 1) {
    throw new Error('Deduplication test failed: duplicate event was inserted');
  }

  console.log('✓ Test 3 Passed: ON CONFLICT deduplication prevented duplicate insert (count = 1).');

  await sql`
    DELETE FROM tracking_events
    WHERE session_id IN (${sessionId1}, ${sessionId2});
  `;

  console.log('✓ Cleanup complete: Test rows removed.');
}

runTest().catch((err) => {
  console.error('Test run failed:', err);
  process.exit(1);
});
