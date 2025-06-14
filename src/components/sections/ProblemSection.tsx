
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Card } from '@/components/ui/card'; 
import { XCircle, AlertTriangle, RotateCcw } from 'lucide-react';

const falseSolutions = [
  {
    icon: <XCircle className="h-10 w-10 text-primary mb-3" />,
    title: "PROIBIR? SÓ PIORA!",
    description: "GERA <span style='color:#E53935; font-weight:600;'>BIRRA E FRUSTRAÇÃO</span>, NÃO EDUCA.",
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-primary mb-3" />,
    title: "OUTRA TELA? MESMO VÍCIO!",
    description: "TABLET OU TV SÓ <span style='color:#E53935; font-weight:600;'>MUDAM O APARELHO</span>, NÃO O PROBLEMA.",
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-primary mb-3" />,
    title: "IGNORAR? BOMBA-RELÓGIO!",
    description: "O <span style='color:#E53935; font-weight:600;'>VÍCIO CRESCE</span>, OS <span style='color:#E53935; font-weight:600;'>PREJUÍZOS TAMBÉM</span>. AJA AGORA!",
  },
];

export default function ProblemSection() {
  return (
    <section className="w-full bg-card text-card-foreground py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-primary font-headline" dangerouslySetInnerHTML={{ __html: "CANSADA DESSA LUTA DIÁRIA?" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed normal-case" dangerouslySetInnerHTML={{ __html: "<span style='color:#E53935; font-weight:600;'>BIRRAS</span> POR TELAS? <span style='color:#E53935; font-weight:600;'>CULPA</span> POR CEDER SÓ PARA TER <span class='font-bold'>UM MINUTO DE PAZ</span>? <span class='font-bold text-primary'>VOCÊ MERECE AJUDA.</span>" }} />
        </AnimatedScrollWrapper>
        
        <AnimatedScrollWrapper animationType="fade-in" delay={400} duration={800}>
          <Card className="bg-background border-primary/30 shadow-xl p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8">
              {falseSolutions.map((solution, index) => (
                <AnimatedScrollWrapper
                  key={index}
                  animationType="slide-in-bottom"
                  delay={150 * (index + 1)}
                  duration={700}
                  className="flex flex-col items-center text-center"
                >
                  {solution.icon}
                  <h3 className="text-lg font-bold mt-0 mb-1 uppercase">{solution.title}</h3>
                  <p className="text-sm leading-relaxed normal-case text-muted-foreground" dangerouslySetInnerHTML={{ __html: solution.description }} />
                  {index < falseSolutions.length - 1 && (
                    <hr className="mt-4 border-primary/20 w-4/5 md:hidden" />
                  )}
                </AnimatedScrollWrapper>
              ))}
            </div>
          </Card>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper animationType="fade-in" delay={800} duration={1000}>
           <p className="mt-10 text-xl md:text-2xl font-semibold normal-case" dangerouslySetInnerHTML={{ __html: "EXISTE UMA SAÍDA <span class='font-bold text-primary'>REAL E DIVERTIDA</span> PARA SUA FAMÍLIA."}} />
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
