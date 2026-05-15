import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { useEffect } from "react";
import "./theme.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import ProductSection from "./components/ProductSection";
import ProductPage from "./components/ProductPage";
import ContactSection from "./components/ContactSection";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Set document title
  useEffect(() => {
    document.title = "Garfe Coffee";
  }, []);

  // Handle legacy hash links from Hero component (e.g., #about) 
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.getAttribute("href") === "#about") {
        e.preventDefault();
        navigate("/about");
      }
    };
    window.addEventListener("click", handleHashClick);
    return () => window.removeEventListener("click", handleHashClick);
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Toaster position="top-center" expand={true} richColors />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <Hero />
                  <AboutSection />
                  <MissionSection />
                  <ProductSection />
                  <ValuesSection />
                </PageWrapper>
              } 
            />
            <Route 
              path="/products/:productId" 
              element={
                <PageWrapper>
                  <ProductPage />
                </PageWrapper>
              } 
            />
            <Route 
              path="/about" 
              element={
                <PageWrapper>
                  <div className="pt-20">
                    <AboutSection />
                  </div>
                </PageWrapper>
              } 
            />
            <Route 
              path="/mission" 
              element={
                <PageWrapper>
                  <div className="pt-20">
                    <MissionSection />
                  </div>
                </PageWrapper>
              } 
            />
            <Route 
              path="/values" 
              element={
                <PageWrapper>
                  <div className="pt-20">
                    <ValuesSection />
                  </div>
                </PageWrapper>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <PageWrapper>
                  <div className="pt-20 min-h-screen">
                    <ContactSection />
                  </div>
                </PageWrapper>
              } 
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Show contact section as footer on all pages except the dedicated contact page */}
      {location.pathname !== "/contact" && (
        <ContactSection />
      )}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;