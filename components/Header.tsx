import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="hero relative z-0 overflow-visible bg-dark-purple px-4 pt-8 pb-36 text-white md:pt-12 md:pb-48">
      <Image src="/images/bg-pattern-1.svg" alt="" width={341} height={317} className="pointer-events-none absolute -left-28 top-28 hidden w-64 opacity-80 md:block" aria-hidden="true" />
      <Image src="/images/bg-pattern-2.svg" alt="" width={174} height={181} className="pointer-events-none absolute -right-16 top-48 hidden w-36 opacity-80 md:block" aria-hidden="true" />
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          alt="Workit Logo"
          width={96}
          height={24}
          className="w-24 h-auto"
        />
        <Link
          href="#"
          className="text-white hover:text-eucalyptus font-bold underline underline-offset-4 decoration-eucalyptus transition-colors"
        >
          Apply for access
        </Link>
      </nav>

      <div className="relative z-10 mx-auto mt-14 max-w-3xl text-center md:mt-20">
        <h1 className="mb-8 text-5xl leading-tight text-white md:mb-10 md:text-7xl">
          Data <span className="underline decoration-eucalyptus underline-offset-8">tailored</span> to<br className="md:hidden" /> your needs.
        </h1>
        <Link
          href="#"
          className="inline-block border-2 border-eucalyptus bg-eucalyptus px-6 py-3 font-bold text-dark-purple transition-all hover:bg-transparent hover:text-eucalyptus"
        >
          Learn more
        </Link>
      </div>
    </header>
  );
}