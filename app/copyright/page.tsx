import { CopyrightInfo } from '@/components/copyright/CopyrightInfo';
import { ContactForm } from '@/components/copyright/ContactForm';

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Copyright Information</h1>
        <div className="max-w-3xl mx-auto">
          <CopyrightInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}