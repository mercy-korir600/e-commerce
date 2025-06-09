
import { useState } from 'react';
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Fashion products data
const fashionProducts = [
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 203,
    category: "Fashion",
    isNew: true,
    onSale: false
  },
  {
    id: 5,
    name: "Minimalist Backpack",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 124,
    category: "Fashion",
    isNew: true,
    onSale: true
  },
  {
    id: 9,
    name: "Luxury Leather Jacket",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 87,
    category: "Fashion",
    isNew: false,
    onSale: true
  },
  {
    id: 10,
    name: "Casual Sneakers",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 312,
    category: "Fashion",
    isNew: true,
    onSale: true
  },
  {
    id: 11,
    name: "Elegant Watch",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Fashion",
    isNew: false,
    onSale: true
  },
  {
    id: 12,
    name: "Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 89,
    category: "Fashion",
    isNew: true,
    onSale: true
  }
];

const Fashion = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Category Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 animate-fade-in">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 gradient-text animate-slide-up">Fashion</h1>
            <p className="text-xl text-muted-foreground animate-slide-up">Style that speaks to your personality</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 border-b animate-fade-in">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-2xl font-semibold gradient-text">
              {fashionProducts.length} Products
            </h2>
            <Button variant="outline" className="flex items-center gap-2 hover-scale hover-glow">
              <Filter className="w-4 h-4" />
              Filter & Sort
            </Button>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fashionProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fade-in"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FloatingCartButton onClick={() => setIsCartOpen(true)} />
        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Fashion;
