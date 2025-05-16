
    import React from 'react';
    import { Outlet } from 'react-router-dom';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useLocation } from 'react-router-dom';
    import { ThemeProvider } from '@/contexts/ThemeProvider';

    const MainLayout = () => {
      const location = useLocation();
      return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                <Outlet />
              </motion.main>
            </AnimatePresence>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      );
    };

    export default MainLayout;
  