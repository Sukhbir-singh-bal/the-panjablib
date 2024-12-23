import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const featuredBooks = [
  {
    id: 1,
    title: 'ਪੰਜਾਬੀ ਕਵਿਤਾ',
    author: 'ਸੁਰਜੀਤ ਪਾਤਰ',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    href: '/books/1',
  },

  {
    id: 3,
    title: 'ਸੱਚ ਦੇ ਰਾਹ',
    author: 'ਭਾਈ ਰਣਜੀਤ ਸਿੰਘ',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    href: '/books/3',
  },
  {
    id: 4,
    title: 'ਪੰਜਾਬ ਦੇ ਕਹਾਣੀਕਾਰ',
    author: 'ਜਸਵੰਤ ਸਿੰਘ ਕਨਵਲ',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    href: '/books/4',
  },
  {
    id: 5,
    title: 'ਨਵੇਂ ਪੰਨੇ',
    author: 'ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ',
    cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
    href: '/books/5',
  },
];

export function FeaturedBooks() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Books</h2>
          <Link href="/books">
            <Button variant="outline">View All Books</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9]"> 
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{book.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={book.href} className="w-full">
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
