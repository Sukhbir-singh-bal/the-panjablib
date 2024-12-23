"use client";

import { Author } from "@/lib/types";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    key: "image",
    label: "Image",
    render: (author: Author) => (
      <div className="relative h-10 w-10">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
    ),
  },
  { key: "name", label: "Name" },
  { key: "bio", label: "Bio" },
  { key: "booksCount", label: "Books" },
  {
    key: "actions",
    label: "Actions",
    render: (author: Author) => (
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/admin/authors/${author.id}/edit`}>
            <Pencil className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
];

interface AuthorsTableProps {
  data: Author[];
}

export function AuthorsTable({ data }: AuthorsTableProps) {
  return <DataTable columns={columns} data={data} />;
}