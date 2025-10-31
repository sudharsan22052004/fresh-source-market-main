import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sprout, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={`${langPrefix}/`} className="flex items-center space-x-2 font-bold text-xl text-primary">
          <Sprout className="h-6 w-6" />
          <span>FarmConnect</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to={`${langPrefix}/`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            {t('nav.home')}
          </Link>
          <Link to={`${langPrefix}/browse`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            {t('nav.browse')}
          </Link>
          <Link to={`${langPrefix}/about`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            {t('nav.about')}
          </Link>
          <Link to={`${langPrefix}/contact`} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            {t('nav.contact')}
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <LanguageToggle />
          <Button variant="ghost" size="sm">{t('nav.signIn')}</Button>
          <Button variant="hero" size="sm">{t('nav.sellProduce')}</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          <Link
            to={`${langPrefix}/`}
            className="block py-2 text-sm font-medium text-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.home')}
          </Link>
          <Link
            to={`${langPrefix}/browse`}
            className="block py-2 text-sm font-medium text-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.browse')}
          </Link>
          <Link
            to={`${langPrefix}/about`}
            className="block py-2 text-sm font-medium text-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.about')}
          </Link>
          <Link
            to={`${langPrefix}/contact`}
            className="block py-2 text-sm font-medium text-foreground hover:text-accent"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('nav.contact')}
          </Link>
          <div className="pt-2 space-y-2 flex flex-col">
            <LanguageToggle />
            <Button variant="ghost" size="sm" className="w-full">
              {t('nav.signIn')}
            </Button>
            <Button variant="hero" size="sm" className="w-full">
              {t('nav.sellProduce')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
