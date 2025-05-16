
    import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import FeaturesSection from '@/components/sections/FeaturesSection';
    import PopularCoursesSection from '@/components/sections/PopularCoursesSection';
    import HomeInstructorsSection from '@/components/sections/HomeInstructorsSection';
    import HomeFaqsSection from '@/components/sections/HomeFaqsSection';
    import CallToActionSection from '@/components/sections/CallToActionSection';

    const HomePage = () => {
      return (
        <div className="space-y-24 md:space-y-32 pb-24">
          <HeroSection />
          <FeaturesSection />
          <PopularCoursesSection />
          <HomeInstructorsSection /> 
          <HomeFaqsSection />
          <CallToActionSection />
        </div>
      );
    };

    export default HomePage;
  