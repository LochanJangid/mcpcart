"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group">
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden rounded-[18px] bg-[#f1f5f9]">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-[10px] font-semibold shadow-sm">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={700}
          unoptimized
          className="product-image transition duration-500 group-hover:scale-[1.035]"
        />
      </Link>

      <div className="pt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/products/${product.id}`} className="text-[15px] font-semibold hover:underline">
              {product.name}
            </Link>
            <p className="mt-1 text-xs text-neutral-500">{product.category}</p>
          </div>
          <button
            aria-label={`Add ${product.name} to cart`}
            onClick={() => addItem(product)}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-neutral-200 transition hover:bg-black hover:text-white"
          >
            <ShoppingBag size={15} strokeWidth={1.7} />
          </button>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-[#d85f12]">${product.price.toLocaleString()}</span>
          {product.oldPrice && <span className="text-xs text-neutral-400 line-through">${product.oldPrice.toLocaleString()}</span>}
          <span className="ml-auto text-[10px] text-neutral-500">★ {product.rating}</span>
        </div>
      </div>
    </article>
  );
}
