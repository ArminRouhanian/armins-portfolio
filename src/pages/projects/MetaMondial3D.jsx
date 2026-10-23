export default function MetaMondial3D() {
  return (
    <main style={{ paddingTop: '56px', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/pages/metamondial3d.html"
        style={{ width: '100%', height: 'calc(100vh - 56px)', border: 'none', display: 'block' }}
        title="MetaMondial3D"
      />
    </main>
  )
}
