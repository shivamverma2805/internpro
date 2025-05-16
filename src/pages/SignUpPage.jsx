
    import React, { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { useToast } from '@/components/ui/use-toast';
    import { Link, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react';

    const SignUpPage = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Please fill in all fields.",
          });
          return;
        }
        if (password !== confirmPassword) {
          toast({
            variant: "destructive",
            title: "Passwords do not match.",
            description: "Please check your passwords and try again.",
          });
          return;
        }
        if (password.length < 6) {
            toast({
                variant: "destructive",
                title: "Password too short.",
                description: "Password must be at least 6 characters long.",
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find(user => user.email === email);

        if (userExists) {
          toast({
            variant: "destructive",
            title: "User already exists.",
            description: "An account with this email already exists. Please log in.",
          });
          return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        toast({
          title: "Account created!",
          description: "You have successfully signed up. Please log in.",
        });
        navigate('/login');
      };

      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-md space-y-8">
            <Card className="bg-card/80 backdrop-blur-lg shadow-xl">
              <CardHeader className="text-center">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1}}
                  className="mx-auto bg-primary/10 dark:bg-primary/20 p-3 rounded-full w-fit mb-4"
                >
                  <UserPlus className="h-8 w-8 text-primary" />
                </motion.div>
                <CardTitle className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">Create your Account</CardTitle>
                <CardDescription className="mt-2">
                  Join EduHorizon and start your learning journey today!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 pr-10"
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="pl-10 pr-10"
                      />
                       <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showConfirmPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                      </button>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg">
                      Sign Up
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-center flex flex-col items-center space-y-2">
                <p className="text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-primary hover:underline">
                    Log in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      );
    };

    export default SignUpPage;
  