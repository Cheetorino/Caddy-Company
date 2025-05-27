import Link from "next/link";
import { useState } from "react";

const products = [
  { id: "golf-bag", name: "Premium Golf Bag", category: "Gear", price: 199, image: "https://images.unsplash.com/photo-1621570070500-7e1d255826d7" },
  { id: "golf-gloves", name: "Golfing Gloves", category: "Apparel", price: 25, image: "https://images.unsplash.com/photo-1583345146471-7b1e936b1e3f" },
  { id: "golf-hat", name: "Golf Hat", category: "Apparel", price: 30, image: "https://images.unsplash.com/photo-1598032893819-24d7dd143e8b" },
  { id: "golf-sunglasses", name: "Golf Sunglasses", category: "Apparel", price: 60, image: "https://images.unsplash.com/photo-1606814896902-8d22652b8a87" },
  { id: "golf-tees", name: "Golf Tees (50 pack)", category: "Accessories", price: 10, image: "https://images.unsplash.com/photo-1577968890752-5f444b97c45e" },
  { id: "ball-markers", name: "Ball Markers", category: "Accessories", price: 15, image: "https://images.unsplash.com/photo-1552412042-7a5c4e7e8f70" },
  { id: "divot-fixer", name: "Divot Fixer Tool", category: "Accessories", price: 18, image: "https://images.unsplash.com/photo-1611619926162-80edb3ccdd6e" },
  { id: "head-covers", name: "Head Covers", category: "Gear", price: 35, image: "https://images.unsplash.com/photo-1623478012678-4e1e67611ed6" },
];

const categories = ["All", "Gear", "Apparel", "Accessories"];

export default function Products() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter(p => 
    (selected === "All" || p.category === selected) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex gap-4 mb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 border rounded ${selected === cat ? "bg-green-700 text-white" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map(p => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <div className="border rounded p-4 shadow hover:shadow-lg transition cursor-pointer">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="text-sm text-gray-600">${p.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}