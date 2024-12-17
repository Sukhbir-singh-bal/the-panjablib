import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
          alt="Library books"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 py-32 sm:py-48">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੀ ਦੁਨੀਆ
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover the rich heritage of Punjabi literature through our extensive collection
            of books, poems, and stories. Start your journey into the world of Punjabi
            literature today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/books">
              <Button size="lg" className="text-lg">
                Explore Books
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="text-lg text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}