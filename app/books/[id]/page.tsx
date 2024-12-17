import { notFound } from 'next/navigation';
import { BookDetail } from '@/components/books/BookDetail';
import { getBookById, getBooks } from '@/lib/books';

interface BookPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const books = getBooks();
  return books.map((book) => ({
    id: book.id,
  }));
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookById(params.id);
  
  if (!book) {
    notFound();
  }

  return <BookDetail book={book} />;
}