export const metadata = {
  title: "Haven Stay - 테스트",
  description: "테스트 페이지",
}

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          ✅ Haven Stay
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          사이트가 정상적으로 작동합니다!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a
            href="/rooms"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4ade80',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            객실 보기
          </a>
          <a
            href="/about"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#e5e7eb',
              color: '#374151',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            소개
          </a>
        </div>
      </div>
    </div>
  )
}
