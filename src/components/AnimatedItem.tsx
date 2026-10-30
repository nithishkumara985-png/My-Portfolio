import React from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-500 ease-out transform motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 will-change-transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      } ${className}`}
    >
      {children}
    </div>
  );
};
