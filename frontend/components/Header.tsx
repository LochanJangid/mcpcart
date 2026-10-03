"use client";

import Link from "next/link";
import { Search, UserRound, ShoppingBag, Menu, X, Webhook } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="relative z-20 border-b border-neutral-100">
      <div className="flex items-center justify-between px-6 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-[18px] font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ff7417] text-white">
            <Webhook size={17}  />
            </span>
          <span>MCPCART</span>
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] md:flex">
          <Link href="/" className="hover:opacity-50">Home</Link>
          <a href="#about" className="hover:opacity-50">About</a>
          <a href="#collection" className="hover:opacity-50">Collection</a>
          <a href="#blog" className="hover:opacity-50">Blog</a>
          <a href="#laptops" className="hover:opacity-50">Laptops</a>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden md:block"><Search size={18} strokeWidth={1.7} /></button>
          <button aria-label="Account" className="hidden md:block"><UserRound size={17} strokeWidth={1.7} /></button>
          <Link href="/cart" className="flex items-center gap-1 text-[13px]">
            <ShoppingBag size={17} strokeWidth={1.7} />
            <span className="hidden md:inline">Cart ({count})</span>
            <span className="md:hidden">{count}</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-5 border-t border-neutral-100 px-6 py-5 text-sm md:hidden">
          <Link onClick={() => setOpen(false)} href="/">Home</Link>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#collection">Collection</a>
          <a onClick={() => setOpen(false)} href="#blog">Blog</a>
          <a onClick={() => setOpen(false)} href="#laptops">Laptops</a>
        </nav>
      )}
    </header>
  );
}
