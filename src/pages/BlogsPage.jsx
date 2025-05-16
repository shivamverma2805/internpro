
    import React from 'react';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';

    const blogPosts = [
      {
        id: 1,
        title: 'The Future of Web Development: Trends to Watch in 2025',
        excerpt: 'Explore the latest advancements and predictions shaping the web development landscape for the coming year.',
        author: 'Alex Johnson',
        date: '2025-04-15',
        category: 'Web Development',
        imageAlt: "Futuristic web design interface",
        imageDesc: "Abstract visualization of futuristic web technology and code"
      },
      {
        id: 2,
        title: 'Unlocking the Power of Big Data: A Beginner\'s Guide',
        excerpt: 'Learn the fundamentals of big data and how it\'s transforming industries worldwide. Get started with practical tips.',
        author: 'Sarah Miller',
        date: '2025-04-01',
        category: 'Data Science',
        imageAlt: "Network of data points",
        imageDesc: "Glowing interconnected nodes representing big data network"
      },
      {
        id: 3,
        title: 'Mastering a Growth Mindset for Learning New Skills',
        excerpt: 'Discover how cultivating a growth mindset can accelerate your learning journey and help you overcome challenges.',
        author: 'Dr. Emily Carter',
        date: '2025-03-20',
        category: 'Personal Development',
        imageAlt: "Brain with growing plant",
        imageDesc: "Stylized human brain with a plant growing from it, symbolizing growth"
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

    const BlogsPage = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">Our Blog</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in technology, learning, and career development from our expert contributors.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 bg-card">
                  <div className="h-52 bg-muted/50 flex items-center justify-center overflow-hidden">
                     {index === 0 && <img  className="object-cover w-full h-full" alt={post.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
                     {index === 1 && <img  className="object-cover w-full h-full" alt={post.imageAlt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
                     {index === 2 && <img  className="object-cover w-full h-full" alt={post.imageAlt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />}
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-primary pt-1">{post.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-muted-foreground space-x-3">
                      <span className="flex items-center"><UserCircle className="mr-1 h-4 w-4" /> {post.author}</span>
                      <span className="flex items-center"><CalendarDays className="mr-1 h-4 w-4" /> {post.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blogs/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default BlogsPage;
  