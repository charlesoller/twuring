import {Providers} from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { runSim } from "../_lib/postGeneration";
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
  // runSim(1)  //THIS ALONE STARTS THE SIM

  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <Menu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
