import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Personal Portfolio of Allen Alipio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
