import { generateUUID } from './uuid';

const SESSION_ID_KEY = 'pf_session_id';

export function getSessionId(): string {
  if (typeof window === 'undefined') {
    return generateUUID();
  }

  try {
    let sessionId = window.sessionStorage.getItem(SESSION_ID_KEY);
    if (!sessionId) {
      sessionId = generateUUID();
      window.sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    }
    return sessionId;
  } catch {
    return generateUUID();
  }
}
