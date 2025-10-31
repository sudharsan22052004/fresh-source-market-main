import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LanguageRouteWrapper from "./components/LanguageRouteWrapper";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en/" replace />} />
          <Route path="/:lang" element={<LanguageRouteWrapper><Index /></LanguageRouteWrapper>} />
          <Route path="/:lang/browse" element={<LanguageRouteWrapper><Browse /></LanguageRouteWrapper>} />
          <Route path="/:lang/product/:id" element={<LanguageRouteWrapper><ProductDetail /></LanguageRouteWrapper>} />
          <Route path="/:lang/about" element={<LanguageRouteWrapper><About /></LanguageRouteWrapper>} />
          <Route path="/:lang/contact" element={<LanguageRouteWrapper><Contact /></LanguageRouteWrapper>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
