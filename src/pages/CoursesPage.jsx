
    import React from 'react';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { Filter, Search, Star, Users } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const coursesData = [
      { id: 1, title: 'Advanced JavaScript', category: 'Web Development', instructor: 'Jane Doe', rating: 4.8, students: 1250, imageAlt: "JavaScript code on screen", imageDesc: "Illustration of JavaScript concepts" },
      { id: 2, title: 'React for Beginners', category: 'Web Development', instructor: 'John Smith', rating: 4.7, students: 2300, imageAlt: "React logo", imageDesc: "React library logo with abstract background" },
      { id: 3, title: 'Data Science with Python', category: 'Data Science', instructor: 'Alice Brown', rating: 4.9, students: 1800, imageAlt: "Python logo with data charts", imageDesc: "Python snake intertwined with data visualization elements" },
      { id: 4, title: 'UI/UX Design Fundamentals', category: 'Design', instructor: 'Bob Green', rating: 4.6, students: 950, imageAlt: "Mobile app UI design", imageDesc: "Clean and modern mobile application interface design" },
      { id: 5, title: 'Machine Learning A-Z', category: 'Data Science', instructor: 'Carol White', rating: 4.8, students: 1500, imageAlt: "Neural network diagram", imageDesc: "Abstract representation of a machine learning neural network" },
      { id: 6, title: 'Digital Marketing Mastery', category: 'Marketing', instructor: 'David Black', rating: 4.5, students: 1100, imageAlt: "Marketing icons", imageDesc: "Collection of digital marketing related icons and symbols" },
      { id: 7, title: 'Cybersecurity Essentials', category: 'IT & Software', instructor: 'Eve Secure', rating: 4.7, students: 850, imageAlt: "Cybersecurity shield icon", imageDesc: "Digital shield protecting data in a network" },
      { id: 8, title: 'Cloud Computing with AWS', category: 'IT & Software', instructor: 'Frank Cloud', rating: 4.9, students: 1600, imageAlt: "AWS cloud logo", imageDesc: "Amazon Web Services cloud icon with server symbols" },
      { id: 9, title: 'Mobile App Development (iOS)', category: 'Mobile Development', instructor: 'Grace Swift', rating: 4.6, students: 700, imageAlt: "iOS app interface", imageDesc: "Sleek iOS application interface on an iPhone screen" },
      { id: 10, title: 'Game Development with Unity', category: 'Game Development', instructor: 'Henry Coder', rating: 4.8, students: 920, imageAlt: "Unity game engine logo", imageDesc: "Unity 3D game engine logo with game characters" },
    ];

    const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'IT & Software', 'Mobile Development', 'Game Development'];

    const CoursesPage = () => {
      const [searchTerm, setSearchTerm] = React.useState('');
      const [activeCategory, setActiveCategory] = React.useState('All');

      const filteredCourses = coursesData.filter(course =>
        (activeCategory === 'All' || course.category === activeCategory) &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      };

      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      };

      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">Explore Our Courses</h1>
            <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Find the perfect course to expand your skills and achieve your career goals. Filter by category or search for specific topics.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row gap-6 mb-8 items-center p-6 bg-card rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative flex-grow w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search courses..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </motion.div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {categories.map(category => (
                <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {filteredCourses.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredCourses.map((course) => (
                <motion.div key={course.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-card">
                    <div className="h-56 bg-muted/50 flex items-center justify-center overflow-hidden">
                      {course.id === 1 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />}
                      {course.id === 2 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
                      {course.id === 3 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />}
                      {course.id === 4 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
                      {course.id === 5 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />}
                      {course.id === 6 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />}
                      {course.id === 7 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1696041757866-f19a8e46fab1" />}
                      {course.id === 8 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />}
                      {course.id === 9 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1620886434979-5cc4ddc31858" />}
                      {course.id === 10 && <img  className="object-cover w-full h-full" alt={course.imageAlt} src="https://images.unsplash.com/photo-1590098563652-6066ea95bfa7" />}
                    </div>
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                      <CardDescription className="text-sm text-primary">{course.category}</CardDescription>
                      <p className="text-xs text-muted-foreground pt-1">By {course.instructor}</p>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" /> {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" /> {course.students.toLocaleString()}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white">
                        <Link to={`/courses/${course.id}`}>View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Search size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Courses Found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      );
    };

    export default CoursesPage;
  