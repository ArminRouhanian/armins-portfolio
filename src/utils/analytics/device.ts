import { generateUUID } from './uuid';

const DEVICE_ID_KEY = 'pf_device_id';
const COOKIE_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

function writeCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const secureFlag = isSecure ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureFlag}`;
}

export function getDeviceId(): string {
  if (typeof window === 'undefined') {
    return generateUUID();
  }

  let deviceId = readCookie(DEVICE_ID_KEY);
  if (deviceId) {
    return deviceId;
  }

  try {
    deviceId = window.localStorage.getItem(DEVICE_ID_KEY);
  } catch {
    deviceId = null;
  }

  if (deviceId) {
    writeCookie(DEVICE_ID_KEY, deviceId);
    return deviceId;
  }

  deviceId = generateUUID();
  writeCookie(DEVICE_ID_KEY, deviceId);
  try {
    window.localStorage.setItem(DEVICE_ID_KEY, deviceId);
  } catch {
    // Storage access restricted or disabled
  }

  return deviceId;
}
