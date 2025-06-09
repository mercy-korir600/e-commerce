
import { useState } from 'react';
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Home & Living products data
const homeProducts = [
  {
    id: 13,
    name: "Luxury Throw Pillow",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 89,
    category: "Home & Living",
    isNew: true,
    onSale: true
  },
  {
    id: 14,
    name: "Modern Table Lamp",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 124,
    category: "Home & Living",
    isNew: false,
    onSale: true
  },
  {
    id: 15,
    name: "Ceramic Vase Set",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 67,
    category: "Home & Living",
    isNew: true,
    onSale: true
  },
  {
    id: 16,
    name: "Cozy Blanket",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 156,
    category: "Home & Living",
    isNew: false,
    onSale: true
  },
  {
    id: 17,
    name: "Wall Art Canvas",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 93,
    category: "Home & Living",
    isNew: true,
    onSale: true
  },
  {
    id: 18,
    name: "Kitchen Utensil Set",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 78,
    category: "Home & Living",
    isNew: false,
    onSale: true
  }
];

const HomeAndLiving = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Category Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Home & Living</h1>
            <p className="text-xl text-muted-foreground">Transform your space into a sanctuary</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {homeProducts.length} Products
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter & Sort
            </Button>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default HomeAndLiving;
