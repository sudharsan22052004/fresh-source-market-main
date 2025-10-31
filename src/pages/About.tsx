import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/30 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About FarmConnect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe every farmer deserves a fair market and every harvest deserves a home.
              Our platform bridges the gap between farmers, the public, and processors — creating
              a transparent, collaborative ecosystem that prevents waste and supports prosperity.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To connect farmers directly with buyers and manufacturers, ensuring fair pricing,
                    reducing food waste, and promoting sustainable agricultural practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground">
                    A world where agricultural abundance is accessible to all, where farmers prosper,
                    and food waste becomes a thing of the past through transparent, efficient trade.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Impact</h2>
                  <p className="text-muted-foreground">
                    Over 10,000 farmers connected, 100,000+ kg of produce saved from waste, and
                    thousands of families supported through fair trade practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                FarmConnect was born from a simple observation: farmers often struggle to find markets
                for their abundant harvests, while buyers search for quality, affordable produce. This
                disconnect leads to waste, lost income, and missed opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We created a digital marketplace that removes intermediaries, allowing direct
                transactions between producers and consumers. Our platform ensures farmers receive
                fair prices for their hard work while buyers access fresh, quality produce at
                competitive rates.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve a growing community of farmers, individual buyers, and
                value-added product manufacturers. Together, we're building a more sustainable,
                equitable food system—one transaction at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe in open, honest communication and clear pricing throughout every transaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Environmental stewardship guides our platform, reducing waste and supporting eco-friendly practices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fairness</h3>
                  <p className="text-muted-foreground">
                    Every farmer deserves fair compensation, and every buyer deserves quality produce at reasonable prices.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    We're building more than a marketplace—we're fostering a collaborative agricultural community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
