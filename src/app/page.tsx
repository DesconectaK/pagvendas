
import VslSection from '@/components/sections/VslSection';
// import IntroSection from '@/components/sections/IntroSection'; // Removido conforme estratégia VSL
import ProblemSection from '@/components/sections/ProblemSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ActivityHighlightsSection from '@/components/sections/ActivityHighlightsSection'; // Nova seção
// import KidsGallerySection from '@/components/sections/KidsGallerySection'; // Seção removida
import OfferSection from '@/components/sections/OfferSection';
import ObjectionsSection from '@/components/sections/ObjectionsSection';
import FaqSection from '@/components/sections/FaqSection';
import GuaranteeSection from '@/components/sections/GuaranteeSection';
import PurchaseNotification from '@/components/PurchaseNotification';
import CurrentYear from '@/components/CurrentYear';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background uppercase overflow-x-hidden">
      <VslSection />
      <ProblemSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ActivityHighlightsSection /> {/* Nova seção adicionada aqui */}
      {/* ID da seção de oferta para scroll */}
      <div id="product-offer-details">
        <OfferSection />
      </div>
      <ObjectionsSection />
      <FaqSection />
      <GuaranteeSection />
      <PurchaseNotification />
      <footer className="w-full py-8 text-center bg-card text-card-foreground">
        <p className="text-sm normal-case">&copy; <CurrentYear /> DESCONECTA KIDS. Todos os direitos reservados.</p>
        <p className="text-xs normal-case mt-1 text-muted-foreground">Um produto desenvolvido para transformar famílias.</p>
      </footer>
    </div>
  );
}
