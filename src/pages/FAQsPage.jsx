
    import React from 'react';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
    import { motion } from 'framer-motion';
    import { HelpCircle } from 'lucide-react';

    const faqsData = [
      {
        id: 'faq1',
        question: 'How do I enroll in a course?',
        answer: 'You can enroll in a course by navigating to the course page and clicking the "Enroll Now" button. You may need to create an account or log in if you haven\'t already.',
      },
      {
        id: 'faq2',
        question: 'Are there any prerequisites for the courses?',
        answer: 'Some advanced courses may have prerequisites, which will be listed on the course description page. Most beginner-level courses do not require prior knowledge.',
      },
      {
        id: 'faq3',
        question: 'Can I get a refund if I\'m not satisfied?',
        answer: 'Yes, we offer a 30-day money-back guarantee on most courses. Please check our refund policy for more details.',
      },
      {
        id: 'faq4',
        question: 'Do I get a certificate upon completion?',
        answer: 'Yes, upon successful completion of a course, you will receive a verifiable digital certificate that you can share on your resume or LinkedIn profile.',
      },
      {
        id: 'faq5',
        question: 'How long do I have access to the course materials?',
        answer: 'Once you enroll in a course, you typically have lifetime access to the course materials, including lectures, resources, and any future updates.',
      },
    ];

    const FAQsPage = () => {
      return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <HelpCircle size={48} className="mx-auto text-primary mb-4" />
            <h1 className="text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-500">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our courses, platform, and policies. If you can't find what you're looking for, feel free to contact us.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqsData.map((faq, index) => (
                <motion.div 
                  key={faq.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <AccordionItem value={faq.id} className="bg-card shadow-sm rounded-lg border border-border/50">
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 rounded-t-lg text-base font-medium">
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
        </div>
      );
    };

    export default FAQsPage;
  