"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Calendar,
  GraduationCap,
  User,
  School,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    name: "Fees",
    href: "/dashboard/fees",
    icon: CreditCard,
  },
  {
    name: "Attendance",
    href: "/dashboard/attendance",
    icon: Calendar,
  },
  {
    name: "CIE",
    href: "/dashboard/cie",
    icon: GraduationCap,
  },
  {
    name: "Proctor Diary",
    href: "/dashboard/proctor",
    icon: User,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 px-4 mb-8">
            <School className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold tracking-tight">BMSCE Webcampus</h2>
              <p className="text-xs text-muted-foreground">Student Portal</p>
            </div>
          </div>
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground relative",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 bg-primary rounded-lg"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                  <item.icon
                    className={cn(
                      "mr-3 h-4 w-4 relative z-10",
                      isActive ? "text-primary-foreground" : ""
                    )}
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}