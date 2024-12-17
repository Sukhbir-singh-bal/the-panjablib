"use client";

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function AuthorSearch() {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search authors..."
          className="pl-9"
        />
      </div>
    </div>
  );
}