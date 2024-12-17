export default function BookNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the book you're looking for.
        </p>
        <a href="/books" className="text-primary hover:underline">
          Browse all books
        </a>
      </div>
    </div>
  );
}