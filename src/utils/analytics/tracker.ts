import { getDeviceId } from './device';
import { getSessionId } from './session';

interface TrackPayload {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  session_id: string;
  device_id: string;
}

const TRACKED_COMBOS_KEY = 'pf_tracked_combos';

function getTrackedCombos(): Set<string> {
  try {
    const raw = window.sessionStorage.getItem(TRACKED_COMBOS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function recordTrackedCombo(comboKey: string): void {
  try {
    const set = getTrackedCombos();
    set.add(comboKey);
    window.sessionStorage.setItem(TRACKED_COMBOS_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // Session storage write failure
  }
}

export function trackVisit(): void {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  const sessionId = getSessionId();
  const deviceId = getDeviceId();

  const comboKey = `${sessionId}::${utmSource ?? ''}::${utmCampaign ?? ''}`;
  const trackedCombos = getTrackedCombos();

  if (trackedCombos.has(comboKey)) {
    return;
  }

  recordTrackedCombo(comboKey);

  const payload: TrackPayload = {
    utm_source: utmSource ? utmSource.slice(0, 100) : null,
    utm_medium: utmMedium ? utmMedium.slice(0, 100) : null,
    utm_campaign: utmCampaign ? utmCampaign.slice(0, 150) : null,
    session_id: sessionId,
    device_id: deviceId
  };

  fetch('/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
    keepalive: true
  }).catch(() => {
    // Non-blocking telemetry failure suppressed intentionally
  });
}
