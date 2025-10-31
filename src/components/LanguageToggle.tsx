import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useLocation } from "react-router-dom";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
    // Update URL with language prefix
    const pathWithoutLang = location.pathname.replace(/^\/(en|ta)/, '');
    const newPath = `/${lng}${pathWithoutLang || '/'}`;
    navigate(newPath);
  };

  const currentLanguage = i18n.language === 'ta' ? 'தமிழ்' : 'English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer">
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ta')} className="cursor-pointer font-tamil">
          தமிழ்
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
