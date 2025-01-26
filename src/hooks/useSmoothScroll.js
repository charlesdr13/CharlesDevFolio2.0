import { useEffect, useState } from 'react';
import { useSpring } from 'framer-motion';

export function useSmoothScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const springY = useSpring(scrollY, {
    stiffness: 150,
    damping: 25,
    mass: 0.5,
    restDelta: 0.0001,
    restSpeed: 0.0001,
    immediate: true
  });

  useEffect(() => {
    function updateScroll() {
      setScrollY(window.scrollY);
    }

    requestAnimationFrame(() => {
      springY.set(window.scrollY, { immediate: false });
    });

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [springY]);

  useEffect(() => {
    springY.set(scrollY);
  }, [scrollY, springY]);

  return springY;
} 