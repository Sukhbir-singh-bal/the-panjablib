"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/lib/types/author';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, BookOpen } from 'lucide-react';
import { getBooksByAuthor } from '@/lib/books';

interface AuthorDetailProps {
  author: Author;
}

export function AuthorDetail({ author }: AuthorDetailProps) {
  const authorBooks = getBooksByAuthor(author.name);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="space-y-6">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
                <p className="text-muted-foreground">{author.genre}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground">{author.bio}</p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{author.bookCount} Books</span>
                </div>
              </div>
              
              {authorBooks.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Books by {author.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {authorBooks.map((book) => (
                      <Link key={book.id} href={`/books/${book.id}`}>
                        <Card className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-3">
                              <Book className="h-5 w-5" />
                              <div>
                                <p className="font-medium">{book.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {book.publishedYear}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}