
    import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { Linkedin, Twitter, Globe } from 'lucide-react';
    import { motion } from 'framer-motion';

    const instructors = [
      {
        id: 1,
        name: 'Aashish Kumar',
        title: 'Full Stack Developer & Instructor',
        bio: 'Chaudhary Aashish Kumar, CEO of Emergexians Infotech, leads innovation in web, marketing, and ERP solutions. Passionate about tech and growth, I empower businesses to scale with smart digital strategies.',
        avatarFallback: 'ER',
        specialties: ['Full Stack Development', 'Digital Marketing', 'ERP Solutions', 'Web Development'],
        social: { linkedin: 'https://www.linkedin.com/in/chaudharyaashishkumar/', twitter: '#', website: 'https://emergexians.com/' },
        imageAlt: "Portrait of Aashish Kumar",
        imageDesc: "Aashish Kumar in a tech conference, discussing web development trends"
        
        
      },
      {
        id: 2,
        name: 'Hemant Singh ',
        title: 'A.I. & Machine Learning',
        bio: 'I am Hemant Singh, an AI enthusiast and B.Tech student at NIET, passionate about Generative AI, Quantum Computing, and Astrophysics. I aim to explore tech’s future impact and collaborate on innovations that push boundaries..',avatarFallback: 'MC',
        specialties: ['Artificial Intelligence', 'Machine Learning', 'Quantum Computing' ],
        social: { linkedin: 'https://www.linkedin.com/in/hemant-singh-06a726235/', twitter: '#', website: '#' },
        imageAlt: "Portrait of Hemant Singh",
        imageDesc: "Hemant Singh at a tech event, engaging with AI enthusiasts"
        
      },
      {
        id: 3,
        name: 'Azad Chandra',
        title: 'Machine Learning & Data Analysis',
        bio: 'Azad Chandra specializes in Machine Learning and Data Analysis, turning data into actionable insights..',
        avatarFallback: 'AK',
        specialties: ['MAchine Learning', 'Data Analysis', 'Python Programming', 'Data Visualization'],
        social: { linkedin: '#', twitter: '#', website: '#' },
        imageAlt: "Portrait of Azad Chandra",
        imageDesc: "Azad Chandra analyzing data on a laptop in a modern office"
      },
      {
        id: 4,
        name: 'Sumit Kashyap',
        title: 'FRONTEND DEVELOPER & UI/UX DESIGNER',
        bio: 'Sumit Kashyap is a Frontend Developer and UI/UX Designer with a passion for creating user-friendly interfaces and engaging experiences.',
        
        avatarFallback: 'BC',
        specialties: ['FRONTEND DEVELOPER', 'UI/UX DESIGNER', 'HTML/CSS', 'JavaScript'],
        social: { linkedin: '#', twitter: '#', website: '#' },
        imageAlt: "Portrait of Sumit Kashyap",
        imageDesc: "Sumit Kashyap working on a design project in a creative workspace"
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
      hidden: { scale: 0.9, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const InstructorsPage = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">Meet Our Expert Instructors</h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Our instructors are industry leaders and passionate educators dedicated to your success. Learn from the best and gain real-world skills.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {instructors.map((instructor) => (
              <motion.div key={instructor.id} variants={itemVariants}>
                <Card className="h-full flex flex-col text-center overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 bg-card">
                  <CardHeader className="items-center pt-8">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
                      {instructor.id === 1 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://emergexians.com/assets/img/team/1.png" />}
                      {instructor.id === 2 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://emergexians.com/assets/img/team/2.png" />}
                      {instructor.id === 3 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://emergexians.com/assets/img/team/4.png" />}
                      {instructor.id === 4 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://coderszonee.com/assets/images/instructors/sumit.jpeg" />}
                      {instructor.id === 5 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a" />}
                      {instructor.id === 6 && <img  className="aspect-square h-full w-full rounded-full object-cover" alt={instructor.imageAlt} src="https://images.unsplash.com/photo-1561089489-f13d5e730d72" />}
                      <AvatarFallback className="text-3xl bg-primary/20 text-primary">{instructor.avatarFallback}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{instructor.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{instructor.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">{instructor.bio}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-1 text-foreground">Specialties:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {instructor.specialties.map(spec => (
                          <span key={spec} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{spec}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                      <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
                      <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Globe size={20} /></a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      );
    };

    export default InstructorsPage;
  