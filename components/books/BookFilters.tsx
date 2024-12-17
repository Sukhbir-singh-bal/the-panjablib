"use client";

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookFiltersState } from '@/lib/types/book';

const categories = ['Poetry', 'Fiction', 'Philosophy', 'History'];
const years = Array.from({ length: 24 }, (_, i) => 2000 + i);

export function BookFilters() {
  const [filters, setFilters] = useState<BookFiltersState>({
    category: 'all',
    author: '',
    year: null,
    searchQuery: '',
  });

  const handleFilterChange = (key: keyof BookFiltersState, value: string | number | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Category</Label>
        <Select
          value={filters.category}
          onValueChange={(value) => handleFilterChange('category', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.toLowerCase()} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Publication Year</Label>
        <Select
          value={filters.year?.toString() || 'all'}
          onValueChange={(value) => handleFilterChange('year', value === 'all' ? null : parseInt(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}