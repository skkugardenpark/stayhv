import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haven Stay - 조용한 하루가 필요할 때",
  description: "자연 속에서 찾는 진정한 휴식. Haven Stay에서 특별한 경험을 만나보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
