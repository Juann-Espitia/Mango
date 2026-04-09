import { Link } from 'react-router-dom';

const CORAL = '#E8622A';
const CORAL_LIGHT = '#FFF0EA';
const CORAL_BORDER = '#FECBB0';

const PersonIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const BoxIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const StoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const TruckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={CORAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.66)), url('https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '680px', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: '3.6rem',
            fontWeight: '800',
            margin: '0 0 20px',
            lineHeight: '1.1',
            letterSpacing: '-1px',
          }}>
            Real Produce.{' '}
            <span style={{ color: CORAL }}>Now.</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            opacity: 0.88,
            marginBottom: '40px',
            lineHeight: '1.65',
            maxWidth: '460px',
            margin: '0 auto 40px',
          }}>
            Direct from South Florida farms to your kitchen.
          </p>
          <Link to="/marketplace" style={{
            padding: '13px 30px',
            backgroundColor: CORAL,
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            Explore the Marketplace →
          </Link>
        </div>

        {/* White curved bottom edge */}
        <div style={{
          position: 'absolute',
          bottom: -2,
          left: '-25%',
          right: '-25%',
          height: '90px',
          backgroundColor: 'white',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        }} />
      </section>

      {/* The Problem & Our Solution */}
      <section style={{ padding: '88px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 40px' }}>
            The Problem & Our Solution
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', textAlign: 'left' }}>
            <div>
              <div style={{ height: '3px', backgroundColor: '#ef4444', marginBottom: '24px', borderRadius: '2px' }} />
              <h3 style={{ fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px', fontSize: '1rem' }}>The Problem</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', margin: 0, fontSize: '0.925rem' }}>
                Restaurants struggle to find reliable local produce. Farmers can't easily reach buyers.
                The supply chain is fragmented — full of middlemen, delays, and inconsistency.
              </p>
            </div>
            <div>
              <div style={{ height: '3px', backgroundColor: '#22c55e', marginBottom: '24px', borderRadius: '2px' }} />
              <h3 style={{ fontWeight: '700', color: '#1a1a1a', margin: '0 0 12px', fontSize: '1rem' }}>Our Solution</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.75', margin: 0, fontSize: '0.925rem' }}>
                Mango Club connects South Florida farms directly to restaurants. Browse live inventory,
                place orders, and get fresh produce on a schedule that works for your kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '80px 24px', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', textAlign: 'center', margin: '0 0 56px' }}>
            How It Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              {
                num: '1',
                icon: <PersonIcon />,
                title: 'Create Your Profile',
                desc: 'Farmers share what they grow; restaurants set up their ordering account.',
              },
              {
                num: '2',
                icon: <CartIcon />,
                title: 'Select & Order',
                desc: 'Browse live farm inventories and place orders in just a few clicks.',
              },
              {
                num: '3',
                icon: <BoxIcon />,
                title: 'Receive & Enjoy',
                desc: 'Fresh produce arrives on the schedule you choose, ready for your kitchen.',
              },
            ].map(({ num, icon, title, desc }) => (
              <div key={num} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{ height: '4px', backgroundColor: CORAL }} />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      backgroundColor: CORAL_LIGHT,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {icon}
                    </div>
                    <span style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-6px',
                      width: '22px',
                      height: '22px',
                      backgroundColor: CORAL,
                      borderRadius: '50%',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {num}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 10px', color: '#1a1a1a', fontSize: '1rem', fontWeight: '700' }}>{title}</h3>
                  <p style={{ color: '#6b7280', margin: 0, lineHeight: '1.65', fontSize: '0.875rem' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section style={{ padding: '40px 24px 80px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#f7f7f7',
            borderRadius: '24px',
            padding: '60px 48px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Blob decorations */}
            <div style={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '240px',
              height: '240px',
              backgroundColor: CORAL_LIGHT,
              borderRadius: '50%',
              opacity: 0.7,
            }} />
            <div style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '240px',
              height: '240px',
              backgroundColor: CORAL_LIGHT,
              borderRadius: '50%',
              opacity: 0.7,
            }} />

            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#1a1a1a',
              textAlign: 'center',
              margin: '0 0 48px',
              position: 'relative',
            }}>
              Our Features
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              position: 'relative',
            }}>
              {[
                {
                  icon: <LeafIcon />,
                  title: 'Fresh from Farms',
                  badge: null,
                  desc: "Direct access to fresh produce from local farms. Quality you can trust, prices you'll love.",
                },
                {
                  icon: <StoreIcon />,
                  title: 'Easy Ordering',
                  badge: "Coming Summer '25",
                  desc: 'Simple and intuitive ordering process. Browse products, compare prices, and place orders effortlessly.',
                },
                {
                  icon: <TruckIcon />,
                  title: 'Reliable Delivery',
                  badge: "Coming Fall '25",
                  desc: 'Scheduled deliveries you can count on. Track your orders from farm to your doorstep.',
                },
              ].map(({ icon, title, badge, desc }) => (
                <div key={title} style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: CORAL_LIGHT,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}>
                    {icon}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <h3 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '700', color: '#1a1a1a' }}>{title}</h3>
                    {badge && (
                      <span style={{ fontSize: '0.72rem', color: CORAL, fontWeight: '600' }}>
                        • {badge}
                      </span>
                    )}
                  </div>
                  <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.65' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section style={{ padding: '80px 24px', backgroundColor: '#fafafa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', margin: '0 0 48px' }}>
            Core Benefits
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px' }}>
            {[
              { title: 'No Middlemen', desc: 'Buy directly from the source. Better prices, stronger relationships.' },
              { title: 'Always Fresh', desc: 'Products listed are available now. No out-of-stock surprises.' },
              { title: 'Local First', desc: 'Every farm is South Florida based. Support your community.' },
              { title: 'Flexible Orders', desc: 'Order what you need, when you need it. No minimums required.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '28px 24px',
                border: '1px solid #e5e7eb',
                textAlign: 'left',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: CORAL,
                  borderRadius: '50%',
                  marginBottom: '16px',
                }} />
                <h3 style={{ margin: '0 0 8px', fontSize: '0.95rem', fontWeight: '700', color: '#1a1a1a' }}>{title}</h3>
                <p style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.65' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
