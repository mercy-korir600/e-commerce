import { useState } from 'react';
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

// Featured products data
const featuredProducts = [
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
  }
];

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Jumehira Stores
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Your one-stop destination for the latest electronics, fashion trends, and home essentials.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Shop Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <Truck className="w-10 h-10 p-2 bg-secondary/50 text-secondary rounded-full" />
              <div>
                <h3 className="font-semibold">Fast & Free Shipping</h3>
                <p className="text-sm text-muted-foreground">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Shield className="w-10 h-10 p-2 bg-secondary/50 text-secondary rounded-full" />
              <div>
                <h3 className="font-semibold">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">
                  100% secure payments
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Headphones className="w-10 h-10 p-2 bg-secondary/50 text-secondary rounded-full" />
              <div>
                <h3 className="font-semibold">24/7 Customer Support</h3>
                <p className="text-sm text-muted-foreground">
                  Friendly customer support
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Star className="w-10 h-10 p-2 bg-secondary/50 text-secondary rounded-full" />
              <div>
                <h3 className="font-semibold">Top Quality Products</h3>
                <p className="text-sm text-muted-foreground">
                  Carefully selected products
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link to="/sale" className="text-primary hover:underline hover:underline-offset-2 transition-colors">
                View All <ArrowRight className="w-4 h-4 ml-1 inline-block" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Footer */}
        <footer className="bg-muted py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Jumehira Stores
                </h3>
                <p className="text-muted-foreground">
                  Your trusted destination for premium products and exceptional service.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                  <Link to="/electronics" className="block text-muted-foreground hover:text-primary transition-colors">
                    Electronics
                  </Link>
                  <Link to="/fashion" className="block text-muted-foreground hover:text-primary transition-colors">
                    Fashion
                  </Link>
                  <Link to="/home" className="block text-muted-foreground hover:text-primary transition-colors">
                    Home & Living
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Contact Support</p>
                  <p className="text-muted-foreground">Shipping Info</p>
                  <p className="text-muted-foreground">Returns</p>
                  <p className="text-muted-foreground">Size Guide</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2">
                  <p className="text-muted-foreground">Newsletter</p>
                  <p className="text-muted-foreground">Social Media</p>
                  <p className="text-muted-foreground">Blog</p>
                  <p className="text-muted-foreground">Reviews</p>
                </div>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2024 Jumehira Stores. All rights reserved. Built with ❤️ for amazing customers.
              </p>
            </div>
          </div>
        </footer>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
