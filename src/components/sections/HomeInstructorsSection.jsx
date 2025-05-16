
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { ArrowRight, Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

    const instructorsData = [
      { id: 1, name: 'Aashish Kumar', title: 'Full Stack Developer & Instructor', avatarFallback: 'AK', imageAlt: 'Aashish Kumar', imgSrc: "https://emergexians.com/assets/img/team/1.png" },
      { id: 2, name: 'Hemant Singh', title: 'A.I. & Machine Learning', avatarFallback: 'HS', imageAlt: 'Hemant Singh', imgSrc: "https://emergexians.com/assets/img/team/2.png" },
      { id: 3, name: 'Azad Chandra', title: 'Machine Learning & Data Analysis', avatarFallback: 'AC', imageAlt: 'Azad Chandra', imgSrc: "https://emergexians.com/assets/img/team/4.png" },
      { id: 4, name: 'Sumit Kashyap', title: 'FRONTEND DEVELOPER & UI/UX DESIGNER', avatarFallback: 'SK', imageAlt: 'Sumit Kashyap', imgSrc: "https://coderszonee.com/assets/images/instructors/sumit.jpeg" },
    ]
    const HomeInstructorsSection = () => {
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
              Meet Our Instructors
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
              className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide"
              variants={containerVariants}
            >
              {instructorsData.map((instructor) => (
                <motion.div 
                  variants={itemVariants} 
                  key={instructor.id}
                  whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { type: "spring", stiffness: 200, damping: 15 } }}
                  className="flex-shrink-0 w-[280px] sm:w-[300px]"
                >
                  <Card className="overflow-hidden bg-card transition-shadow duration-300 h-full flex flex-col text-center">
                    <CardHeader className="items-center pt-6">
                      <Avatar className="w-24 h-24 mb-4 border-2 border-primary/50">
                        <AvatarImage src={instructor.imgSrc} alt={instructor.imageAlt} />
                        <AvatarFallback className="text-3xl bg-primary/20 text-primary">{instructor.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <CardTitle>{instructor.name}</CardTitle>
                      <CardDescription className="text-primary">{instructor.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-center">
                      <div className="flex justify-center space-x-3 mt-2">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
                      </div>
                    </CardContent>
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
              <Link to="/instructors">
                Meet All Instructors <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      );
    };

    export default HomeInstructorsSection;
  