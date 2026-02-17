import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import HimetricaAnalytics from "@/components/HimetricaAnalytics";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evolua - Sua Jornada Clínica",
  description:
    "Simplifique sua rotina clínica com relatórios por voz, agenda inteligente e prontuário digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-white text-text-light antialiased selection:bg-primary/20 font-sans">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <HimetricaAnalytics />
        {children}
      </body>
    </html>
  );
}
