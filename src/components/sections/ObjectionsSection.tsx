
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

const objections = [
  {
    id: "obj1",
    question: "SERÁ QUE MEU FILHO <span class='font-bold text-primary'>VAI GOSTAR</span> MESMO?",
    answer: "Sim! As atividades são <span class='font-bold'>divertidas e testadas</span> por milhares de crianças. Preparamos um universo que <span class='font-bold'>encanta e engaja</span>. Ele vai amar (e você terá <span class='font-bold'>seu merecido descanso</span>!).",
  },
  {
    id: "obj2",
    question: "NÃO TENHO <span class='font-bold text-primary'>TEMPO</span> PARA ISSO!",
    answer: "Entendemos a correria! Por isso, são <span class='font-bold'>SIMPLES e RÁPIDAS</span>. Muitas são <span class='font-bold'>independentes</span>. O 'pouco' tempo aqui vira <span class='font-bold'>HORAS DE PAZ</span> e <span class='font-bold'>qualidade de vida</span>.",
  },
  {
    id: "obj3",
    question: "JÁ TENTEI DE TUDO... <span class='font-bold text-primary'>POR QUE AGORA DARIA CERTO?</span>",
    answer: "Este não é 'mais um'. É uma abordagem <span class='font-bold'>COMPLETA e DIVERTIDA</span>, criada por especialistas. Dê essa <span class='font-bold'>CHANCE REAL</span> de transformação. Milhares de mães conseguiram!",
  },
  {
    id: "obj4",
    question: "O INVESTIMENTO É <span class='font-bold text-primary'>ALTO</span> PARA MIM?",
    answer: "Quanto vale <span class='font-bold'>sua paz</span>? A <span class='font-bold'>alegria e o futuro</span> do seu filho? É <span class='font-bold'>MENOS QUE UM LANCHE</span>, mas o retorno é <span class='font-bold'>PARA A VIDA TODA</span>. E com a garantia, o risco é <span class='font-bold'>TODO NOSSO!</span>",
  }
];

export default function ObjectionsSection() {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-primary font-headline" dangerouslySetInnerHTML={{ __html: "AINDA NA DÚVIDA? <span class='font-bold'>RESOLVIDO!</span>" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed normal-case">
             Respostas <span className='font-bold'>DIRETO AO PONTO</span>. Decida com <span className='font-bold'>100% DE SEGURANÇA.</span>
          </p>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper animationType="fade-in" delay={200} duration={1000}>
          <Accordion type="single" collapsible className="w-full text-left">
            {objections.map((obj) => (
              <AccordionItem value={obj.id} key={obj.id} className="border-primary/30 mb-3 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="p-5 text-md md:text-lg font-semibold hover:no-underline text-primary-foreground hover:bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 mr-2.5 text-primary shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: obj.question.replace(/class='/g, "className='") }} />
                </AccordionTrigger>
                <AccordionContent className="p-5 pt-0 text-sm md:text-base leading-relaxed text-muted-foreground normal-case">
                  <span dangerouslySetInnerHTML={{ __html: obj.answer.replace(/class='/g, "className='") }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
