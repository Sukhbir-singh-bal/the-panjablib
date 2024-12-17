export interface Author {
  id: string;
  name: string;
  image: string;
  genre: string;
  bookCount: number;
  popularity: number;
  bio: string;
}

export interface AuthorFiltersState {
  genre: string;
  popularity: 'all' | 'high' | 'medium' | 'low';
  searchQuery: string;
}