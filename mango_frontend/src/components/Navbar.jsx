import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div style={{ height: '3px', backgroundColor: '#1a1a1a' }} />
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 32px',
          height: '56px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}>
          {/* Left: Farms link */}
          <div>
            <Link to="/farms" style={{
              fontSize: '0.9rem',
              fontWeight: '500',
              color: '#1a1a1a',
              textDecoration: 'none',
            }}>
              Farms
            </Link>
          </div>

          {/* Center: Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="22" rx="11" ry="13" fill="#E8622A" />
              <ellipse cx="19" cy="21" rx="7" ry="9" fill="#f59e6e" opacity="0.4" />
              <path d="M19 9 C19 9 24 5 27 2" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M19 9 C17 7 15 4 16 1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />
              <ellipse cx="23" cy="5" rx="4" ry="2.5" transform="rotate(-30 23 5)" fill="#4ade80" opacity="0.9" />
            </svg>
          </Link>

          {/* Right: Reach Us */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="mailto:hello@mangoclubb.com" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: '#1a1a1a',
              textDecoration: 'none',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Reach Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
