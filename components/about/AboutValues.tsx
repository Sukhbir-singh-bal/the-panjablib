export function AboutValues() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Free Access</h3>
              <p className="text-muted-foreground">
                We believe that literature should be accessible to everyone, 
                regardless of their economic status.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cultural Preservation</h3>
              <p className="text-muted-foreground">
                We are committed to preserving and promoting Punjabi literature 
                for future generations.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-muted-foreground">
                We foster a community of readers and writers who share our passion 
                for Punjabi literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}