"use client"
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import '../../styles/globals.scss'
import { PageProvider } from "@/context/context";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default function RootLayout({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <html lang="en">
      <body className={`${inter.variable}` + ' theme-dark'}>
        <PageProvider>
          <div className="h-100">
            {children}
          </div>
        </PageProvider>
      </body>
    </html>
  );
}
