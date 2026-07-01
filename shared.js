/* shared.js, shared tokens, Nav, Footer for all 1BC pages */
const T = {
  ivory: '#f2ede4',
  ivory2: '#ede8de',
  ink: '#1a1814',
  inkMid: '#6b6558',
  inkLight: '#b0a898',
  border: '#d4cdc0',
  accent: '#c17d3c',
};

function Label({ children, light }) {
  return (
    <div style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: '10px', letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: light ? 'rgba(242,237,228,0.45)' : T.inkLight,
      marginBottom: '20px',
      display: 'flex', alignItems: 'center', gap: '10px',
    }}>
      <span style={{ display: 'inline-block', width: '24px', height: '1px', background: light ? 'rgba(242,237,228,0.3)' : T.inkLight, flexShrink: 0 }}></span>
      {children}
    </div>
  );
}

function SunIcon({ size = 48, color = T.inkLight }) {
  const rays = 12;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {Array.from({ length: rays }, (_, i) => {
        const angle = (i / rays) * 2 * Math.PI;
        const r1 = 16, r2 = 22;
        const x1 = 24 + r1 * Math.cos(angle), y1 = 24 + r1 * Math.sin(angle);
        const x2 = 24 + r2 * Math.cos(angle), y2 = 24 + r2 * Math.sin(angle);
        return React.createElement('line', { key: i, x1, y1, x2, y2, stroke: color, strokeWidth: '1.2' });
      })}
      {React.createElement('circle', { cx: 24, cy: 24, r: 10, stroke: color, strokeWidth: '1.2', fill: 'none' })}
    </svg>
  );
}

function TriangleLogo({ color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <polygon points="9,2 16,14 2,14" stroke={color} strokeWidth="1.4" fill="none" />
      <line x1="9" y1="14" x2="9" y2="10" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}

function Nav({ scrolled, activePage }) {
  const [localScrolled, setLocalScrolled] = React.useState(scrolled || false);
  const links = [
    { label: 'About', href: 'about.html' },
    { label: 'Domains', href: 'domains.html' },
    { label: 'Ventures', href: 'ventures.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'ASCENT', href: 'ascent/index.html' },
    { label: 'Insights', href: 'insights.html' },
    { label: 'Contact', href: 'index.html#contact' },
  ];

  React.useEffect(() => {
    const onScroll = () => setLocalScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isScrolled = scrolled !== undefined ? scrolled : localScrolled;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '60px',
      background: isScrolled ? 'rgba(242,237,228,0.97)' : 'rgba(242,237,228,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${T.border}`,
      transition: 'all 0.3s ease',
    }}>
      <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src="brand/1bc-logo-horizontal-ink.png" alt="1st Base Camp" style={{ height: '28px', width: 'auto', display: 'block' }} />
      </a>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500,
            fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
            color: activePage === l.label ? T.ink : T.inkMid,
            borderBottom: activePage === l.label ? `1px solid ${T.ink}` : '1px solid transparent',
            paddingBottom: '2px',
            transition: 'color 0.2s',
            textDecoration: 'none',
          }}
            onMouseEnter={e => e.currentTarget.style.color = T.ink}
            onMouseLeave={e => e.currentTarget.style.color = activePage === l.label ? T.ink : T.inkMid}
          >{l.label}</a>
        ))}
        <a href="index.html#contact" style={{
          fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
          fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase',
          border: `1px solid ${T.ink}`, color: T.ink, padding: '7px 18px',
          transition: 'all 0.2s', textDecoration: 'none',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = T.ink; e.currentTarget.style.color = T.ivory; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.ink; }}
        >Start a conversation</a>
      </div>
    </nav>
  );
}

function Footer() {
  const links = ['About', 'Domains', 'Ventures', 'Services', 'ASCENT', 'Insights', 'Contact'];
  const hrefs = ['about.html', 'domains.html', 'ventures.html', 'index.html#services', 'ascent/index.html', 'insights.html', 'index.html#contact'];
  return (
    <footer style={{ background: T.ink, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 48px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="brand/1bc-logo-horizontal-cream.png" alt="1st Base Camp" style={{ height: '20px', width: 'auto', display: 'block', opacity: 0.55 }} />
        </a>
        <div style={{ display: 'flex', gap: '28px' }}>
          {links.map((l, i) => (
            <a key={l} href={hrefs[i]} style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(242,237,228,0.25)', transition: 'color 0.2s', textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(242,237,228,0.6)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,237,228,0.25)'}
            >{l}</a>
          ))}
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(242,237,228,0.18)' }}>© {new Date().getFullYear()} First Base Camp</span>
      </div>
    </footer>
  );
}

Object.assign(window, { T, Label, SunIcon, TriangleLogo, Nav, Footer });
