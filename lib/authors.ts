import { Author } from './types/author';

const authors: Author[] = [
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
  // Add more authors as needed
];

export function getAuthors(): Author[] {
  return authors;
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find(author => author.id === id);
}

export function getAuthorsByGenre(genre: string): Author[] {
  if (genre === 'all') {
    return authors;
  }
  return authors.filter(author => 
    author.genre.toLowerCase().includes(genre.toLowerCase())
  );
}

export function getAuthorsByPopularity(level: 'high' | 'medium' | 'low'): Author[] {
  switch (level) {
    case 'high':
      return authors.filter(author => author.popularity >= 90);
    case 'medium':
      return authors.filter(author => author.popularity >= 70 && author.popularity < 90);
    case 'low':
      return authors.filter(author => author.popularity < 70);
    default:
      return authors;
  }
}

export function searchAuthors(query: string): Author[] {
  const searchTerm = query.toLowerCase();
  return authors.filter(author => 
    author.name.toLowerCase().includes(searchTerm) ||
    author.genre.toLowerCase().includes(searchTerm) ||
    author.bio.toLowerCase().includes(searchTerm)
  );
}