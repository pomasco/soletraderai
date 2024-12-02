import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';

export default function Home() {
  return (
    <div className="space-y-20 -mt-6">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}