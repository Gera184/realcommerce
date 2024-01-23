"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/components/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
