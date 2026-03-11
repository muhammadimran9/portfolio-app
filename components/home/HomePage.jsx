import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedSections from '@/components/home/FeaturedSections';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl lg:px-12 force-ltr">
      <div className="mx-auto flex flex-col lg:flex-row lg:gap-5 lg:py-4 force-ltr">
        <Header />
        
        <main className="max-w-[854px] transition-all duration-300 lg:w-4/5">
          <div className="mt-20 p-8 md:mt-0 aos-init aos-animate" data-aos="fade-up">
            <HeroSection />
            
            <div className="my-4 border-t border-neutral-300 dark:border-neutral-700 my-8"></div>
            
            <SkillsSection />
            
            <div className="my-4 border-t border-neutral-300 dark:border-neutral-700 my-8"></div>
            
            <FeaturedSections />
          </div>
        </main>
      </div>
    </div>
  );
}
