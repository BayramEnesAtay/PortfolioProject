import { useEffect, useRef } from 'react';

/**
 * PixelCursorTrail - High-performance canvas-based neo-brutalist pixel cursor trail.
 */
export const PixelCursorTrail = ({
  pixelSize = 10,
  fadeSpeed = 0.028,
  maxParticles = 22,
  minDistance = 15,
  colors = ['#00f59b', '#ff4d4d']
}) => {
  const canvasRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist < minDistance) return;

      lastPosRef.current = { x: e.clientX, y: e.clientY };

      const color = colors[Math.floor(Math.random() * colors.length)];
      const snappedX = Math.floor(e.clientX / (pixelSize / 2)) * (pixelSize / 2);
      const snappedY = Math.floor(e.clientY / (pixelSize / 2)) * (pixelSize / 2);

      particles.push({
        x: snappedX,
        y: snappedY,
        size: pixelSize,
        opacity: 1,
        color: color,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8
      });

      if (particles.length > maxParticles) {
        particles.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.opacity -= fadeSpeed;
        p.x += p.vx;
        p.y += p.vy;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pixelSize, fadeSpeed, maxParticles, minDistance, colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999
      }}
    />
  );
};

export default PixelCursorTrail;
