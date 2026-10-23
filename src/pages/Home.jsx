export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src="/pages/home.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Home"
      />
    </main>
  )
}
