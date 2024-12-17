"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const authors = [
  {
    id: 1,
    name: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    books: 25,
    genre: 'Poetry, Fiction',
    href: '/authors/1',
  },
  {
    id: 2,
    name: 'ਸੁਰਜੀਤ ਪਾਤਰ',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    books: 18,
    genre: 'Poetry',
    href: '/authors/2',
  },
  {
    id: 3,
    name: 'ਨਾਨਕ ਸਿੰਘ',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    books: 30,
    genre: 'Fiction, Drama',
    href: '/authors/3',
  },
  {
    id: 4,
    name: 'ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d',
    books: 15,
    genre: 'History, Biography',
    href: '/authors/4',
  },
];

export function FeaturedAuthors() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Authors</h2>
          <Link href="/authors">
            <Button variant="outline">View All Authors</Button>
          </Link>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {authors.map((author) => (
              <CarouselItem key={author.id} className="md:basis-1/2 lg:basis-1/3">
                <Link href={author.href}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{author.name}</h3>
                          <p className="text-sm text-muted-foreground">{author.genre}</p>
                          <p className="text-sm text-muted-foreground">{author.books} books</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}