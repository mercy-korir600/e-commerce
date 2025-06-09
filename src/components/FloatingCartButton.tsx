
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface FloatingCartButtonProps {
  onClick: () => void;
}

export const FloatingCartButton = ({ onClick }: FloatingCartButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { items } = useCart();
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <Button
        onClick={onClick}
        size="lg"
        className="relative rounded-full w-16 h-16 shadow-2xl hover-glow floating pulse-glow"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs animate-bounce-in"
          >
            {totalItems}
          </Badge>
        )}
      </Button>
    </div>
  );
};
