import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LanguageRouteWrapperProps {
  children: React.ReactNode;
}

const LanguageRouteWrapper = ({ children }: LanguageRouteWrapperProps) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // If language in URL doesn't match current language, update it
    if (lang && lang !== i18n.language && ['en', 'ta'].includes(lang)) {
      i18n.changeLanguage(lang);
    } else if (!lang) {
      // If no language in URL, redirect to default language
      const defaultLang = i18n.language || 'en';
      navigate(`/${defaultLang}${window.location.pathname}`, { replace: true });
    }
  }, [lang, i18n, navigate]);

  return <>{children}</>;
};

export default LanguageRouteWrapper;
