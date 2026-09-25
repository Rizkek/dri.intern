import Image from 'next/image';
import Link from 'next/link';

export default function Founder() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 mt-24 md:mt-40 mb-32">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center relative">
        
        <div className="w-full md:w-100 flex justify-center md:justify-start md:-mr-24 z-0">
          <Image
            src="/images/image-founder.webp" 
            alt="Louis Hoebregts"
            width={400}
            height={400}
            className="w-70 md:w-100 h-auto"
          />
        </div>

        <div className="bg-dark-purple text-white p-10 md:p-14 md:w-150 text-center md:text-left z-10 -mt-12 md:mt-0 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-6">Be the first to test</h2>
          <p className="mb-8 leading-relaxed text-ghost-white">
            Hi, I'm Louis Hoebregts. Even though the product is still in development, we'd love for you to try it out. Sign up for our beta and help us shape the future of web development.
          </p>
          <Link
            href="#"
            className="inline-block bg-eucalyptus text-dark-purple font-bold py-3 px-6 hover:bg-transparent hover:text-eucalyptus border-2 border-transparent hover:border-eucalyptus transition-all"
          >
            Apply for access
          </Link>
        </div>
        
      </div>
    </section>
  );
}