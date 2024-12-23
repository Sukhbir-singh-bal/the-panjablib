"use client";

import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  BookType,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Books",
    value: "2,345",
    icon: BookOpen,
    trend: "+12.5%",
  },
  {
    title: "Active Users",
    value: "1,234",
    icon: Users,
    trend: "+8.2%",
  },
  {
    title: "Categories",
    value: "56",
    icon: BookType,
    trend: "+3.1%",
  },
  {
    title: "Sales",
    value: "₹123,456",
    icon: TrendingUp,
    trend: "+15.3%",
  },
];

export default function adminPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-green-600">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              {stat.trend}
              <span className="text-gray-600 ml-2">vs last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Popular Books</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="h-16 w-12 bg-gray-200 rounded" />
                <div>
                  <p className="text-sm font-medium">ਪੰਜਾਬੀ ਸਾਹਿਤ</p>
                  <p className="text-xs text-gray-500">by ਗੁਰਮੀਤ ਸਿੰਘ</p>
                  <p className="text-xs text-gray-500">Sales: 234</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}