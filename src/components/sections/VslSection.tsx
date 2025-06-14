
"use client";
import { useEffect } from 'react';
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import AnimatedCtaButton from '@/components/AnimatedCtaButton';

export default function VslSection() {
  const scrollToOffer = () => {
    const offerSection = document.querySelector('#product-offer-details');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const vturbVideoId = "68473bf78ce134c08f091906"; 
  const vturbAccountId = "203430db-ad79-48e2-a8e6-4634be611b23";

  useEffect(() => {
    const scriptId = `scr_${vturbVideoId}`;
    if (document.getElementById(scriptId)) {
      // Player script already loaded or loading
      const playerDiv = document.getElementById(`vid_${vturbVideoId}`);
      if (playerDiv && playerDiv.children.length === 0) { 
         // This part is tricky as VTurb player might have its own initialization logic.
         // Forcing re-append of script might not always work or might duplicate players.
         // Best to rely on VTurb's script to handle initialization once loaded.
      }
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = `https://scripts.converteai.net/${vturbAccountId}/players/${vturbVideoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

  }, [vturbVideoId, vturbAccountId]);

  return (
    <AnimatedScrollWrapper animationType="fade-in" duration={1000}>
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-1 md:p-2 relative text-center overflow-hidden">
        <AnimatedScrollWrapper animationType="slide-in-bottom" delay={200} duration={800}>
          <p className="text-md sm:text-lg md:text-xl mb-5 max-w-2xl normal-case px-2" dangerouslySetInnerHTML={{ __html: "Seu filho HIPNOTIZADO pelo celular? Chega de guerras diárias!" }} />
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper animationType="fade-in" delay={400} duration={1000}>
          <div
            className="relative w-[calc(100vw-1rem)] max-w-[420px] h-[calc((100vw-1rem)*1.8)] max-h-[756px] bg-neutral-950 rounded-[20px] border-2 border-neutral-700 shadow-2xl overflow-hidden p-1 mx-auto group"
          >
            <div className="absolute inset-[2px] rounded-[18px] bg-black overflow-hidden flex items-center justify-center w-full h-full">
              {/* VTurb Embed Code START */}
              <div
                id={`vid_${vturbVideoId}`}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%', 
                }}
                tabIndex={-1}
              >
                <img
                  id={`thumb_${vturbVideoId}`}
                  alt="Vídeo demonstrativo do Método Desconecta para atividades criativas sem tela para crianças"
                  src="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/thumbnail.jpg" // Updated thumbnail
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  data-ai-hint="children playing offline"
                  tabIndex={-1}
                />
                <div
                  id={`backdrop_${vturbVideoId}`}
                  style={{
                    WebkitBackdropFilter: 'blur(5px)',
                    backdropFilter: 'blur(5px)',
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: '100%'
                  }}
                ></div>
              </div>
              {/* VTurb Embed Code END */}
            </div>
            {/* Notch do celular */}
            <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-800 rounded-b-md z-10"></div>
          </div>
        </AnimatedScrollWrapper>

        <AnimatedScrollWrapper animationType="slide-in-bottom" delay={600} duration={800}>
          <p className="mt-6 text-md sm:text-lg md:text-xl max-w-xl normal-case px-2" dangerouslySetInnerHTML={{ __html: "Descubra o método que devolve a infância às crianças e a paz às mães." }} />
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper animationType="fade-in" delay={800} duration={1000} className="mt-8 mb-4 w-full max-w-md px-4">
          <AnimatedCtaButton onClick={scrollToOffer} className="text-lg md:text-xl py-4 px-8 w-full">
            QUERO MINHA FAMÍLIA FELIZ DE NOVO!
          </AnimatedCtaButton>
        </AnimatedScrollWrapper>
      </section>
    </AnimatedScrollWrapper>
  );
}
