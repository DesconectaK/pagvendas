
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ClientSideToaster from '@/components/ClientSideToaster';
// Roboto font is no longer used, Poppins will be linked directly

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
        {/* Poppins Font */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        {/* Inline Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            background-color: #ffffff;
            color: #000000;
            font-family: 'Poppins', 'Inter', sans-serif;
            font-size: 16px;
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
          h1, h2, h3 {
            font-weight: 700;
            line-height: 1.4;
          }
          p {
            line-height: 1.5em; /* Updated line-height */
            font-weight: 400;
          }
          .section {
            padding: 40px 16px; /* Updated padding */
            max-width: 700px;
            margin: auto;
          }
          .cta-btn {
            background: #FF7A00; /* Updated background */
            color: white;
            font-size: 18px;
            padding: 16px 24px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600; /* Updated font-weight */
            text-decoration: none;
            display: inline-block;
            margin-top: 20px;
          }
        `}} />

        {/* VTurb Speed Optimization Links - Main VSL video */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/68473bf78ce134c08f091906/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/68473bb3d17dfe05193/main.m3u8" as="fetch" />

        {/* VTurb Speed Optimization Links - Testimonial Video 1 (User updated) */}
        <link rel="preload" href="https://scripts.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684b8fc8ad7cf9fd032dfd4a/player.js" as="script" />
        <link rel="preload" href="https://images.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/players/684b8fc8ad7cf9fd032dfd4a/thumbnail.jpg" as="image" />
        <link rel="preload" href="https://cdn.converteai.net/203430db-ad79-48e2-a8e6-4634be611b23/684b8fc3fb36cb9f760dcf4e/main.m3u8" as="fetch" />
        
        {/* Image Preload (User added) */}
        <link rel="preload" as="image" href="URL-DA-IMAGEM" type="image/webp" />

        {/* Common DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />

        {/* Utmify Pixel Script */}
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

        {/* Firebase Analytics Page Visit Tracker */}
        <Script id="firebase-analytics-page-visit" strategy="afterInteractive">
          {`
            window.addEventListener('DOMContentLoaded', function () {
              if (typeof firebase !== 'undefined' && firebase.analytics) {
                firebase.analytics().logEvent('visit_page', {
                  page_path: window.location.pathname,
                  device: navigator.userAgent,
                  timestamp: new Date().toISOString()
                });
              }
            });
          `}
        </Script>
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}> {/* Removed roboto.variable and font-body will use Poppins from inline style */}
        {children}
        <ClientSideToaster />
      </body>
    </html>
  );
}
