"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, discount, delivery, total } = useCart();

  return (
    <main className="store-shell">
      <Header />

      <section className="page-pad pt-9">
        <h1 className="text-4xl font-semibold tracking-[-.05em] md:text-5xl">Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="mt-10 rounded-[20px] border border-dashed border-neutral-300 py-20 text-center">
            <p className="text-lg font-semibold">Your cart is empty.</p>
            <p className="mt-2 text-sm text-neutral-500">A surprisingly peaceful state for a shopping website.</p>
            <Link href="/" className="mt-6 inline-block rounded-full bg-black px-6 py-3 text-xs font-semibold text-white">Browse Laptops</Link>
          </div>
        ) : (
          <div className="mt-9 grid gap-7 md:grid-cols-[1.65fr_1fr]">
            <div>
              <div className="hidden grid-cols-[1.7fr_.55fr_.8fr_.65fr] border-b border-neutral-200 pb-3 text-xs text-neutral-500 md:grid">
                <span>Product</span><span>Price</span><span>Quantity</span><span>Total</span>
              </div>

              <div>
                {items.map((item) => (
                  <div key={item.id} className="grid gap-4 border-b border-neutral-200 py-5 md:grid-cols-[1.7fr_.55fr_.8fr_.65fr] md:items-center">
                    <div className="flex items-center gap-4">
                      <Image src={item.image} alt={item.name} width={110} height={110} unoptimized className="h-24 w-24 rounded-[14px] object-cover" />
                      <div>
                        <Link href={`/products/${item.id}`} className="text-sm font-semibold hover:underline">{item.name}</Link>
                        <p className="mt-1 text-xs text-neutral-500">{item.category}</p>
                        <button onClick={() => removeItem(item.id)} className="mt-3 inline-flex items-center gap-1 text-[10px] text-neutral-400 hover:text-red-500">
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>

                    <span className="text-sm font-medium">${item.price.toLocaleString()}</span>

                    <div className="flex w-fit items-center overflow-hidden rounded-full border border-neutral-200">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="grid h-8 w-8 place-items-center"><Minus size={12} /></button>
                      <span className="w-8 text-center text-xs font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="grid h-8 w-8 place-items-center"><Plus size={12} /></button>
                    </div>

                    <span className="text-sm font-semibold">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[20px] border border-neutral-200 p-5 md:p-6">
              <h2 className="text-sm font-semibold">Order Summary</h2>
              <div className="mt-5 flex overflow-hidden rounded-full border border-neutral-200">
                <input placeholder="Discount voucher" className="min-w-0 flex-1 px-4 py-3 text-xs outline-none" />
                <button className="m-1 rounded-full bg-[#ff7417] px-5 text-xs font-semibold text-white">Apply</button>
              </div>

              <div className="mt-6 grid gap-4 text-xs">
                <div className="flex justify-between"><span className="text-neutral-500">Sub Total</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-neutral-500">Discount (10%)</span><span>-${discount.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-neutral-500">Delivery fee</span><span>{delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}</span></div>
              </div>

              <div className="my-5 border-t border-neutral-200" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Total</span>
                <span className="text-xl font-semibold">${total.toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full rounded-full bg-black py-4 text-xs font-semibold text-white hover:bg-[#ff7417]">
                Checkout
              </button>
            </aside>
          </div>
        )}
      </section>

      <div className="page-pad"><Footer /></div>
    </main>
  );
}
