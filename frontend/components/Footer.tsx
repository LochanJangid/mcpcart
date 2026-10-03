export function Footer() {
  return (
    <footer className="mt-20 overflow-hidden rounded-[22px] bg-[#030303] text-white">
      <div className="grid md:grid-cols-[1fr_1.2fr]">
        <div className="grid grid-cols-3 gap-6 border-b border-white/15 p-7 md:border-b-0 md:border-r">
          <div>
            <h4 className="mb-6 text-sm font-medium">Shop</h4>
            <div className="grid gap-4 text-xs text-white/60">
              <span>Laptops</span><span>Accessories</span><span>Monitors</span><span>Deals</span>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-medium">About</h4>
            <div className="grid gap-4 text-xs text-white/60">
              <span>Our Story</span><span>Wholesale</span><span>Careers</span><span>Press</span>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-medium">Help</h4>
            <div className="grid gap-4 text-xs text-white/60">
              <span>Contact Us</span><span>FAQ</span><span>Accessibility</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden p-7 md:p-10">
          <div className="absolute -right-8 -bottom-20 h-64 w-64 rounded-full border border-white/10 [box-shadow:0_0_0_1px_rgba(255,255,255,.02),0_0_0_18px_rgba(255,255,255,.01),0_0_0_36px_rgba(255,255,255,.01)]" />
          <h3 className="relative text-5xl font-medium tracking-[-0.05em]">Newsletter</h3>
          <p className="relative mt-3 max-w-md text-xs leading-5 text-white/65">
            Get laptop deals, new arrivals and practical buying notes. No inbox hostage situation.
          </p>
          <div className="relative mt-8 flex max-w-md overflow-hidden rounded-full border border-white/25">
            <input className="min-w-0 flex-1 bg-transparent px-5 py-3 text-xs outline-none placeholder:text-white/40" placeholder="Enter email address" />
            <button className="m-1 rounded-full bg-[#ff7417] px-6 py-2 text-xs font-semibold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4 border-t border-white/15 px-7 py-4 text-[10px] text-white/55 md:flex-row">
        <span>© 2026 Sparkel Digital. All Rights Reserved</span>
        <div className="flex gap-8"><span>Terms of Service</span><span>Privacy & Policy</span></div>
      </div>
    </footer>
  );
}
