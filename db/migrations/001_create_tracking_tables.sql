CREATE TABLE IF NOT EXISTS tracking_events (
  id BIGSERIAL PRIMARY KEY,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(150),
  device_type VARCHAR(50),
  browser VARCHAR(50),
  session_id UUID NOT NULL,
  device_id UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_tracking_session_source_campaign 
ON tracking_events (session_id, COALESCE(utm_source, ''), COALESCE(utm_campaign, ''));

CREATE INDEX IF NOT EXISTS idx_tracking_created_at ON tracking_events (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tracking_source ON tracking_events (utm_source);
CREATE INDEX IF NOT EXISTS idx_tracking_device_id ON tracking_events (device_id);
CREATE INDEX IF NOT EXISTS idx_tracking_session_id ON tracking_events (session_id);
