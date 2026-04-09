export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f0f2f5',
      padding: '32px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        margin: '0 0 16px',
        fontSize: '0.75rem',
        color: '#9ca3af',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
      }}>
        COPYRIGHT ©2025. MangoClub RIGHTS RESERVED.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', display: 'flex' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#374151', display: 'flex' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>
        Questions?{' '}
        <a href="mailto:hello@mangoclubb.com" style={{ color: '#E8622A', fontWeight: '500' }}>
          hello@mangoclubb.com
        </a>
        {' '}or txt: (786) 803-3903
      </p>
    </footer>
  );
}
