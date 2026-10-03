export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  colors: string[];
  specs: string[];
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "zenbook-14-oled",
    name: "ASUS Zenbook 14 OLED",
    category: "Ultrabook",
    price: 899,
    oldPrice: 1049,
    rating: 4.8,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#1f2937", "#d6d3d1", "#dbeafe"],
    specs: ["Intel Core Ultra 7", "16 GB RAM", "1 TB SSD", "14-inch 2.8K OLED"],
    badge: "New",
    description: "A slim OLED laptop built for serious work, study and creative workflows without turning your backpack into a gym membership."
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 13 M3",
    category: "Everyday",
    price: 1099,
    rating: 4.9,
    reviews: 481,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#d1d5db", "#0f172a", "#9ca3af"],
    specs: ["Apple M3", "16 GB unified memory", "512 GB SSD", "13.6-inch Liquid Retina"],
    badge: "Popular",
    description: "Quiet, portable and fast enough for development, coursework and everyday production work."
  },
  {
    id: "thinkpad-x1-carbon",
    name: "Lenovo ThinkPad X1 Carbon",
    category: "Business",
    price: 1299,
    oldPrice: 1449,
    rating: 4.7,
    reviews: 192,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#111827", "#374151"],
    specs: ["Intel Core Ultra 5", "32 GB RAM", "1 TB SSD", "14-inch WUXGA"],
    badge: "Pro",
    description: "A durable productivity machine with a focused business-first design and plenty of memory for multitasking."
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15",
    category: "Creator",
    price: 1599,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#e5e7eb", "#1f2937"],
    specs: ["Intel Core i7", "32 GB RAM", "1 TB SSD", "15.6-inch 3.5K OLED"],
    description: "A larger creator-focused laptop for heavier development, design and media workloads."
  },
  {
    id: "rog-zephyrus-g14",
    name: "ROG Zephyrus G14",
    category: "Gaming",
    price: 1799,
    oldPrice: 1999,
    rating: 4.8,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#111827", "#f3f4f6"],
    specs: ["AMD Ryzen 9", "32 GB RAM", "1 TB SSD", "14-inch 3K OLED 120Hz"],
    badge: "Gaming",
    description: "Compact gaming hardware with a high-refresh OLED display and enough power for demanding workloads."
  },
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360",
    category: "2-in-1",
    price: 1399,
    rating: 4.7,
    reviews: 174,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#0f172a", "#cbd5e1", "#d6d3d1"],
    specs: ["Intel Core Ultra 7", "16 GB RAM", "1 TB SSD", "14-inch 2.8K OLED Touch"],
    description: "A convertible laptop for people who want a notebook at breakfast and a tablet by lunch."
  },
  {
    id: "acer-swift-go-14",
    name: "Acer Swift Go 14",
    category: "Student",
    price: 749,
    oldPrice: 829,
    rating: 4.5,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#94a3b8", "#e2e8f0"],
    specs: ["Intel Core Ultra 5", "16 GB RAM", "512 GB SSD", "14-inch 2.8K OLED"],
    badge: "Value",
    description: "A lightweight everyday laptop with a strong display and sensible configuration for students."
  },
  {
    id: "surface-laptop-7",
    name: "Surface Laptop 7",
    category: "Premium",
    price: 1199,
    rating: 4.6,
    reviews: 137,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=1200&q=88",
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=1200&q=88"
    ],
    colors: ["#dbeafe", "#f3f4f6", "#111827"],
    specs: ["Snapdragon X Elite", "16 GB RAM", "512 GB SSD", "13.8-inch PixelSense Touch"],
    description: "A clean premium notebook designed around portability, battery life and a minimal Windows experience."
  }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
