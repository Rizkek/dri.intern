import Image from 'next/image';
import Link from 'next/link';

export default function Founder() {
  return (
    <section className="relative mx-auto mb-28 mt-20 max-w-6xl px-4 md:mb-36 md:mt-28">
      {/* Mobile: Stacked layout with dark purple background */}
      <div className="mx-auto flex max-w-5xl flex-col md:hidden">
        <div className="relative -mb-16 flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-eucalyptus">
            <Image
              src="/images/image-founder.webp"
              alt="Louis Hoebregts"
              width={260}
              height={260}
              className="h-auto w-full max-w-55"
            />
          </div>
        </div>

        <div className="relative w-full bg-dark-purple px-8 pb-10 pt-24 text-center text-white">
          <h2 className="mb-5 text-3xl text-white">Be the first to test</h2>
          <p className="mb-8 leading-relaxed text-ghost-white">
            Hi, I'm Louis Hoebregts. Even though the product is still in development, we'd love for you to try it out. Sign up for our beta and help us shape the future of web development.
          </p>
          <Link
            href="#"
            className="inline-block border-2 border-eucalyptus bg-eucalyptus px-6 py-3 font-bold text-dark-purple transition-colors hover:bg-transparent hover:text-eucalyptus"
          >
            Apply for access
          </Link>
        </div>
      </div>

      {/* Tablet dan desktop */}
      <div className="relative mx-auto hidden max-w-5xl items-start md:flex">
        <div className="relative z-0 w-[46%] shrink-0 -translate-y-8 md:-translate-y-12">
          <div className="relative flex h-100 w-100 items-center justify-center rounded-full bg-eucalyptus">
            <Image
              src="/images/image-founder.webp"
              alt="Louis Hoebregts"
              width={400}
              height={400}
              className="h-auto w-full max-w-87.5]"
            />
          </div>
        </div>

        <div className="relative z-10 -ml-12 mt-16 w-[62%] bg-dark-purple p-7 text-left text-white md:-ml-24 md:mt-20 md:p-14">
          <Image src="/images/bg-pattern-3.svg" alt="" width={221} height={212} className="pointer-events-none absolute -bottom-28 -right-24 z-[-1] hidden w-56 lg:block" aria-hidden="true" />
          <h2 className="mb-5 text-3xl text-white md:text-5xl">Be the first to test</h2>
          <p className="mb-8 leading-relaxed text-ghost-white">
            Hi, I'm Louis Hoebregts. Even though the product is still in development, we'd love for you to try it out. Sign up for our beta and help us shape the future of web development.
          </p>
          <Link
            href="#"
            className="inline-block border-2 border-eucalyptus bg-eucalyptus px-6 py-3 font-bold text-dark-purple transition-colors hover:bg-transparent hover:text-eucalyptus"
          >
            Apply for access
          </Link>
        </div>
      </div>
    </section>
  );
}