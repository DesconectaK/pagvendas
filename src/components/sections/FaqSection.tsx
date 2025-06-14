
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: "faq1",
    question: "O QUE <span class='font-bold text-primary'>EU RECEBO</span> AO COMPRAR?",
    answer: "Acesso <span class='font-bold'>IMEDIATO E VITALÍCIO</span> a PDFs com <span class='font-bold'>dezenas (ou centenas no Premium!)</span> de atividades, desenhos e brincadeiras. Tudo <span class='font-bold'>pronto para imprimir</span> e usar. Um arsenal de <span class='font-bold'>diversão inteligente!</span>",
  },
  {
    id: "faq2",
    question: "COMO <span class='font-bold text-primary'>ACESSO</span> O MATERIAL?",
    answer: "Simples! Pagamento aprovado, PÁ! Link no seu e-mail e na página de obrigado. <span class='font-bold'>Acesso na hora</span>, sem complicação, para começar <span class='font-bold'>HOJE</span>.",
  },
  {
    id: "faq3",
    question: "QUAL A <span class='font-bold text-primary'>IDADE CERTA</span> PARA AS ATIVIDADES?",
    answer: "Ideal para crianças de <span class='font-bold'>2 a 10 anos</span>. Mas você <span class='font-bold'>adapta</span> ao ritmo e interesse do seu filho, com sua <span class='font-bold'>orientação amorosa</span>.",
  },
  {
    id: "faq4",
    question: "E SE <span class='font-bold text-primary'>NÃO FUNCIONAR</span> PARA MEU FILHO?",
    answer: "<span class='font-bold'>SATISFAÇÃO TOTAL ou seu dinheiro 100% DE VOLTA</span>. Garantia <span class='font-bold'>INCONDICIONAL de 7 dias</span>. Se não amar, e-mail e reembolso total. <span class='font-bold'>RISCO ZERO</span>.",
  },
  {
    id: "faq5",
    question: "PRECISO DE <span class='font-bold text-primary'>MATERIAIS CAROS</span>?",
    answer: "Não! A maioria usa o que <span class='font-bold'>você já tem em casa</span>: lápis de cor, papel, tesoura, cola. Foco na <span class='font-bold'>criatividade e interação</span>, não em gastos extras.",
  }
];

export default function FaqSection() {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800} className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 font-headline text-primary" dangerouslySetInnerHTML={{ __html: "DÚVIDAS? <span class='font-bold'>ESCLARECEMOS!</span>" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed normal-case">
             Respostas claras para você tomar a <span className='font-bold'>MELHOR DECISÃO</span> com <span className='font-bold'>100% de confiança</span>.
          </p>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper animationType="fade-in" delay={200} duration={1000}>
          <Accordion type="single" collapsible className="w-full text-left">
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id} className="border-primary/30 mb-3 rounded-lg bg-card overflow-hidden">
                <AccordionTrigger className="p-5 text-md md:text-lg font-semibold hover:no-underline text-primary hover:bg-primary/10">
                   <HelpCircle className="h-5 w-5 mr-2.5 text-primary shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: faq.question.replace(/class='/g, "className='") }} />
                </AccordionTrigger>
                <AccordionContent className="p-5 pt-0 text-sm md:text-base leading-relaxed text-foreground normal-case">
                  <span dangerouslySetInnerHTML={{ __html: faq.answer.replace(/class='/g, "className='") }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
