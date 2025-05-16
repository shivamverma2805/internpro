
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-muted/50 text-muted-foreground border-t mt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-primary mb-4">
                  <GraduationCap size={28} />
                  <span>EduHorizon</span>
                </Link>
                <p className="text-sm">Empowering learners through accessible and quality education.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                  <li><Link to="/blogs" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                  <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t pt-8 text-center text-sm">
              <p>&copy; {currentYear} EduHorizon. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  