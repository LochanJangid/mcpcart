import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main className="store-shell">
      <Header />

      <HeroBanner />

      <section id="collection" className="page-pad pt-11">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[.18em] text-neutral-400">Laptop collection</p>
            <h2 className="section-title">2026 New Arrivals</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto hide-scrollbar">
            {["All", "Ultrabook", "Creator", "Gaming", "Business"].map((item, i) => (
              <button key={item} className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] ${i === 0 ? "border-black bg-black text-white" : "border-neutral-300"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div id="laptops" className="mt-7 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3">
          {products.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section id="about" className="page-pad mt-16">
        <div className="rounded-[20px] bg-[#f4f4f1] p-7 md:p-10">
          <p className="text-[11px] uppercase tracking-[.18em] text-neutral-400">Built for real workflows</p>
          <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="text-4xl font-semibold leading-[.98] tracking-[-.045em] md:text-5xl">
              Laptops that make sense before the spec sheet becomes a novel.
            </h2>
            <p className="max-w-lg text-sm leading-6 text-neutral-600">
              Sparkel keeps the buying experience simple: clear configurations, honest categories, fast comparison and a cart that remembers what you picked.
            </p>
          </div>
        </div>
      </section>

      <section id="blog" className="page-pad mt-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-2 text-[11px] uppercase tracking-[.18em] text-neutral-400">Notes</p>
            <h2 className="section-title">Buying guides</h2>
          </div>
          <span className="text-xs text-neutral-400">Coming next</span>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {[
            ["01", "How much RAM do you actually need?"],
            ["02", "OLED vs IPS for daily work"],
            ["03", "Choosing a laptop for ML development"]
          ].map(([n, title]) => (
            <div key={n} className="rounded-[18px] border border-neutral-200 p-6">
              <span className="text-xs text-neutral-400">{n}</span>
              <h3 className="mt-14 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-xs leading-5 text-neutral-500">A short practical guide for humans who would rather buy once.</p>
            </div>
          ))}
        </div>
      </section>

      <div className="page-pad"><Footer /></div>
    </main>
  );
}
