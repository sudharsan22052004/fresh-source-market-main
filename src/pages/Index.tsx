import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sprout, ShoppingCart, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to={`${langPrefix}/browse`}>
                <Button variant="hero" size="lg" className="text-lg px-8">
                  {t('hero.browseProduce')}
                </Button>
              </Link>
              <Link to={`${langPrefix}/browse`}>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  {t('hero.sellNow')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">10,000+</p>
                <p className="text-muted-foreground">{t('stats.farmers')}</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">100,000</p>
                <p className="text-muted-foreground">{t('stats.produce')}</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-primary">5,000+</p>
                <p className="text-muted-foreground">{t('stats.transactions')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t('howItWorks.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <Sprout className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('howItWorks.step1Title')}</h3>
                <p className="text-muted-foreground">
                  {t('howItWorks.step1Desc')}
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('howItWorks.step2Title')}</h3>
                <p className="text-muted-foreground">
                  {t('howItWorks.step2Desc')}
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{t('howItWorks.step3Title')}</h3>
                <p className="text-muted-foreground">
                  {t('howItWorks.step3Desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t('benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('benefits.directTrade')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('benefits.directTradeDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('benefits.fairPricing')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('benefits.fairPricingDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('benefits.freshProduce')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('benefits.freshProduceDesc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t('benefits.reduceWaste')}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t('benefits.reduceWasteDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to={`${langPrefix}/browse`}>
                <Button variant="hero" size="lg" className="text-lg px-8">
                  {t('cta.getStarted')}
                </Button>
              </Link>
              <Link to={`${langPrefix}/about`}>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  {t('nav.about')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
