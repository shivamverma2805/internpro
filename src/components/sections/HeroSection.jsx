
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 100,
          delay: custom * 0.1,
        },
      }),
    };

    const HeroSection = () => {
      return (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden bg-gradient-to-br from-primary/5 via-background/80 to-accent/5 dark:from-primary/10 dark:via-background/70 dark:to-accent/10 backdrop-blur-sm"
        >
          <div className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1.05, opacity: 0}}
              animate={{ scale: 1, opacity: 1}}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
              className="absolute inset-0 w-full h-full object-cover opacity-5 dark:opacity-[0.03]"
              alt="Abstract background of interconnected lines and nodes"
              src="https://images.unsplash.com/photo-1571775210495-89e43f8fbe10" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl opacity-40 dark:opacity-30"
            animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 dark:bg-accent/10 rounded-full filter blur-3xl opacity-40 dark:opacity-30"
            animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
                x: [0, -20, 20, 0],
                y: [0, 20, -20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              custom={0}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 
                         bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500 
                         dark:from-primary/90 dark:via-purple-500 dark:to-pink-400
                         relative 
                         [text-shadow:0_1px_0_hsl(var(--primary-foreground)/0.2),_0_2px_0_hsl(var(--primary-foreground)/0.1),_0_3px_0_hsl(var(--primary-foreground)/0.05),_0_4px_1px_rgba(0,0,0,0.1),_0_0_5px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.2),_0_3px_5px_rgba(0,0,0,0.1),_0_5px_10px_rgba(0,0,0,0.1),_0_10px_20px_rgba(0,0,0,0.1)]
                         dark:[text-shadow:0_1px_0_hsl(var(--primary)/0.4),_0_2px_0_hsl(var(--primary)/0.3),_0_3px_0_hsl(var(--primary)/0.2),_0_4px_1px_rgba(0,0,0,0.2),_0_0_5px_rgba(100,100,255,0.2),_0_1px_3px_rgba(0,0,0,0.3),_0_3px_5px_rgba(0,0,0,0.2),_0_5px_10px_rgba(0,0,0,0.2),_0_10px_20px_rgba(0,0,0,0.2)]"
            >
              Unlock Your Potential with EduHorizon
            </motion.h1>
            <motion.p 
              custom={1}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10"
            >
              Discover a world of knowledge with our cutting-edge courses, expert instructors, and a vibrant learning community. Start your journey today!
            </motion.p>
            <motion.div 
              custom={2}
              variants={itemVariants} 
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg">
                  <Link to="/courses">
                    Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="shadow-lg border-border hover:bg-accent/50 dark:border-border/50 dark:hover:bg-accent/20">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      );
    };

    export default HeroSection;
  