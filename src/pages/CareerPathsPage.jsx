
    import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Briefcase, TrendingUp, Users } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const careerPaths = [
      {
        id: 1,
        title: 'Full-Stack Web Developer',
        description: 'Master front-end and back-end technologies to build complete web applications.',
        avgSalary: '$95,000/year',
        jobOutlook: 'Excellent',
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        imageAlt: "Code on multiple screens",
        imageDesc: "Web developer workspace with multiple monitors showing code"
      },
      {
        id: 2,
        title: 'Data Scientist',
        description: 'Learn to analyze complex data, build predictive models, and extract valuable insights.',
        avgSalary: '$120,000/year',
        jobOutlook: 'Very Strong',
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        imageAlt: "Data visualization charts",
        imageDesc: "Complex data charts and graphs representing data science"
      },
      {
        id: 3,
        title: 'UX/UI Designer',
        description: 'Create intuitive and visually appealing user interfaces for digital products.',
        avgSalary: '$85,000/year',
        jobOutlook: 'Good',
        icon: <Users className="h-8 w-8 text-primary" />,
        imageAlt: "Mobile app interface design process",
        imageDesc: "Designer working on user interface mockups on a tablet"
      },
    ];

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
      }
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const CareerPathsPage = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">Top Career Paths</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Explore high-demand career paths and the skills you need to succeed. Each path is curated with relevant courses to guide your learning journey.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {careerPaths.map((path, index) => (
              <motion.div key={path.id} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 bg-card">
                  <div className="h-52 bg-muted/50 flex items-center justify-center p-4 overflow-hidden">
                    {index === 0 && <img  className="object-contain h-full w-auto" alt={path.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
                    {index === 1 && <img  className="object-contain h-full w-auto" alt={path.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />}
                    {index === 2 && <img  className="object-contain h-full w-auto" alt={path.imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />}
                  </div>
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                      {path.icon}
                    </div>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <CardDescription className="text-sm">{path.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-sm text-center space-y-2">
                    <p><strong className="text-foreground">Average Salary:</strong> {path.avgSalary}</p>
                    <p><strong className="text-foreground">Job Outlook:</strong> <span className="text-green-600 font-semibold">{path.jobOutlook}</span></p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full">
                      <Link to={`/career-paths/${path.id}`}>
                        Explore Path <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default CareerPathsPage;
  