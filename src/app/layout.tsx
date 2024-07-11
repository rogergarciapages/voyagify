
"use client";

import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import Navibar from "../components/ui/navibar";
import React from 'react';
import { SessionProvider } from 'next-auth/react';


const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <SessionProvider>
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navibar />
        {children}
      </body>
    </html>
    </SessionProvider>
  )
}