import { Footer } from "@/components/layouts/shared/Footer";
import { StoreProvider } from "@/providers/StoreProvider";
import TenStackProvider from "@/providers/tanStackProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "First step to learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StoreProvider>
          <TenStackProvider>
            {children}
            <Footer />
          </TenStackProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
