
import dynamic from 'next/dynamic';
import VslSection from '@/components/sections/VslSection';
import PurchaseNotification from '@/components/PurchaseNotification';
import CurrentYear from '@/components/CurrentYear';
import { Skeleton } from '@/components/ui/skeleton'; // For loading state

// Dynamically import sections that are typically below the fold
const ProblemSection = dynamic(() => import('@/components/sections/ProblemSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const ActivityHighlightsSection = dynamic(() => import('@/components/sections/ActivityHighlightsSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const OfferSection = dynamic(() => import('@/components/sections/OfferSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const ObjectionsSection = dynamic(() => import('@/components/sections/ObjectionsSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><Skeleton className="h-32 w-3/4" /></div>
});
const GuaranteeSection = dynamic(() => import('@/components/sections/GuaranteeSection'), {
  loading: () => <div className="w-full h-64 flex items-center justify-center"><Skeleton className="h-24 w-3/4" /></div>
});


export default function HomePage() {
  return (
    <div className="flex flex-col items-center bg-background uppercase overflow-x-hidden">
      <VslSection />
      <ProblemSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ActivityHighlightsSection />
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
