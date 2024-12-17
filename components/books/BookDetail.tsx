"use client";

import Image from 'next/image';
import { Book } from '@/lib/types/book';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, BookOpen } from 'lucide-react';

interface BookDetailProps {
  book: Book;
}

export function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                <div className="flex items-center text-muted-foreground">
                  <User className="h-4 w-4 mr-2" />
                  <span>{book.author}</span>
                </div>
              </div>
              
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{book.category}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{book.publishedYear}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground">{book.description}</p>
              
              <Button className="w-full md:w-auto">
                Read Book
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}