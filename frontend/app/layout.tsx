import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import '../style/_global.scss'
import '../style/Footer.scss'
import '../style/NavBar.scss'
import '../style/Content.scss'
import '../style/HowToUse.scss'
import '../style/HomePage.scss'
import '../style/Section.scss'
import '../style/InspectUrl.scss'
import '../style/ExtraText.scss'
import '../style/AllArticles.scss'
import '../style/ArticlePage.scss'
import '../style/PoliciesPage.scss'
import '../style/ResponsiveEText.scss'
import '../style/ResponsiveFooter.scss'
import '../style/ResponsiveContent.scss'
import '../style/ResponsiveSection.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Encurtador de link | Encurtador de URL",
  description: "O encurtador de links ( encurtador de url ) que você precisa pra otimizar seus resultados. Clique aqui para encurtar urls de maneira rápida, simples e fácil e com máxima segurança!",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
