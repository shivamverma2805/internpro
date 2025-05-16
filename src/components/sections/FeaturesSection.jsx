
    import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { BookMarked, Users, Zap } from 'lucide-react';
    import { motion } from 'framer-motion';

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
      },
    };

    const itemVariants = {
      hidden: { y: 30, opacity: 0, scale: 0.95 },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 12 },
      },
    };

    const features = [
      {
        icon: <BookMarked size={32} className="text-primary" />,
        title: 'Expert-Led Courses',
        description: 'Learn from industry professionals and experienced educators who bring real-world insights to every lesson.',
      },
      {
        icon: <Users size={32} className="text-primary" />,
        title: 'Vibrant Community',
        description: 'Connect with fellow learners, share ideas, and collaborate on projects in our supportive online community.',
      },
      {
        icon: <Zap size={32} className="text-primary" />,
        title: 'Flexible Learning',
        description: 'Study at your own pace, anytime, anywhere. Our platform is designed to fit your busy lifestyle.',
      },
    ];

    const FeaturesSection = () => {
      return (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            initial={{y:20, opacity: 0}} 
            whileInView={{y:0, opacity:1}} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 0.5}}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose EduHorizon?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                variants={itemVariants} 
                key={index}
                whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { type: "spring", stiffness: 200, damping: 15 } }}
                className="h-full"
              >
                <Card className="h-full text-center bg-card transition-shadow duration-300">
                  <CardHeader>
                    <motion.div 
                      initial={{scale:0}} 
                      whileInView={{scale:1}} 
                      viewport={{ once: true }}
                      transition={{delay: index * 0.1 + 0.3, type: "spring", stiffness: 150}}
                      className="mx-auto bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-fit mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      );
    };

    export default FeaturesSection;
  