import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-dark-purple text-white px-4 pt-10 pb-40 md:rounded-b-[100px] rounded-b-[50px] relative z-0">
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

      <div className="max-w-3xl mx-auto text-center mt-16 md:mt-24">
        <h1 className="text-5xl md:text-7xl mb-10 leading-tight text-white">
          Data <span className="underline decoration-eucalyptus underline-offset-8">tailored</span> to your needs.
        </h1>
        <Link
          href="#"
          className="inline-block bg-eucalyptus text-dark-purple font-bold py-3 px-6 mt-4 hover:bg-transparent hover:text-eucalyptus border-2 border-transparent hover:border-eucalyptus transition-all"
        >
          Learn more
        </Link>
      </div>
    </header>
  );
}