import {Providers} from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../_css/globals.css";
import { Menu } from "../_components/Menu";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}