
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Share2, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

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

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name} has been added to your cart.`,
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-green-500 hover:bg-green-600 animate-bounce-in">New</Badge>
              )}
              {product.onSale && discountPercentage > 0 && (
                <Badge variant="destructive" className="animate-bounce-in">-{discountPercentage}%</Badge>
              )}
            </div>

            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Product Details */}
          <div className="p-8 space-y-6">
            <DialogHeader>
              <Badge variant="outline" className="w-fit">
                {product.category}
              </Badge>
              <DialogTitle className="text-2xl font-bold gradient-text">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive" className="pulse-glow">
                  Save {discountPercentage}%
                </Badge>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <h4 className="font-semibold">Size</h4>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="hover-scale"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h4 className="font-semibold">Quantity</h4>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="hover-scale"
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="hover-scale"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                className="w-full hover-glow"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={handleWishlist}
                  className={`flex-1 hover-scale ${isWishlisted ? 'bg-red-50 text-red-600' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                
                <Button
                  variant="outline"
                  className="flex-1 hover-scale"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>✓ Free shipping on orders over $50</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Secure payment</p>
              <p>✓ Customer support 24/7</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
