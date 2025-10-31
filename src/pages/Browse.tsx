import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import tomatoesImg from "@/assets/products/tomatoes.jpg";
import mangoesImg from "@/assets/products/mangoes.jpg";
import carrotsImg from "@/assets/products/carrots.jpg";
import spinachImg from "@/assets/products/spinach.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    price: "$3.50",
    farmer: "Green Valley Farms",
    location: "California",
    image: tomatoesImg,
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Sweet Alphonso Mangoes",
    price: "$5.00",
    farmer: "Sunny Orchards",
    location: "Florida",
    image: mangoesImg,
    category: "Fruits",
  },
  {
    id: 3,
    name: "Fresh Organic Carrots",
    price: "$2.80",
    farmer: "Harvest Moon Farm",
    location: "Oregon",
    image: carrotsImg,
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Fresh Spinach Leaves",
    price: "$4.20",
    farmer: "Green Meadows",
    location: "Washington",
    image: spinachImg,
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Organic Tomatoes Premium",
    price: "$4.00",
    farmer: "Organic Valley Co.",
    location: "Texas",
    image: tomatoesImg,
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Golden Mangoes",
    price: "$4.50",
    farmer: "Tropical Fruits Inc.",
    location: "Hawaii",
    image: mangoesImg,
    category: "Fruits",
  },
];

const Browse = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t('browse.title')}</h1>
            <p className="text-lg text-muted-foreground">
              {t('browse.subtitle')}
            </p>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={t('browse.searchPlaceholder')}
                  className="pl-10"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder={t('browse.category')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('browse.allCategories')}</SelectItem>
                  <SelectItem value="fruits">{t('browse.fruits')}</SelectItem>
                  <SelectItem value="vegetables">{t('browse.vegetables')}</SelectItem>
                  <SelectItem value="grains">{t('browse.grains')}</SelectItem>
                  <SelectItem value="herbs">{t('browse.herbs')}</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="recent">
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder={t('browse.sortBy')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">{t('browse.mostRecent')}</SelectItem>
                  <SelectItem value="price-low">{t('browse.priceLowHigh')}</SelectItem>
                  <SelectItem value="price-high">{t('browse.priceHighLow')}</SelectItem>
                  <SelectItem value="location">{t('browse.nearestLocation')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
