import { useEffect } from 'react';
import { trackVisit } from '../utils/analytics/tracker';

export function useUtmTracker(): void {
  useEffect(() => {
    trackVisit();
  }, []);
}
