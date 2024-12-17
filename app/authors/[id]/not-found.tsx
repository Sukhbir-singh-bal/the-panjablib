export default function AuthorNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Author Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, we couldn't find the author you're looking for.
        </p>
        <a href="/authors" className="text-primary hover:underline">
          Browse all authors
        </a>
      </div>
    </div>
  );
}