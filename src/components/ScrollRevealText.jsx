import React, { useRef, useEffect, useMemo } from 'react';

/**
 * Word-by-Word Scroll Reveal Component
 * Replicating Applied Imagination's line-offset blur and progressive opacity reveal
 */
export default function ScrollRevealText({
  text = '',
  as: Component = 'p',
  className = '',
  highlightWord = ''
}) {
  const containerRef = useRef(null);
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const spanElements = Array.from(el.querySelectorAll('.scroll-reveal-word'));
    if (!spanElements.length) return;

    let wordData = [];
    let animFrame = null;

    const computeWordLines = () => {
      const scrollY = window.scrollY;
      const tops = spanElements.map((s) => s.getBoundingClientRect().top + scrollY);
      let lastTop = NaN;
      let wordInLine = 0;

      wordData = spanElements.map((s, idx) => {
        const top = tops[idx];
        if (Number.isNaN(lastTop) || Math.abs(top - lastTop) > 3) {
          wordInLine = 0;
          lastTop = top;
        } else {
          wordInLine += 1;
        }
        return {
          element: s,
          documentTop: top,
          wordInLine,
          lastProgress: -1
        };
      });

      updateScroll();
    };

    const updateScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      wordData.forEach((w) => {
        const dist = w.documentTop - scrollY;
        const enterThresh = 0.98 * vh - 4 * w.wordInLine;
        const peakThresh = 0.72 * vh - w.wordInLine;

        const progress = Math.min(
          Math.max((enterThresh - dist) / Math.max(enterThresh - peakThresh, 1), 0),
          1
        );

        if (Math.abs(progress - w.lastProgress) >= 0.002) {
          w.lastProgress = progress;
          w.element.style.opacity = progress.toFixed(4);
          w.element.style.filter =
            progress > 0.99 ? 'none' : `blur(${((1 - progress) * 6).toFixed(2)}px)`;
        }
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(updateScroll);
    };

    const onResize = () => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(computeWordLines);
    };

    computeWordLines();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [words]);

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const isHighlight =
          highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());
        return (
          <React.Fragment key={`${word}-${idx}`}>
            <span
              className="scroll-reveal-word"
              style={{
                opacity: 0.15,
                filter: 'blur(4px)',
                color: isHighlight ? 'var(--color-red)' : undefined,
                fontWeight: isHighlight ? 500 : undefined
              }}
            >
              {word}
            </span>
            {idx < words.length - 1 ? ' ' : ''}
          </React.Fragment>
        );
      })}
    </Component>
  );
}
