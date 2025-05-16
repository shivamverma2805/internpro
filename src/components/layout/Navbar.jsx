
    import React from 'react';
    import { Link, NavLink, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { GraduationCap, Menu, X, Moon, Sun, UserPlus, LogOut, UserCircle } from 'lucide-react';
    import { motion } from 'framer-motion';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
      DropdownMenuSeparator
    } from '@/components/ui/dropdown-menu';
    import { useTheme } from '@/contexts/ThemeProvider';
    import { useToast } from '@/components/ui/use-toast';


    const navLinks = [
      { to: '/', label: 'Home' },
      { to: '/courses', label: 'Courses' },
      { to: '/career-paths', label: 'Career Paths' },
      { to: '/instructors', label: 'Instructors' },
      { to: '/faqs', label: 'FAQs' },
      { to: '/blogs', label: 'Blogs' },
    ];

    const Navbar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
      const { theme, setTheme } = useTheme();
      const navigate = useNavigate();
      const { toast } = useToast();
      const [currentUser, setCurrentUser] = React.useState(null);

      React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
      }, []); 


      const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setCurrentUser(null);
        toast({
          title: "Logged out",
          description: "You have been successfully logged out.",
        });
        navigate('/');
      };
      
      const activeLinkStyle = "text-primary font-semibold after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary after:mt-1";
      const inactiveLinkStyle = "hover:text-primary transition-colors duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full after:mt-1";

      return (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm dark:shadow-md dark:shadow-primary/10"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <GraduationCap size={32} />
                </motion.div>
                <span>EduHorizon</span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <motion.div key={link.to} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} px-3 py-2 rounded-md`}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                {currentUser ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
                        <Button variant="ghost" className="flex items-center">
                           <UserCircle className="mr-2 h-5 w-5" /> {currentUser.name.split(' ')[0]}
                        </Button>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-md mt-1">
                       <DropdownMenuItem onClick={() => navigate('/profile')} className="cursor-pointer">
                        <UserCircle className="mr-2 h-4 w-4" /> My Profile
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 dark:text-red-400 hover:!text-red-600 dark:hover:!text-red-500">
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
                    <Button asChild className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md">
                      <Link to="/signup"><UserPlus className="mr-2 h-4 w-4" /> Sign Up</Link>
                    </Button>
                 </motion.div>
                )}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="ml-2">
                  <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <Sun className="h-5 w-5 transition-all duration-500 transform rotate-0 scale-100 dark:rotate-90 dark:scale-0" /> : <Moon className="h-5 w-5 transition-all duration-500 transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />}
                    <Sun className="absolute h-5 w-5 transition-all duration-500 transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                    <Moon className="absolute h-5 w-5 transition-all duration-500 transform rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </motion.div>
              </div>

              <div className="md:hidden flex items-center">
                 <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mr-2">
                      {theme === 'dark' ? <Sun className="h-5 w-5 transition-all duration-500 transform rotate-0 scale-100 dark:rotate-90 dark:scale-0" /> : <Moon className="h-5 w-5 transition-all duration-500 transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />}
                      <Sun className="absolute h-5 w-5 transition-all duration-500 transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                      <Moon className="absolute h-5 w-5 transition-all duration-500 transform rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                 </motion.div>
                <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <DropdownMenuTrigger asChild>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="icon">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                      </Button>
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 mt-2 bg-background/95 backdrop-blur-md">
                    {navLinks.map((link) => (
                      <DropdownMenuItem key={link.to} asChild>
                        <Link 
                          to={link.to} 
                          className="w-full text-left py-2 px-3 hover:bg-primary/10 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                     {currentUser ? (
                       <>
                         <DropdownMenuItem asChild>
                           <Link to="/profile" className="w-full text-left py-2 px-3 hover:bg-primary/10 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                             <UserCircle className="mr-2 h-4 w-4" /> My Profile
                           </Link>
                         </DropdownMenuItem>
                         <DropdownMenuItem onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="cursor-pointer text-red-500 dark:text-red-400 hover:!text-red-600 dark:hover:!text-red-500 w-full text-left py-2 px-3 hover:bg-primary/10 rounded-md">
                           <LogOut className="mr-2 h-4 w-4" /> Logout
                         </DropdownMenuItem>
                       </>
                     ) : (
                       <DropdownMenuItem asChild>
                         <Button asChild className="w-full mt-1 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-md">
                           <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}><UserPlus className="mr-2 h-4 w-4" /> Sign Up</Link>
                         </Button>
                       </DropdownMenuItem>
                     )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </motion.nav>
      );
    };

    export default Navbar;
  