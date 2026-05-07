import { useCallback, useState, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: isMobile ? 25 : 60, density: { enable: true, area: 900 } },
          color: { value: ['#2B7D6D', '#78b4ff', '#ffffff'] },
          opacity: { value: 0.3, random: true },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 140,
            color: '#2B7D6D',
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none' as const,
            random: true,
            outModes: 'bounce' as const,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
