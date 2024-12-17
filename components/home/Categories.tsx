'use client';

import Link from 'next/link';
import { Book, History, Music, Pen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type Category } from '@/lib/types';

const categories: Category[] = [
  {
    id: 1,
    title: 'Poetry',
    icon: Pen,
    description: 'Explore the rhythmic beauty of Punjabi poetry',
    href: '/books?category=poetry',
    count: 150,
  },
  {
    id: 2,
    title: 'Fiction',
    icon: Book,
    description: 'Immerse yourself in captivating Punjabi stories',
    href: '/books?category=fiction',
    count: 120,
  },
  {
    id: 3,
    title: 'History',
    icon: History,
    description: 'Discover the rich history of Punjab',
    href: '/books?category=history',
    count: 80,
  },
  {
    id: 4,
    title: 'Folk Literature',
    icon: Music,
    description: 'Experience traditional Punjabi folk tales',
    href: '/books?category=folk',
    count: 90,
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={category.href}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle className="flex items-center justify-between">
                      {category.title}
                      <span className="text-sm text-muted-foreground">
                        {category.count} books
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
