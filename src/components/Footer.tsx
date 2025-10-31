import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const langPrefix = `/${i18n.language}`;
  
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-primary">FarmConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={`${langPrefix}/`} className="text-muted-foreground hover:text-accent transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={`${langPrefix}/browse`} className="text-muted-foreground hover:text-accent transition-colors">
                  {t('nav.browse')}
                </Link>
              </li>
              <li>
                <Link to={`${langPrefix}/about`} className="text-muted-foreground hover:text-accent transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={`${langPrefix}/contact`} className="text-muted-foreground hover:text-accent transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* For Farmers */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.forFarmers')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-accent transition-colors">
                  Sell Produce
                </Link>
              </li>
              <li>
                <Link to="/browse" className="text-muted-foreground hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@farmconnect.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>{t('footer.addressValue')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FarmConnect. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
