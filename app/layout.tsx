import './globals.css';
import type { Metadata } from 'next';
import {Manrope, Fraunces} from 'next/font/google';

const manrope = Manrope({
    subsets: ['latin'], 
    variable: '--font-manrope',
    display: 'swap',
})

const fraunces = Fraunces({
    subsets: ['latin'], 
    variable: '--font-fraunces',
    display: 'swap',
})

export const metadata: Metadata = {
  title: 'Worklit Landing Page',
  description: 'Technical Test PT Daya Rekadigital (Frontend)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-sans bg-white antialiased">
        {children}
      </body>
    </html>
  );
}