import React, { useEffect, useState } from 'react';
import AmourSunrisePreloader from '@/components/ui/amour-sunrise-preloader';

const SEEN_KEY = 'ibc4-preloader-seen';

// Show the intro once per browser session; storage can throw in private mode.
function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * Full-screen intro that sits over the site while it loads, then the sun
 * swells, fades out and the overlay unmounts to reveal the page underneath.
 */
export default function SitePreloader() {
  const [visible, setVisible] = useState(() => !alreadySeen());

  // Lock page scroll and throttle the WebGL background while the overlay is up
  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    root.dataset.preloading = '1';
    return () => {
      root.style.overflow = prev;
      delete root.dataset.preloading;
    };
  }, [visible]);

  if (!visible) return null;

  const handleComplete = () => {
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <div className="site-preloader">
      <AmourSunrisePreloader
        className="site-preloader__poster"
        word="CELL 4.0"
        caption="Intelligent Battery Hackathon 2026"
        durationMs={2600}
        palette={{
          paper: '#faf5ee',
          ink: '#232424',
          sun: '#8DC0DE',
          core: '#3d7aa3',
          glow: '#faf5ee'
        }}
        fontFamily="'Playfair Display', Georgia, serif"
        height="100svh"
        onComplete={handleComplete}
      />
    </div>
  );
}
