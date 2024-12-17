import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/lib/types/author';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-4">
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
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-2">{author.bio}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Book className="h-4 w-4 mr-1" />
          <span>{author.bookCount} books</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/authors/${author.id}`} className="w-full">
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}