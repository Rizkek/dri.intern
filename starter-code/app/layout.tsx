import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local'

const manrope = localFont({
    src: '../public/fonts/manrope/Manrope-VariableFont_wght.ttf', 
    variable: '--font-manrope',
    display: 'swap',
})

const fraunces = localFont({
    src: '../public/fonts/manrope/Manrope-VariableFont_wght.ttf', 
    variable: '--font-manrope',
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