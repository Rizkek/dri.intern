import Image from 'next/image';
import Header from '../components/Header';
import Features from '../components/Features';
import Founder from '../components/Founder';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />

      <main className="relative z-10 mx-auto max-w-6xl">
        <div className="-mt-28 flex justify-center md:-mt-40">
          <Image
            src="/images/image-hero.webp"
            alt="Workit Mobile App"
            width={768}
            height={400}
            className="relative w-full max-w-[320px] drop-shadow-2xl md:max-w-140"
            priority
          />
        </div>

      </main>

      <Features />

      <Founder />
      <Footer />
    </div>
  );
}