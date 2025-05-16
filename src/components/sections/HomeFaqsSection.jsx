
    import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
    import { ArrowRight, HelpCircle } from 'lucide-react';
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
        hidden: { opacity: 0, x: -20 },
        visible: (custom) => ({ 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.4, delay: custom * 0.1, ease: "easeOut" }
        }),
    };


    const homeFaqsData = [
      {
        id: 'homeFaq1',
        question: 'How do I enroll in a course?',
        answer: 'Navigate to the course page and click "Enroll Now". You might need to create an account or log in.',
      },
      {
        id: 'homeFaq2',
        question: 'Are there prerequisites for courses?',
        answer: 'Some advanced courses have prerequisites, listed on their description page. Most beginner courses don\'t.',
      },
      {
        id: 'homeFaq3',
        question: 'Do I get a certificate?',
        answer: 'Yes, upon successful completion, you receive a verifiable digital certificate.',
      },
    ];

    const HomeFaqsSection = () => {
      return (
        <motion.section
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
            className="flex items-center justify-center mb-2"
          >
            <HelpCircle size={36} className="text-primary mr-3" />
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          </motion.div>
          <motion.p 
            initial={{y:20, opacity: 0}} 
            whileInView={{y:0, opacity:1}} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{duration: 0.5, delay:0.1}}
            className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            Have questions? We've got answers to some common queries.
          </motion.p>
          <motion.div 
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {homeFaqsData.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  custom={index}
                  variants={itemVariants}
                >
                  <AccordionItem value={faq.id} className="bg-card shadow-sm rounded-lg border border-border/50 dark:border-border/30">
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 dark:hover:bg-muted/20 rounded-t-lg text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: homeFaqsData.length * 0.1 + 0.2 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/faqs">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      );
    };

    export default HomeFaqsSection;
  