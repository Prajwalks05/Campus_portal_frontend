"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, TrendingUp, CreditCard, Users, BookOpen } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { currentStudent } from "@/data/student";
import { overallAttendance } from "@/data/attendance";
import { cieOverview } from "@/data/cie";
import { feeOverview } from "@/data/fees";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const quickActions = [
  {
    title: "College Fees",
    description: "View and pay your semester fees",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
    href: "/dashboard/fees",
  },
  {
    title: "Re-Registration",
    description: "Complete your course registration",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
    href: "/dashboard/courses",
  },
  {
    title: "Re-appearing Examination",
    description: "Register for re-appearing exams",
    icon: CalendarDays,
    color: "bg-orange-100 text-orange-600",
    href: "/dashboard/cie",
  },
  {
    title: "Certificates",
    description: "Download academic certificates",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
    href: "/dashboard/proctor",
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Welcome Section */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-bold text-primary">
                  Welcome back, {currentStudent.name.split(" ")[0]}
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Student ID: {currentStudent.usn} | {currentStudent.department}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Current Semester: {currentStudent.semester}th Semester
              </Badge>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Metrics Cards */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card variant="elevated" className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {overallAttendance.percentage}%
              </div>
              <p className="text-xs text-muted-foreground">
                {overallAttendance.status}
              </p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${overallAttendance.percentage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CIE Average</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {cieOverview.totalScore}/{cieOverview.maxScore}
              </div>
              <p className="text-xs text-muted-foreground">
                +{cieOverview.scorePercentage}% from last CIE
              </p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${cieOverview.scorePercentage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Fees</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₹0</div>
              <p className="text-xs text-green-600">All fees paid</p>
              <Badge variant="success" className="mt-2">
                ✓ Cleared
              </Badge>
            </CardContent>
          </Card>

          <Card variant="elevated" className="glass">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">9</div>
              <p className="text-xs text-muted-foreground">
                Current semester courses
              </p>
              <Badge variant="secondary" className="mt-2">
                4th Semester
              </Badge>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  variant="elevated"
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 glass group"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {action.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {action.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-primary font-medium group-hover:underline">
                      Access →
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}