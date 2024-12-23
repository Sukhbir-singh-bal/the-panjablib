"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import { AuthorsTable } from "@/components/tables/authors-table";
import type { Author } from "@/lib/types";

const authors: Author[] = [
  {
    id: 1,
    name: "ਹਰਜੀਤ ਸਿੰਘ",
    bio: "ਪ੍ਰਸਿੱਧ ਪੰਜਾਬੀ ਲੇਖਕ",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    genre: "Noval",
    books:2,
    href:"#",
    
  },
  {
    id: 2,
    name: "ਗੁਰਮੀਤ ਸਿੰਘ",
    bio: "ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਮਾਹਿਰ",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    genre: "Noval",
    books:2,
    href:"#",
  },
];

export default function AuthorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Authors</h2>
        <Button asChild>
          <Link href="/admin/authors/new">
            <Plus className="mr-2 h-4 w-4" /> Add Author
          </Link>
        </Button>
      </div>

      <Card className="p-6">
        <AuthorsTable data={authors} />
      </Card>
    </div>
  );
}