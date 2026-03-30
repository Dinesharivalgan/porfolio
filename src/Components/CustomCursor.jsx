import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState('default'); // default | hovered | text-hover | clicking

  useEffect(() => {
    const TRAIL_COUNT = 8;

    // Create trail dots
    const trailElements = Array.from({ length: TRAIL_COUNT }, (_, i) => {
      const el = document.createElement('div');
      el.className = 'cursor-trail';
      el.style.opacity = String(1 - i / TRAIL_COUNT);
      el.style.width = `${6 - i * 0.5}px`;
      el.style.height = `${6 - i * 0.5}px`;
      document.body.appendChild(el);
      return { el, x: 0, y: 0 };
    });
    trailsRef.current = trailElements;

    // Mouse move
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    // Hover detection
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('skill-pill') ||
        target.classList.contains('project-card') ||
        target.classList.contains('info-card') ||
        target.classList.contains('contact-link') ||
        target.classList.contains('nav-links')
      ) {
        setCursorState('hovered');
      } else if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3' ||
        target.tagName === 'SPAN'
      ) {
        setCursorState('text-hover');
      } else {
        setCursorState('default');
      }
    };

    const onMouseDown = () => setCursorState('clicking');
    const onMouseUp = () => setCursorState('default');

    // Animate ring + trail with lag
    let trailIndex = 0;
    const animate = () => {
      const lag = 0.12;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lag;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lag;

      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }

      // Trail: shift positions
      if (trailIndex % 2 === 0) {
        const last = trailsRef.current[trailsRef.current.length - 1];
        for (let i = trailsRef.current.length - 1; i > 0; i--) {
          trailsRef.current[i].x = trailsRef.current[i - 1].x;
          trailsRef.current[i].y = trailsRef.current[i - 1].y;
        }
        trailsRef.current[0].x = mousePos.current.x;
        trailsRef.current[0].y = mousePos.current.y;
        trailsRef.current.forEach((t) => {
          t.el.style.left = t.x + 'px';
          t.el.style.top = t.y + 'px';
        });
      }
      trailIndex++;
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      trailElements.forEach((t) => t.el.remove());
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${cursorState === 'hovered' ? 'hovered' : ''} ${
          cursorState === 'text-hover' ? 'text-hover' : ''
        } ${cursorState === 'clicking' ? 'clicking' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${cursorState === 'hovered' ? 'hovered' : ''} ${
          cursorState === 'text-hover' ? 'text-hover' : ''
        } ${cursorState === 'clicking' ? 'clicking' : ''}`}
      />
    </>
  );
};

export default CustomCursor;
