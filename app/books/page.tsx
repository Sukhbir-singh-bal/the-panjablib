import { BookList } from '@/components/books/BookList';
import { BookFilters } from '@/components/books/BookFilters';
import { BookSearch } from '@/components/books/BookSearch';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Explore Books</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <BookFilters />
          </aside>
          <main className="lg:col-span-3">
            <BookSearch />
            <BookList />
          </main>
        </div>
      </div>
    </div>
  );
}