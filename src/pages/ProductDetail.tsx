import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, Link } from "react-router-dom";
import { MapPin, User, ShoppingCart, Star, CheckCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import tomatoesImg from "@/assets/products/tomatoes.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    name: "Fresh Organic Tomatoes",
    price: 3.50,
    farmer: "Green Valley Farms",
    location: "California",
    image: tomatoesImg,
    category: "Vegetables",
    description: "Premium quality organic tomatoes, hand-picked at peak ripeness. Rich in flavor and nutrients, perfect for salads, cooking, or snacking. Grown using sustainable farming practices without harmful pesticides.",
    available: 150,
    rating: 4.8,
    reviews: 124,
    verified: true,
  };

  const relatedProducts = [
    { id: 2, name: "Sweet Alphonso Mangoes", price: "$5.00", image: tomatoesImg },
    { id: 3, name: "Fresh Organic Carrots", price: "$2.80", image: tomatoesImg },
    { id: 4, name: "Fresh Spinach Leaves", price: "$4.20", image: tomatoesImg },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link to="/browse" className="hover:text-accent">Browse</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold text-primary">${product.price}</span>
                  <span className="text-muted-foreground">per kg</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.available} kg available
                </p>
              </div>

              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-accent" />
                    <span className="font-medium">{product.farmer}</span>
                    {product.verified && (
                      <CheckCircle className="h-4 w-4 text-accent" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{product.location}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantity (kg):</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.min(product.available, quantity + 1))}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-muted-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="lg" className="flex-1">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Contact Farmer
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </CardContent>
          </Card>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-lg font-bold text-primary">{item.price}/kg</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
