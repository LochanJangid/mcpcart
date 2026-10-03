"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const product = getProduct(params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("16 GB");
  const { addItem } = useCart();

  if (!product) {
    return (
      <main className="store-shell">
        <Header />
        <section className="page-pad py-24 text-center">
          <h1 className="text-3xl font-semibold">Product not found</h1>
          <Link href="/" className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-xs font-semibold text-white">
            Back to laptops
          </Link>
        </section>
      </main>
    );
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main className="store-shell">
      <Header />

      <section className="page-pad pt-8">
        <Link href="/" className="mb-6 inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-black">
          <ChevronLeft size={14} /> Back to collection
        </Link>

        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="overflow-hidden rounded-[18px] bg-[#f1f5f9]">
              <Image
                src={product.gallery[selectedImage]}
                alt={product.name}
                width={1000}
                height={1000}
                unoptimized
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              {product.gallery.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 ${selectedImage === index ? "border-[#ff7417]" : "border-transparent"}`}
                >
                  <Image src={image} alt="" fill unoptimized className="object-cover" />
                </button>
              ))}
              <button onClick={() => setSelectedImage((selectedImage + product.gallery.length - 1) % product.gallery.length)} className="ml-auto grid h-9 w-9 place-items-center rounded-full border">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => setSelectedImage((selectedImage + 1) % product.gallery.length)} className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="pt-2 md:pt-5">
            <p className="text-[11px] uppercase tracking-[.18em] text-neutral-400">{product.category}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[.98] tracking-[-.05em] md:text-5xl">{product.name}</h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600">{product.description}</p>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-[#f59e0b]">{[1,2,3,4,5].map((n) => <Star key={n} size={15} fill={n <= Math.round(product.rating) ? "currentColor" : "none"} />)}</div>
              <span className="text-xs text-neutral-500">({product.reviews} reviews)</span>
            </div>

            <div className="mt-4 text-xl font-semibold text-[#d85f12]">${product.price.toLocaleString()}</div>

            <div className="mt-7">
              <p className="text-xs font-semibold">Memory</p>
              <div className="mt-3 flex gap-2">
                {["8 GB", "16 GB", "32 GB"].map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`rounded-full border px-4 py-2 text-xs ${selectedSize === size ? "border-[#ff7417] bg-[#ff7417] text-white" : "border-neutral-300"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold">Colours Available</p>
              <div className="mt-3 flex gap-3">
                {product.colors.map((color) => <span key={color} className="h-6 w-6 rounded-full border-4 border-white shadow-[0_0_0_1px_#ddd]" style={{ backgroundColor: color }} />)}
              </div>
            </div>

            <div className="mt-8 grid gap-2 text-xs text-neutral-600">
              {product.specs.map((spec) => <div key={spec} className="border-b border-neutral-100 py-2">• {spec}</div>)}
            </div>

            <button onClick={() => addItem(product)} className="mt-8 w-full rounded-full bg-black py-4 text-xs font-semibold text-white transition hover:bg-[#ff7417]">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="page-pad mt-14">
        <h2 className="text-3xl font-semibold tracking-tight">Recently Added</h2>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {related.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>

      <div className="page-pad"><Footer /></div>
    </main>
  );
}
