import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toast from "@/components/ToastComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/NathanDSPereira/Click-Doce'),//atualizar com o link do site
  title: 'Click & Doce | Doce Caseiro em Uberaba',
  description: 'Os melhores doces caseiros de Uberaba. Ingredientes selecionados, entrega rápida e sabor inesquecível. Peça agora!',
  keywords: ['doce caseiro uberaba', 'delivery doce uberaba', 'doces artesanais', 'melhores doces de uberaba'],
  openGraph: {
    title: 'Click & Doce | Uberaba',
    description: 'Os melhores doces caseiros de Uberaba. Ingredientes selecionados, entrega rápida e sabor inesquecível. Peça agora!',
    url: '', // Substitua pelo seu link
    siteName: 'Click & Doce',
    images: [
      {
        url: '/og-image.jpg', // Crie uma imagem bonita de 1200x630px para o link
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toast />
      </body>
    </html>
  );
}
