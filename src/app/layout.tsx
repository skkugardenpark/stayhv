import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Haven Stay - 조용한 하루가 필요할 때",
    template: "%s | Haven Stay",
  },
  description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요. 미니멀하고 고급스러운 공간에서 몸과 마음을 치유하는 시간을 가져보세요.",
  keywords: ["숙박", "펜션", "자연", "휴양", "가평", "힐링", "미니멀", "고급숙박", "자연치유", "휴식공간"],
  authors: [{ name: "Haven Stay" }],
  creator: "Haven Stay",
  publisher: "Haven Stay",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haven Stay - 조용한 하루가 필요할 때",
    description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "Haven Stay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haven Stay - 자연 속 힐링 공간",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven Stay - 조용한 하루가 필요할 때",
    description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
    images: ["/og-image.jpg"],
    creator: "@havenstay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans antialiased bg-cream-50 text-stone-700 selection:bg-sage-200 selection:text-stone-800">
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
