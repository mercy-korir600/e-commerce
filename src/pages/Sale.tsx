
import { useState } from 'react';
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

// Sale products - all products with onSale: true
const saleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 156,
    category: "Electronics",
    isNew: true,
    onSale: true
  },
  {
    id: 2,
    name: "Luxury Smart Watch",
    price: 599.99,
    originalPrice: 799.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 89,
    category: "Electronics",
    isNew: false,
    onSale: true
  },
  {
    id: 4,
    name: "Professional Camera",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",
    rating: 4.9,
    reviews: 67,
    category: "Electronics",
    isNew: false,
    onSale: true
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
    id: 6,
    name: "Gaming Laptop",
    price: 1599.99,
    originalPrice: 1899.99,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 92,
    category: "Electronics",
    isNew: false,
    onSale: true
  }
];

const Sale = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Category Hero */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 text-red-600">Sale</h1>
            <p className="text-xl text-muted-foreground">Amazing deals and discounts you can't miss!</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              {saleProducts.length} Products on Sale
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
              {saleProducts.map((product) => (
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

export default Sale;
