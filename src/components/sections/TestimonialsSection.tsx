
"use client";
import AnimatedScrollWrapper from '@/components/AnimatedScrollWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquareQuote, Star } from 'lucide-react';
// import Image from 'next/image'; // Image import removed as it's no longer used
import { useEffect } from 'react';

const vTurbAccountId = "203430db-ad79-48e2-a8e6-4634be611b23";

const videoTestimonialsData = [
  {
    videoId: "68466a5bc6681578ee740ab0", 
    thumbnailUrl: "https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68466a5bc6681578ee740ab0/thumbnail.jpg",
    altText: "Depoimento em vídeo de mãe sobre o Método Desconecta",
    dataAiHint: "testimonial video parent",
  },
  {
    videoId: "68465c5d7a4322cf2746a930", 
    thumbnailUrl: "https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68465c5d7a4322cf2746a930/thumbnail.jpg", 
    altText: "Depoimento em vídeo de família sobre o Método Desconecta",
    dataAiHint: "testimonial video family",
  },
];

const writtenTestimonialsData = [
  {
    id: 1,
    name: "Juliana Santos",
    testimonial: "Em casa, a mudança foi notável. Meu filho voltou a sorrir e brincar, e eu finalmente tenho <span class='font-semibold text-primary-foreground'>meus momentos de paz</span>. Recomendo de olhos fechados!",
    // avatarSrc: "https://placehold.co/56x56.png", 
    // altText: "Avatar de Juliana Santos",
    // dataAiHint: "woman portrait happy"
  },
  {
    id: 2,
    name: "Carlos Pereira",
    testimonial: "O <span class='font-semibold text-primary-foreground'>Método Premium</span> foi um divisor de águas. Minha filha está mais <span class='font-semibold text-primary-foreground'>criativa e calma</span>. Valeu cada centavo pela <span class='font-semibold text-primary-foreground'>transformação</span>!",
    // avatarSrc: "/images/selfie03.webp",
    // altText: "Avatar de Carlos Pereira",
    // dataAiHint: "man portrait confident"
  },
];

interface VTurbVideoEmbedProps {
  videoId: string;
  accountId: string;
  thumbnailUrl: string;
  altText: string;
  dataAiHint: string;
}

const VTurbVideoEmbed: React.FC<VTurbVideoEmbedProps> = ({ videoId, accountId, thumbnailUrl, altText, dataAiHint }) => {
  useEffect(() => {
    const scriptId = `scr_${videoId}`;
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src = `https://scripts.converteai.net/${accountId}/players/${videoId}/player.js`;
    script.async = true;
    document.head.appendChild(script);

  }, [videoId, accountId]); 

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-2">
      <div
        id={`vid_${videoId}`}
        style={{
          position: 'absolute',
          width: '105%', 
          height: '105%',
          top: '-2.5%',   
          left: '-2.5%',  
        }}
      >
        <img
          id={`thumb_${videoId}`}
          src={thumbnailUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          alt={altText}
          data-ai-hint={dataAiHint}
        />
        <div
          id={`backdrop_${videoId}`}
          style={{
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
            position: 'absolute',
            top: 0,
            height: '100%',
            width: '100%',
          }}
        ></div>
      </div>
    </div>
  );
};


export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <AnimatedScrollWrapper animationType="slide-in-bottom" duration={800}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 font-headline text-primary" dangerouslySetInnerHTML={{ __html: "VEJA QUEM <span class='font-bold'>JÁ TRANSFORMOU</span> SUA FAMÍLIA!" }} />
          <p className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed normal-case">
            Mães e pais reais, resultados incríveis. Inspire-se!
          </p>
          <div className="flex items-center justify-center text-xl text-primary font-bold mb-10">
            <Users size={32} className="mr-3" />
            <span>+ DE <span className='font-black'>7.200 FAMÍLIAS</span> FELIZES!</span>
          </div>
        </AnimatedScrollWrapper>

        {/* Video Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {videoTestimonialsData.map((testimonial, index) => (
            <AnimatedScrollWrapper key={testimonial.videoId} animationType="fade-in" delay={150 * (index + 1)} duration={1000}>
              <Card className="bg-card border-primary/30 shadow-xl flex flex-col h-full p-4 items-center justify-center text-center">
                <VTurbVideoEmbed
                  videoId={testimonial.videoId}
                  accountId={vTurbAccountId}
                  thumbnailUrl={testimonial.thumbnailUrl}
                  altText={testimonial.altText}
                  dataAiHint={testimonial.dataAiHint}
                />
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {writtenTestimonialsData.map((testimonial, index) => (
            <AnimatedScrollWrapper key={testimonial.id} animationType="fade-in" delay={150 * (index + videoTestimonialsData.length + 1)} duration={1000}>
              <Card className="bg-card border-primary/30 shadow-xl flex flex-col h-full p-6 text-left">
                <CardContent className="p-0 flex flex-col items-start">
                  <div className="flex items-center mb-3 w-full">
                    {/* Avatar Image Removed */}
                    <div>
                      <p className="font-bold text-primary-foreground text-lg">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-primary fill-primary mr-0.5" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <MessageSquareQuote size={24} className="text-primary mb-2 self-start" />
                  <p className="text-muted-foreground testimonial-text leading-relaxed" dangerouslySetInnerHTML={{ __html: testimonial.testimonial }} />
                </CardContent>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

