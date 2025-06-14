
"use client";
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedCtaButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export default function AnimatedCtaButton({ children, className, ...props }: AnimatedCtaButtonProps) {
  return (
    <Button
      className={cn(
        'bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out text-lg md:text-xl', // font-bold changed to font-semibold, px-8 to px-6
        'animate-pulse-strong', 
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
