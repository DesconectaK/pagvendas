"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-in' | 'slide-in-bottom' | 'slide-in-left' | 'slide-in-right';

interface AnimatedScrollWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number; // IntersectionObserver threshold
  staggerChildren?: number; // Stagger delay for direct children in ms
}

export default function AnimatedScrollWrapper({
  children,
  className,
  animationType = 'fade-in',
  delay = 0,
  duration = 700, // Default duration
  threshold = 0.1,
  staggerChildren,
}: AnimatedScrollWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          // No unobserve to allow re-animation if scrolled out and back in, if desired.
          // For once-only animation: if (ref.current) observer.unobserve(ref.current);
        } else {
          // Optional: reset visibility if scrolled out of view to re-trigger animation
          // setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay, threshold]);

  const animationClasses: Record<AnimationType, string> = {
    'fade-in': `transition-opacity ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`,
    'slide-in-bottom': `transition-all ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
    'slide-in-left': `transition-all ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`,
    'slide-in-right': `transition-all ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`,
  };
  
  const style = {
    transitionDuration: `${duration}ms`,
  };

  if (staggerChildren && React.Children.count(children) > 0) {
    return (
      <div ref={ref} className={cn(className)}>
        {React.Children.map(children, (child, index) => (
          <div
            style={{ transitionDelay: `${index * staggerChildren}ms`, ...style }}
            className={cn(animationClasses[animationType])}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} style={style} className={cn(animationClasses[animationType], className)}>
      {children}
    </div>
  );
}
