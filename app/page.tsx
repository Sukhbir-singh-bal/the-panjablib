import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedBooks } from '@/components/home/FeaturedBooks';
import { FeaturedAuthors } from '@/components/home/FeaturedAuthors';
import { Categories } from '@/components/home/Categories';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedBooks />
      <FeaturedAuthors />
      <Categories />
    </main>
  );
}
