export function CopyrightInfo() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none mb-12">
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Copyright Notice</h2>
        <p className="text-muted-foreground mb-4">
          We only list books that are publicly available online. If you find any content 
          listed illegally, please contact us for removal.
        </p>
        <p className="text-muted-foreground">
          Our mission is to promote Punjabi literature while respecting intellectual 
          property rights. We take copyright concerns seriously and will promptly 
          address any reported violations.
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Fair Use</h3>
          <p className="text-muted-foreground">
            Content on this website is provided for educational and cultural purposes. 
            We believe this constitutes fair use of any copyrighted material as provided 
            for in section 107 of the US Copyright Law.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Rights Holders</h3>
          <p className="text-muted-foreground">
            If you are a rights holder and believe your work has been improperly 
            included on our platform, please use the contact form below to notify us.
          </p>
        </div>
      </div>
    </div>
  );
}