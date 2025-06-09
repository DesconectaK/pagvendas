
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import Image from 'next/image';

export default function ActivityHighlightsSection() {
  return (
    <section className="w-full bg-card text-card-foreground py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 font-headline text-primary">AS CRIANÇAS AMAM!</h2>
        </AnimatedScrollWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start"> {/* Changed items-center to items-start to avoid shrinking if text is removed */}
          <AnimatedScrollWrapper animationType="fade-in" delay={200} duration={700}>
            <div className="aspect-video rounded-lg shadow-xl overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/logoc1.webp" 
                alt="Atividade Desconecta 1 - Crianças criando e se divertindo"
                width={600}
                height={338}
                className="object-cover w-full h-full"
                data-ai-hint="kids activity one"
              />
            </div>
            {/* Description removed as per request */}
          </AnimatedScrollWrapper>
          <AnimatedScrollWrapper animationType="fade-in" delay={350} duration={700}>
            <div className="aspect-video rounded-lg shadow-xl overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/logoc2.webp" 
                alt="Atividade Desconecta 2 - Crianças explorando e aprendendo"
                width={600}
                height={338}
                className="object-cover w-full h-full"
                data-ai-hint="kids activity two"
              />
            </div>
            {/* Description removed as per request */}
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
