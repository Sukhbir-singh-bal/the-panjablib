export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  publishedYear: number;
  description: string;
}

export interface BookFiltersState {
  category: string;
  author: string;
  year: number | null;
  searchQuery: string;
}

export type SortOption = 'newest' | 'oldest' | 'title' | 'author';