
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ProductQuickView } from "./ProductQuickView";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <Card 
        className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-scale hover-glow animate-fade-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-green-500 hover:bg-green-600 animate-bounce-in">New</Badge>
            )}
            {product.onSale && discountPercentage > 0 && (
              <Badge variant="destructive" className="animate-bounce-in pulse-glow">-{discountPercentage}%</Badge>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 bg-white/80 hover:bg-white transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } hover-scale ${isWishlisted ? 'text-red-500' : ''}`}
            onClick={handleWishlist}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Action buttons overlay */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              onClick={() => setIsQuickViewOpen(true)}
              className="bg-white text-black hover:bg-gray-100 hover-scale"
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
            <Button
              onClick={handleAddToCart}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors gradient-text">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover-scale"
            >
              Quick Add
            </Button>
          </div>
        </CardContent>
      </Card>

      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
