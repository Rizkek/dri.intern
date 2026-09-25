import Image from 'next/image';
import Header from '../components/Header';
import Features from '../components/Features';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex justify-center -mt-32 md:-mt-48 mb-24 md:mb-32">
          <Image
            src="/images/image-hero.webp"
            alt="Workit Mobile App"
            width={768}
            height={400}
            className="w-full max-w-[320px] md:max-w-125 h-auto drop-shadow-2xl"
            priority
          />
        </div>

        <Features />
      </main>

      <footer>
      </footer>
    </div>
  );
}