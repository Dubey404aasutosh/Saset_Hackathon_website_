import React, { useState, useEffect } from 'react';

/**
 * Avionics Altitude & Battery Telemetry HUD
 * Tracks story elevation from 30,000 FT down to Ground level with initial fluctuation
 */
export default function AltitudeHud() {
  const [elevation, setElevation] = useState(30000);
  const [flushedDisplay, setFlushedDisplay] = useState('30,000 FT');
  const [voltage, setVoltage] = useState(4.20);
  const [soc, setSoc] = useState(100);

  useEffect(() => {
    // Initial altimeter calibration fluctuation
    const timeouts = [];
    const isScrolled = window.scrollY > 10;

    if (!isScrolled) {
      const fluctuations = [
        [300, '29,800 FT'],
        [600, '30,250 FT'],
        [900, '29,950 FT'],
        [1200, null] // lock on live
      ];

      fluctuations.forEach(([time, val]) => {
        timeouts.push(
          window.setTimeout(() => {
            // The final "lock on live" step must always run, otherwise the
            // readout freezes on a calibration value if the page scrolled meanwhile
            if (val === null || window.scrollY <= 10) {
              setFlushedDisplay(val);
            }
          }, time)
        );
      });
    } else {
      setFlushedDisplay(null);
    }

    const stopCalibration = () => {
      timeouts.forEach(t => clearTimeout(t));
      timeouts.length = 0;
      setFlushedDisplay(null);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Any real scroll (incl. the browser restoring position on reload) ends the intro flicker
      if (scrollY > 10 && timeouts.length) stopCalibration();

      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      const currentAlt = Math.round(30000 * (1 - ratio));
      setElevation(currentAlt);

      // Battery Cell voltage: 4.20V down to 2.85V
      const currentVolt = (4.20 - ratio * 1.35).toFixed(2);
      setVoltage(currentVolt);
      setSoc(Math.round((1 - ratio) * 100));

      // Update CSS custom property for the physical track fill
      document.documentElement.style.setProperty('--altitude-remaining', (currentAlt / 30000).toFixed(4));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Page height changes (fonts, footer wordmark sizing) shift the scroll ratio too
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const numberFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

  return (
    <aside className="altitude-hud" aria-label="Current story elevation & cell telemetry">
      <div className="altitude-hud__track" aria-hidden="true">
        <span style={{ transform: `scaleY(${soc / 100})` }} />
      </div>
      <div className="altitude-hud__readout">
        <span className="altitude-hud__label">Altitude</span>
        <output className="altitude-hud__value">
          {flushedDisplay ?? `${numberFormatter.format(elevation)} FT`}
        </output>
        <div className="altitude-hud__battery-gauge">
          <span>⚡ {voltage}V</span>
          <span>·</span>
          <span>{soc}% SoC</span>
        </div>
      </div>
    </aside>
  );
}
