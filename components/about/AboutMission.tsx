import { BookOpen, Globe, Heart } from 'lucide-react';

export function AboutMission() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-12">
            This free website helps readers explore and enjoy Punjabi literature. 
            We aim to make these literary treasures accessible to everyone, 
            fostering a love for Punjabi culture and language.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">Making literature available to all</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Connecting readers worldwide</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cultural Heritage</h3>
              <p className="text-muted-foreground">Preserving our literary legacy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}