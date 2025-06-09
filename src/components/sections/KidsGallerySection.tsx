
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function KidsGallerySection() {
  return (
    <section className="w-full bg-card text-card-foreground py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-16 sm:mb-20 md:mb-28 lg:mb-32 font-headline text-primary">
            AS CRIANÇAS AMAM!
          </h2>
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper animationType="fade-in" delay={200} duration={1000}>
          <div className="relative flex justify-center items-end h-[350px] sm:h-[450px] md:h-[520px] lg:h-[580px] group">
            
            {/* Left Image Frame (Horizontal) */}
            <div 
              className={cn(
                "absolute left-[0%] sm:left-[4%] md:left-[8%] lg:left-[10%] bottom-[0%] sm:bottom-[2%]", 
                "w-[48%] sm:w-[42%] md:w-[38%]", 
                "z-0 transform -rotate-[12deg] transition-all duration-500 ease-out",
                "group-hover:-rotate-[15deg] group-hover:scale-105", 
                "hover:!z-20 hover:!rotate-0 hover:!scale-110" 
              )}
            >
              <div className="aspect-[16/9] rounded-lg shadow-xl border-2 border-primary/30 overflow-hidden bg-neutral-800">
                <Image
                  src="https://placehold.co/350x197.png" 
                  alt="Moldura horizontal animada de criança brincando (esquerda)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 48vw, (max-width: 767px) 42vw, 38vw"
                  data-ai-hint="kids playing activity"
                />
              </div>
            </div>

            {/* Central Image Frame (Vertical) */}
            <div 
              className={cn(
                "relative z-10 transform transition-all duration-500 ease-out", 
                "w-[45%] sm:w-[38%] md:w-[30%] lg:w-[28%]", 
                "max-w-[170px] sm:max-w-[210px] md:max-w-[240px] lg:max-w-[270px]", 
                "group-hover:scale-110 group-hover:-translate-y-2", 
                "mb-[8%] sm:mb-[10%]" // This margin helps create the layered effect by pushing side images "behind" due to items-end
              )}
            >
              <div className="aspect-[9/16] rounded-lg shadow-2xl border-2 border-primary/50 overflow-hidden bg-neutral-800">
                <Image
                  src="https://placehold.co/280x498.png" 
                  alt="Moldura vertical animada de criança brincando (central)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 45vw, (max-width: 767px) 38vw, (max-width: 1023px) 30vw, 28vw"
                  data-ai-hint="child creative fun"
                />
              </div>
            </div>

            {/* Right Image Frame (Horizontal) */}
            <div 
              className={cn(
                "absolute right-[0%] sm:right-[4%] md:right-[8%] lg:right-[10%] bottom-[0%] sm:bottom-[2%]", 
                "w-[48%] sm:w-[42%] md:w-[38%]", 
                "z-0 transform rotate-[12deg] transition-all duration-500 ease-out",
                "group-hover:rotate-[15deg] group-hover:scale-105", 
                "hover:!z-20 hover:!rotate-0 hover:!scale-110"
              )}
            >
              <div className="aspect-[16/9] rounded-lg shadow-xl border-2 border-primary/30 overflow-hidden bg-neutral-800">
                <Image
                  src="https://placehold.co/350x197.png" 
                  alt="Moldura horizontal animada de criança brincando (direita)"
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 48vw, (max-width: 767px) 42vw, 38vw"
                  data-ai-hint="children learning offline"
                />
              </div>
            </div>
          </div>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
