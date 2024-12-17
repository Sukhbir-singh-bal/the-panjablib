"use client";

import { useState } from 'react';
import { Author } from '@/lib/types/author';
import { AuthorCard } from './AuthorCard';
import { BookPagination } from '@/components/books/BookPagination';

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'ਅੰਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    genre: 'Poetry, Fiction',
    bookCount: 25,
    popularity: 95,
    bio: 'One of the most prominent Punjabi poets of the 20th century.',
  },
  {
    id: '2',
    name: 'ਸੁਰਜੀਤ ਪਾਤਰ',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    genre: 'Poetry',
    bookCount: 18,
    popularity: 88,
    bio: 'Known for revolutionary poetry and social commentary.',
  },
  // Add more mock authors as needed
];

const ITEMS_PER_PAGE = 12;

export function AuthorList() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(mockAuthors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedAuthors = mockAuthors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedAuthors.map((author) => (
          <AuthorCard key={author.id} author={author} />
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