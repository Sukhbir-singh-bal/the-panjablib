import { Book } from './types/book';

// Mock data - replace with actual data source later
const books: Book[] = [
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
  // Add more books as needed
];

export function getBooks(): Book[] {
  return books;
}

export function getBookById(id: string): Book | undefined {
  return books.find(book => book.id === id);
}

export function getBooksByCategory(category: string): Book[] {
  if (category === 'all') {
    return books;
  }
  return books.filter(book => book.category.toLowerCase() === category.toLowerCase());
}

export function getBooksByAuthor(authorId: string): Book[] {
  return books.filter(book => book.author === authorId);
}

export function searchBooks(query: string): Book[] {
  const searchTerm = query.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.description.toLowerCase().includes(searchTerm)
  );
}