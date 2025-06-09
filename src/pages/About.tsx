
import { useState } from 'react';
import { Header } from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { CartSidebar } from "@/components/CartSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">About Jumehira Stores</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted destination for premium electronics, fashion, and home essentials. 
              We've been serving customers with quality products and exceptional service since day one.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded with a passion for bringing the latest technology and fashion trends to our customers, 
                  Jumehira Stores has grown from a small local business to a trusted online destination.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We believe in quality, authenticity, and customer satisfaction above all else. 
                  Every product in our store is carefully selected to meet our high standards.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our team is dedicated to providing you with the best shopping experience, 
                  from browsing our curated collections to receiving your orders at your doorstep.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                  alt="Our store" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Shopping Street<br />
                    City Center, State 12345
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Toll-free support
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    info@jumehirastores.com<br />
                    24/7 support
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Store Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon-Sat: 9AM-9PM<br />
                    Sunday: 11AM-7PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default About;
