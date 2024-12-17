import { notFound } from 'next/navigation';
import { AuthorDetail } from '@/components/authors/AuthorDetail';
import { getAuthorById, getAuthors } from '@/lib/authors';

interface AuthorPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  const authors = getAuthors();
  return authors.map((author) => ({
    id: author.id,
  }));
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = getAuthorById(params.id);
  
  if (!author) {
    notFound();
  }

  return <AuthorDetail author={author} />;
}