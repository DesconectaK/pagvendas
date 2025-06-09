
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScreenShareOff, Users, Brain, HeartHandshake, Smile, CheckCircle } from 'lucide-react';

const combinedBenefits = [
  {
    icons: [<ScreenShareOff className="h-10 w-10 text-primary" />, <HeartHandshake className="h-10 w-10 text-primary" />],
    title: "<span class='text-primary'>MENOS TELA</span>, MAIS <span class='text-primary'>CONEXÃO REAL!</span>",
    description: "Seu filho <span class='font-bold'>redescobrindo o brincar</span>, longe do vício digital. <span class='font-bold'>Laços fortalecidos</span> e mais <span class='font-bold'>alegria em casa</span>.",
  },
  {
    icons: [<Users className="h-10 w-10 text-primary" />, <Brain className="h-10 w-10 text-primary" />],
    title: "<span class='text-primary'>TEMPO PARA VOCÊ</span>, DESENVOLVIMENTO <span class='text-primary'>PARA ELE!</span>",
    description: "Ganhe <span class='font-bold'>momentos de paz</span> enquanto ele <span class='font-bold'>aprende e se diverte</span>. Coordenação, raciocínio e foco <span class='font-bold'>de forma natural</span>.",
  },
  {
    icons: [<Smile className="h-10 w-10 text-primary" />, <CheckCircle className="h-10 w-10 text-primary" />],
    title: "FILHO <span class='text-primary'>CALMO E FELIZ</span>, MÃE <span class='text-primary'>REALIZADA!</span>",
    description: "Menos irritabilidade, <span class='font-bold'>mais sorrisos</span>. Alívio para o dia a dia, <span class='font-bold'>mesmo com TDAH/TEA</span>. Uma <span class='font-bold'>nova fase</span> para sua família.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-card text-card-foreground py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-headline text-primary" dangerouslySetInnerHTML={{ __html: "A <span class='font-bold'>TRANSFORMAÇÃO</span> QUE SUA FAMÍLIA MERECE!" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto normal-case" dangerouslySetInnerHTML={{ __html: "Imagine <span class='font-bold text-primary'>risadas em vez de birras</span>, <span class='font-bold text-primary'>descobertas em vez de telas</span>. É a <span class='font-bold text-primary'>PAZ</span> que você busca e o <span class='font-bold text-primary'>FUTURO SAUDÁVEL</span> para seu filho." }} />
        </AnimatedScrollWrapper>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {combinedBenefits.map((benefit, index) => (
            <AnimatedScrollWrapper key={index} animationType="fade-in" delay={150 * (index + 1)} duration={700}>
              <Card className="bg-background border-primary/30 shadow-lg h-full p-6 text-center flex flex-col">
                <CardHeader className="p-0 items-center mb-3">
                  <div className="flex gap-3"> 
                    {benefit.icons.map((icon, i) => <div key={i}>{icon}</div>)}
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-grow">
                  <CardTitle className="text-xl font-bold mb-2 uppercase" dangerouslySetInnerHTML={{ __html: benefit.title }} />
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case flex-grow" dangerouslySetInnerHTML={{ __html: benefit.description }} />
                </CardContent>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
