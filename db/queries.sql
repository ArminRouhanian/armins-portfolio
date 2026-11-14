-- 1. Total sessions by UTM source (e.g. resume vs linkedin)
SELECT 
  COALESCE(utm_source, 'direct') AS source,
  COUNT(DISTINCT session_id) AS unique_sessions,
  COUNT(DISTINCT device_id) AS unique_visitors,
  MIN(created_at) AS first_seen,
  MAX(created_at) AS last_seen
FROM tracking_events
GROUP BY COALESCE(utm_source, 'direct')
ORDER BY unique_sessions DESC;

-- 2. Performance breakdown for specific targets ('resume', 'linkedin')
SELECT 
  utm_source,
  utm_campaign,
  utm_medium,
  COUNT(DISTINCT session_id) AS sessions,
  COUNT(DISTINCT device_id) AS unique_devices
FROM tracking_events
WHERE utm_source IN ('resume', 'linkedin')
GROUP BY utm_source, utm_campaign, utm_medium
ORDER BY sessions DESC;

-- 3. Device breakdown (mobile vs desktop)
SELECT 
  COALESCE(device_type, 'unknown') AS device,
  COUNT(DISTINCT session_id) AS sessions,
  ROUND(COUNT(DISTINCT session_id) * 100.0 / SUM(COUNT(DISTINCT session_id)) OVER (), 1) AS percentage
FROM tracking_events
GROUP BY COALESCE(device_type, 'unknown')
ORDER BY sessions DESC;

-- 4. Browser breakdown
SELECT 
  COALESCE(browser, 'unknown') AS browser_name,
  COUNT(DISTINCT session_id) AS sessions,
  ROUND(COUNT(DISTINCT session_id) * 100.0 / SUM(COUNT(DISTINCT session_id)) OVER (), 1) AS percentage
FROM tracking_events
GROUP BY COALESCE(browser, 'unknown')
ORDER BY sessions DESC;

-- 5. Cross-tabulation: Source by Device
SELECT 
  COALESCE(utm_source, 'direct') AS source,
  COALESCE(device_type, 'unknown') AS device,
  COUNT(DISTINCT session_id) AS sessions
FROM tracking_events
GROUP BY COALESCE(utm_source, 'direct'), COALESCE(device_type, 'unknown')
ORDER BY source, sessions DESC;

-- 6. Returning visitors across devices (devices with > 1 session)
SELECT 
  device_id,
  COUNT(DISTINCT session_id) AS total_sessions,
  ARRAY_AGG(DISTINCT utm_source) FILTER (WHERE utm_source IS NOT NULL) AS sources_seen,
  MIN(created_at) AS first_visit,
  MAX(created_at) AS latest_visit
FROM tracking_events
GROUP BY device_id
HAVING COUNT(DISTINCT session_id) > 1
ORDER BY total_sessions DESC;

-- 7. Recent 50 visits log
SELECT 
  created_at,
  utm_source,
  utm_campaign,
  utm_medium,
  device_type,
  browser,
  session_id,
  device_id
FROM tracking_events
ORDER BY created_at DESC
LIMIT 50;
