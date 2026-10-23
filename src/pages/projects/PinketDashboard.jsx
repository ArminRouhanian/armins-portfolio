export default function PinketDashboard() {
  return (
    <main style={{ paddingTop: '56px', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/pages/pinket-dashboard.html"
        style={{ width: '100%', height: 'calc(100vh - 56px)', border: 'none', display: 'block' }}
        title="Pinket Dashboard"
      />
    </main>
  )
}
