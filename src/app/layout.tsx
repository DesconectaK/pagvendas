
import type { Metadata } from 'next';
import './globals.css';
import ClientSideToaster from '@/components/ClientSideToaster';

export const metadata: Metadata = {
  title: 'MÉTODO DESCONECTA',
  description: 'Transforme o tempo de tela do seu filho em diversão criativa e aprendizado!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* VTurb Speed Optimization Links - VSL Section (Updated) */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68473bb3d17dfe0519c08193/main.m3u8" as="fetch" />

        {/* VTurb Speed Optimization Links - Testimonial Video 1 */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68466a5bc6681578ee740ab0/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68466a5bc6681578ee740ab0/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68466a577a4322cf2746b257/main.m3u8" as="fetch" />

        {/* VTurb Speed Optimization Links - Testimonial Video 2 */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68465c5d7a4322cf2746a930/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68465c5d7a4322cf2746a930/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68465c4daedca50e3a7e6154/main.m3u8" as="fetch" />
        
        {/* Common DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
        <ClientSideToaster />
      </body>
    </html>
  );
}
