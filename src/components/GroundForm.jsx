import React, { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FOOTER_LINKS = [
  { label: 'Themes', href: '#themes' },
  { label: 'Dates', href: '#timeline' },
  { label: 'Prizes & Fees', href: '#fees' },
  { label: 'FAQ', href: '#faq' }
];

const WORDMARK_LINES = ['Intelligent', 'Battery Cell 4.0', 'Hackathon 2026'];

/** Scales the footer wordmark so its longest line spans the full footer width. */
function useFitWordmark() {
  const ref = useRef(null);
  const [size, setSize] = useState(120);

  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;

    const fit = () => {
      const current = parseFloat(getComputedStyle(el).fontSize) || 120;
      const widest = Math.max(...Array.from(el.children).map((line) => line.scrollWidth), 1);
      const next = (current * box.clientWidth) / widest;
      if (Math.abs(next - current) > 0.5) setSize(next);
    };

    const ro = new ResizeObserver(fit);
    ro.observe(box);
    document.fonts?.ready.then(fit);
    fit();
    return () => ro.disconnect();
  }, []);

  return [ref, size];
}

/**
 * React Bits "ScrollFloat" effect (float · chars · up · start order):
 * each character rises from below, stretched tall, and settles as you scroll.
 */
function useScrollFloat(ref, size) {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('.site-footer__char'),
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120, // distance
          scaleY: 2.3, // stretch
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: 1,
          ease: 'back.inOut(2)',
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: el,
            start: 'center bottom+=50%',
            // clamp(): the footer sits at the very end of the page, so the
            // unclamped end could never be reached and letters would freeze mid-float
            end: 'clamp(bottom bottom-=40%)',
            scrub: true // smoothing 0
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [ref]);

  // The wordmark resizes to fit its width; re-measure trigger positions when it does
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [size]);
}

export default function GroundForm() {
  const [wordmarkRef, wordmarkSize] = useFitWordmark();
  useScrollFloat(wordmarkRef, wordmarkSize);

  return (
    <div className="ground" id="register">
      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer__bar">
          <p className="site-footer__credit">
            MADE BY{' '}
            <a
              href="https://github.com/Dubey404aasutosh"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer__credit-link"
              aria-label="DUBEYAASUTOSH on GitHub (opens in a new tab)"
            >
              <Github size={14} strokeWidth={2} aria-hidden="true" />
              DUBEYAASUTOSH
            </a>
          </p>
          <nav className="site-footer__links" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="site-footer__link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <a href="#top" className="site-footer__wordmark-link" aria-label="Intelligent Battery Cell 4.0 Hackathon 2026, back to top">
          <p className="site-footer__wordmark" ref={wordmarkRef} style={{ fontSize: `${wordmarkSize}px` }} aria-hidden="true">
            {WORDMARK_LINES.map((line) => (
              <span key={line} className="site-footer__wordmark-line">
                {Array.from(line).map((char, i) => (
                  <span key={i} className="site-footer__char">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            ))}
          </p>
        </a>
      </footer>
    </div>
  );
}

