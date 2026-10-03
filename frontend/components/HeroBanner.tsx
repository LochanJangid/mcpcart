import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative mx-3 mt-3 overflow-hidden rounded-[18px] bg-[#6351ef] px-7 py-8 text-white md:px-9 md:py-10">
      <div className="relative z-10 max-w-[480px]">
        <p className="text-xs font-medium tracking-wide text-white/75">SMART WORK / PLAY SALE</p>
        <h1 className="mt-3 text-4xl font-medium leading-[.95] tracking-[-0.045em] md:text-5xl">
          Upgrade your setup without upgrading your excuses.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-6 text-white/75">
          Up to 30% off selected laptops, creator machines and everyday notebooks.
        </p>
        <div className="mt-7 flex gap-3">
          <Link href="#laptops" className="rounded-full bg-black px-6 py-3 text-xs font-semibold">Shop Now</Link>
          <Link href="#collection" className="rounded-full border border-white/60 px-6 py-3 text-xs font-medium">View Collection</Link>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 bottom-[-60px] h-[300px] w-[55%] rotate-[-5deg] md:h-[380px]">
        <Image
          src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=88"
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-85 mix-blend-screen"
        />
      </div>
    </section>
  );
}
