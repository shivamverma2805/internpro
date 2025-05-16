
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';

    const CallToActionSection = () => {
      return (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground py-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">Join thousands of students already benefiting from EduHorizon. Sign up today and take the first step towards your goals.</p>
            <Button size="lg" variant="secondary" className="text-primary font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
              Get Started for Free
            </Button>
          </div>
        </motion.section>
      );
    };

    export default CallToActionSection;
  