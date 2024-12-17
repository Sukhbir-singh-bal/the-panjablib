"use client";

import { useState } from 'react';
import { Book } from '@/lib/types/book';
import { BookCard } from './BookCard';
import { BookPagination } from './BookPagination';

// Mock data - replace with API call later
const mockBooks: Book[] = [
  {
    id: '1',
    title: 'ਪੰਜਾਬੀ ਕਵਿਤਾ',
    author: 'ਸੁਰਜੀਤ ਪਾਤਰ',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    category: 'Poetry',
    publishedYear: 2020,
    description: 'A collection of modern Punjabi poetry exploring themes of love and nature.',
  },
  {
    id: '2',
    title: 'ਸੱਚ ਦੇ ਰਾਹ',
    author: 'ਭਾਈ ਰਣਜੀਤ ਸਿੰਘ',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    category: 'Philosophy',
    publishedYear: 2019,
    description: 'Philosophical insights into the path of truth and righteousness.',
  },
  // Add more mock books as needed
];

const ITEMS_PER_PAGE = 12;

export function BookList() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(mockBooks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedBooks = mockBooks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <BookPagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}