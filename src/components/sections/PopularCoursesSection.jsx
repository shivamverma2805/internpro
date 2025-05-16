
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
      },
    };

    const itemVariants = {
      hidden: { x: 30, opacity: 0, scale: 0.95 },
      visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 12 },
      },
    };

    const popularCoursesData = [
      { id: 1, title: 'Web Development Bootcamp', description: 'Master HTML, CSS, JavaScript, React, and Node.js.', imageAlt: 'Abstract code illustration', imageKey: 'course1', imgSrc: "https://images.unsplash.com/photo-1687006067259-6de13ca3875e" },
      { id: 2, title: 'Data Science Essentials', description: 'Learn Python, SQL, and machine learning fundamentals.', imageAlt: 'Data visualization graph', imageKey: 'course2', imgSrc: "https://images.unsplash.com/photo-1596774419796-0318e0ab4ba1" },
      { id: 3, title: 'UX Design Masterclass', description: 'Design user-friendly interfaces and experiences.', imageAlt: 'Mobile app UI sketches', imageKey: 'course3', imgSrc: "https://images.unsplash.com/photo-1648134859182-98df6e93ef58" },
      { id: 4, title: 'Advanced Python Programming', description: 'Deep dive into advanced Python concepts and libraries.', imageAlt: 'Python logo with gears', imageKey: 'course4', imgSrc: "https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" },
      { id: 5, title: 'Cloud Native with Kubernetes', description: 'Deploy and manage applications with Kubernetes.', imageAlt: 'Kubernetes logo and cloud icons', imageKey: 'course5', imgSrc: "https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" },
      { id: 6, title: 'Cybersecurity for Developers', description: 'Learn to build secure applications and systems.', imageAlt: 'Digital shield and lock icon', imageKey: 'course6', imgSrc: "https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" },
    ];
    
    const PopularCoursesSection = () => {
      const scrollRef = React.useRef(null);

      const scroll = (direction) => {
        if (scrollRef.current) {
          const scrollAmount = direction === 'left' ? -300 : 300;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };

      return (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div 
            initial={{y:20, opacity: 0}} 
            whileInView={{y:0, opacity:1}} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 0.5}}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Popular Courses
            </h2>
            <div className="hidden sm:flex space-x-2">
              <Button variant="outline" size="icon" onClick={() => scroll('left')} className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scroll('right')} className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div
              ref={scrollRef}
              className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide" // scrollbar-hide might need a plugin or custom CSS
              variants={containerVariants}
            >
              {popularCoursesData.map((course) => (
                <motion.div 
                  variants={itemVariants} 
                  key={course.id}
                  whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { type: "spring", stiffness: 200, damping: 15 } }}
                  className="flex-shrink-0 w-[300px] sm:w-[320px]" // Fixed width for cards
                >
                  <Card className="overflow-hidden bg-card transition-shadow duration-300 h-full flex flex-col">
                    <div className="h-48 bg-muted dark:bg-muted/50 flex items-center justify-center overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="object-cover w-full h-full" alt={course.imageAlt} src={course.imgSrc} 
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <Button asChild className="w-full">
                        <Link to={`/courses/popular-${course.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4"/></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      );
    };

    export default PopularCoursesSection;
  