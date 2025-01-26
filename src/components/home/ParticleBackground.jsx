import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#111111",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
          },
          modes: {
            connect: {
              distance: 80,
              radius: 250,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: "#fb2c36",
          },
          links: {
            color: "#fb2c36",
            distance: 50,
            enable: true,
            opacity: 0,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.75,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 300,
          },
          opacity: {
            value: 0.4,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              maximumValue: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
} 