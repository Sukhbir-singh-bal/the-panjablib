import { LucideIcon } from 'lucide-react';

export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  href: string;
  description?: string;
  category?: string;
  publishedYear?: number;
}

export interface Author {
  id: number;
  name: string;
  image: string;
  books: number;
  genre: string;
  href: string;
  bio?: string;
}

export interface Category {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
  href: string;
  count: number;
}