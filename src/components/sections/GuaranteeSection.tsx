
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Button } from '@/components/ui/button'; // Changed from AnimatedCtaButton
import { ShieldCheck } from 'lucide-react';

const CHECKOUT_URL = "https://www.ggcheckout.com/checkout/v2/szpSXwDeeUaRVMyabYcS";

export default function GuaranteeSection() {
  const redirectToCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };
  return (
    <section className="w-full bg-primary text-primary-foreground py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4">
        <AnimatedScrollWrapper animationType="fade-in" duration={800} className="w-full flex flex-col items-center">
          <ShieldCheck className="h-20 w-20 md:h-24 md:w-24 mb-3 text-primary-foreground" /> {/* Increased icon size */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 font-headline" dangerouslySetInnerHTML={{ __html: "RISCO ZERO TOTAL!" }} />
          <p className="text-sm sm:text-base mb-4 leading-relaxed normal-case max-w-md" dangerouslySetInnerHTML={{ __html: "Teste o Método por <span class='font-bold'>7 DIAS</span>. Ame ou <span class='font-bold'>100% DO SEU DINHEIRO DE VOLTA</span>. Simples assim!" }} />
          <Button  // Using standard Button for more control over specific classes
            onClick={redirectToCheckout}
            className="rounded-lg transform transition-all duration-300 ease-in-out bg-primary-foreground text-primary hover:bg-white/90 font-bold text-sm md:text-base py-2 px-5 shadow-md animate-pulse-strong" // Adjusted classes for size
          >
            QUERO TRANSFORMAR MINHA FAMÍLIA (SEM RISCOS)!
          </Button>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
