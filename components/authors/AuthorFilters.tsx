"use client";

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AuthorFiltersState } from '@/lib/types/author';

const genres = ['All', 'Poetry', 'Fiction', 'Philosophy', 'History'];
const popularityLevels = [
  { value: 'all', label: 'All' },
  { value: 'high', label: 'Most Popular' },
  { value: 'medium', label: 'Popular' },
  { value: 'low', label: 'Emerging' },
];

export function AuthorFilters() {
  const [filters, setFilters] = useState<AuthorFiltersState>({
    genre: 'All',
    popularity: 'all',
    searchQuery: '',
  });

  const handleFilterChange = (key: keyof AuthorFiltersState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Genre</Label>
        <Select
          value={filters.genre}
          onValueChange={(value) => handleFilterChange('genre', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select genre" />
          </SelectTrigger>
          <SelectContent>
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Popularity</Label>
        <Select
          value={filters.popularity}
          onValueChange={(value) => handleFilterChange('popularity', value as AuthorFiltersState['popularity'])}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select popularity" />
          </SelectTrigger>
          <SelectContent>
            {popularityLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}