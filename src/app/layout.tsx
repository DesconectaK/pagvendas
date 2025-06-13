
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ClientSideToaster from '@/components/ClientSideToaster';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-roboto',
});

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
        {/* VTurb Speed Optimization Links - Main VSL video */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68473bb3d17dfe0519c08193/main.m3u8" as="fetch" />
        
        {/* VTurb Speed Optimization Links - Testimonial Video 1 (New) */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684b8fc8ad7cf9fd032dfd4a/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684b8fc8ad7cf9fd032dfd4a/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/684b8fc3fb36cb9f760dcf4e/main.m3u8" as="fetch" />

        {/* Common DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Utmify Pixel Script - Updated */}
        <Script id="utmify-pixel-setup" strategy="afterInteractive">
          {`
            window.pixelId = "684a9db3e82a6cc4e52c43ae";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>
      </head>
      <body className={`${roboto.variable} font-body antialiased`} suppressHydrationWarning={true}>
        {children}
        <ClientSideToaster />
      </body>
    </html>
  );
}
