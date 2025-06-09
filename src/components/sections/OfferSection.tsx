
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import AnimatedCtaButton from '@/components/AnimatedCtaButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Palette, Puzzle, Star, Zap, Music, ToyBrick, Gift } from 'lucide-react';

const offer1Features = [
  { icon: <FileText className="h-5 w-5 text-primary" />, text: "5 Atividades Exclusivas" },
  { icon: <Puzzle className="h-5 w-5 text-primary" />, text: "5 Brincadeiras Criativas" },
  { icon: <Palette className="h-5 w-5 text-primary" />, text: "5 Desenhos para Colorir" },
];

const offer2Features = [
  { icon: <Zap className="h-5 w-5 text-primary" />, text: "+100 Atividades Exclusivas" },
  { icon: <ToyBrick className="h-5 w-5 text-primary" />, text: "+50 Brincadeiras Criativas" },
  { icon: <Palette className="h-5 w-5 text-primary" />, text: "+50 Desenhos para Colorir" },
  { icon: <Music className="h-5 w-5 text-primary" />, text: "+50 Atividades Musicais" },
];

const premiumBonus = { icon: <Gift className="h-6 w-6 text-yellow-400" />, text: "BÔNUS ESPECIAL: KIT TDAH/TEA" };

const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/szpSXwDeeUaRVMyabYcS";

export default function OfferSection() {
  const redirectToCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section className="w-full bg-card text-card-foreground py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-headline text-primary" dangerouslySetInnerHTML={{ __html: "A <span class='font-bold'>DECISÃO QUE MUDA TUDO</span> ESTÁ AQUI!" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto normal-case">
            Menos telas, mais sorrisos. Seu filho merece. Escolha o plano e <span className='font-bold'>COMECE A TRANSFORMAÇÃO HOJE!</span>
          </p>
        </AnimatedScrollWrapper>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Offer 2 - Premium */}
          <AnimatedScrollWrapper animationType="fade-in" delay={100} duration={1000}>
            <Card className="bg-primary/10 border-2 border-primary shadow-2xl flex flex-col h-full ring-2 ring-primary ring-offset-4 ring-offset-background">
              <CardHeader className="p-6 flex flex-col items-center pt-8 md:pt-10">
                <div className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wide animate-pulse-strong mb-3">
                  <Star size={16} className="fill-primary-foreground text-primary-foreground mr-1" />
                  <span>MAIS ESCOLHIDO</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center">MÉTODO <span className='text-primary'>PREMIUM</span></CardTitle>
                <CardDescription className="text-md text-card-foreground pt-1 normal-case text-center" dangerouslySetInnerHTML={{ __html: "A <span class='font-bold'>transformação completa</span> para sua família. <span class='font-bold'>Recupere seu tempo</span> e veja seu filho <span class='font-bold'>desenvolver todo o potencial</span>, de forma leve e divertida!" }} />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                 <ul className="space-y-2 text-left mb-4">
                  {offer2Features.map((item, idx) => (
                     <AnimatedScrollWrapper key={idx} animationType="slide-in-left" delay={idx * 50 + 200} duration={500}>
                       <li className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-md normal-case">{item.text}</span>
                      </li>
                    </AnimatedScrollWrapper>
                  ))}
                  <AnimatedScrollWrapper animationType="slide-in-left" delay={offer2Features.length * 50 + 200} duration={500}>
                    <li className="flex items-center gap-3 p-3 bg-primary/20 rounded-md border border-yellow-400/50 shadow-inner my-2">
                      {premiumBonus.icon}
                      <span className="text-md normal-case font-semibold text-yellow-400">{premiumBonus.text}</span>
                    </li>
                  </AnimatedScrollWrapper>
                </ul>
                <div className="mt-auto"> 
                  <div className="my-3">
                    <p className="text-lg text-muted-foreground line-through">DE R$97,00</p>
                    <p className="text-primary mt-0">
                      <span className="text-2xl md:text-3xl font-medium">SÓ HOJE POR</span><br/>
                      <span className="text-5xl md:text-6xl font-black">R$19,90</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground normal-case">Pagamento único. <span className='font-bold'>Acesso VITALÍCIO.</span> OFERTA LIMITADA!</p>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2 pt-3 mt-auto p-6"> 
                <AnimatedCtaButton onClick={redirectToCheckout} className="w-full text-lg py-3.5 px-6">
                  QUERO A TRANSFORMAÇÃO COMPLETA!
                </AnimatedCtaButton>
                 <p className="text-xs text-muted-foreground normal-case">COMPRA 100% SEGURA. DECISÃO INTELIGENTE!</p>
              </CardFooter>
            </Card>
          </AnimatedScrollWrapper>

          {/* Offer 1 - "Normal" */}
          <AnimatedScrollWrapper animationType="fade-in" delay={200} duration={1000}>
            <Card className="bg-background border-primary/50 shadow-xl flex flex-col h-full">
              <CardHeader className="pb-4 pt-[5rem] md:pt-[5.5rem] p-6"> 
                <CardTitle className="text-2xl md:text-3xl font-bold">MÉTODO <span className='text-primary'>NORMAL</span></CardTitle>
                <CardDescription className="text-md text-card-foreground pt-1 normal-case" dangerouslySetInnerHTML={{ __html: "Um <span class='font-bold'>primeiro passo</span> para sentir a <span class='font-bold'>diferença no dia a dia</span>. Comece a <span class='font-bold'>resgatar os momentos de brincadeira</span>." }} />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <ul className="space-y-2 text-left mb-4">
                  {offer1Features.map((item, idx) => (
                    <AnimatedScrollWrapper key={idx} animationType="slide-in-left" delay={idx * 50 + 300} duration={500}>
                       <li className="flex items-center gap-3">
                        {item.icon}
                        <span className="text-md normal-case">{item.text}</span>
                      </li>
                    </AnimatedScrollWrapper>
                  ))}
                </ul>
                <div className="mt-auto"> 
                  <div className="my-3">
                    <p className="text-md text-muted-foreground line-through">DE R$19,90</p>
                    <p className="text-primary mt-0">
                      <span className="text-xl font-medium">SÓ HOJE POR</span><br/>
                      <span className="text-3xl md:text-4xl font-bold">R$9,90</span>
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground normal-case">Pagamento único. Acesso imediato.</p>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2 pt-3 mt-auto p-6"> 
                <Button 
                  onClick={redirectToCheckout} 
                  variant="outline" 
                  className="w-full text-md bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-6 rounded-lg shadow-md border-primary/50 hover:border-primary"
                >
                  QUERO COMEÇAR A MUDANÇA!
                </Button>
                 <p className="text-xs text-muted-foreground normal-case">Resultados rápidos, baixo investimento.</p>
              </CardFooter>
            </Card>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
