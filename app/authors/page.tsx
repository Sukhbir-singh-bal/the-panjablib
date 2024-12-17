import { AuthorList } from '@/components/authors/AuthorList';
import { AuthorFilters } from '@/components/authors/AuthorFilters';
import { AuthorSearch } from '@/components/authors/AuthorSearch';

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Authors</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <AuthorFilters />
          </aside>
          <main className="lg:col-span-3">
            <AuthorSearch />
            <AuthorList />
          </main>
        </div>
      </div>
    </div>
  );
}