import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Follower() {
  const followerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveFollower = (e: MouseEvent) => {
      if (!followerRef.current) return;
      gsap.to(followerRef.current, {
        x: e.clientX - 1,
        y: e.clientY - 1,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', moveFollower);

    return () => {
      window.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return <div className="hidden sm:block fixed size-12 bg-carmine-pink/20 rounded-full pointer-events-none z-1000 -translate-x-1/2 -translate-y-1/2" ref={followerRef} />;
};