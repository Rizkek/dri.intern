import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pb-16 pt-8 text-center md:pb-20">
      <Image
        src="/images/logo-dark.svg"
        alt="Workit Logo"
        width={96}
        height={24}
        className="mb-8 h-auto w-24"
      />
      
      <div className="flex items-center justify-center gap-7">
        <Link href="#" aria-label="Facebook" className="group"><Image src="/images/icon-facebook.svg" alt="" width={20} height={20} className="h-5 w-5 transition-[filter] group-hover:brightness-0" /></Link>
        <Link href="#" aria-label="Twitter" className="group"><Image src="/images/icon-twitter.svg" alt="" width={20} height={20} className="h-5 w-5 transition-[filter] group-hover:brightness-0" /></Link>
        <Link href="#" aria-label="Instagram" className="group"><Image src="/images/icon-instagram.svg" alt="" width={20} height={20} className="h-5 w-5 transition-[filter] group-hover:brightness-0" /></Link>
      </div>
    </footer>
  );
}