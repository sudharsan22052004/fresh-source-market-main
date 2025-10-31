import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  farmer: string;
  location: string;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, farmer, location, image, category }: ProductCardProps) => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  
  return (
    <Link to={`${langPrefix}/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-accent bg-secondary px-2 py-1 rounded">
              {category}
            </span>
            <span className="text-lg font-bold text-primary">{price}/kg</span>
          </div>
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <div className="flex items-center text-sm text-muted-foreground space-x-1">
            <User className="h-3 w-3" />
            <span>{farmer}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="default" className="w-full" size="sm">
            {t('browse.viewDetails')}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
