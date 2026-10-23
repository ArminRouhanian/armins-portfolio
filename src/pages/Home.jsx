export default function Home() {
  return (
    <main style={{ paddingTop: '56px', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/pages/home.html"
        style={{ width: '100%', height: 'calc(100vh - 56px)', border: 'none', display: 'block' }}
        title="Home"
      />
    </main>
  )
}
