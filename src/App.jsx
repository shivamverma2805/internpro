
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import MainLayout from '@/components/layout/MainLayout';
    import HomePage from '@/pages/HomePage';
    import CoursesPage from '@/pages/CoursesPage';
    import CareerPathsPage from '@/pages/CareerPathsPage';
    import InstructorsPage from '@/pages/InstructorsPage';
    import FAQsPage from '@/pages/FAQsPage';
    import BlogsPage from '@/pages/BlogsPage';
    import SignUpPage from '@/pages/SignUpPage';
    import LoginPage from '@/pages/LoginPage';
    
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="courses" element={<CoursesPage />} />
              <Route path="courses/:courseId" element={<div className="container py-8">Course Detail Page (ID: courseId)</div>} /> 
              <Route path="career-paths" element={<CareerPathsPage />} />
              <Route path="career-paths/:pathId" element={<div className="container py-8">Career Path Detail Page (ID: pathId)</div>} />
              <Route path="instructors" element={<InstructorsPage />} />
              <Route path="faqs" element={<FAQsPage />} />
              <Route path="blogs" element={<BlogsPage />} />
              <Route path="blogs/:blogId" element={<div className="container py-8">Blog Post Detail Page (ID: blogId)</div>} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="contact" element={<div className="container py-8">Contact Us Page</div>} />
              <Route path="terms" element={<div className="container py-8">Terms of Service Page</div>} />
              <Route path="privacy" element={<div className="container py-8">Privacy Policy Page</div>} />
              <Route path="sitemap" element={<div className="container py-8">Sitemap Page</div>} />
              <Route path="about" element={<div className="container py-8">About Us Page</div>} />
              <Route path="*" element={<div className="container py-16 text-center"><h1 className="text-4xl font-bold">404 - Page Not Found</h1><p className="text-muted-foreground mt-4">Oops! The page you are looking for does not exist.</p></div>} />
            </Route>
          </Routes>
        </Router>
      );
    }

    export default App;
  