"use client";

import { BookOpen, Users, BookType, User, Settings, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: BookOpen,
  },
  {
    title: "Books",
    href: "/admin/books",
    icon: BookType,
  },
  {
    title: "Authors",
    href: "/admin/authors",
    icon: User,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: BookType,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-bold ">
              ਪੰਜਾਬੀ ਬੁੱਕ ਸਟੋਰ Admin
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="block h-8 w-8 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "w-64 min-h-screen shadow-sm transition-all duration-300",
            !isSidebarOpen && "w-0"
          )}
        >
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
                <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-md transform transition-transform duration-200 hover:scale-105"
                >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
                </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}