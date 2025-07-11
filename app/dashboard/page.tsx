"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, TrendingUp, CreditCard, Users, BookOpen, Award, Clock, Target } from "lucide-react";

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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  },
};

const quickActions = [
  {
    title: "College Fees",
    description: "View and pay your semester fees",
    icon: CreditCard,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600",
    href: "/dashboard/fees",
  },
  {
    title: "Re-Registration",
    description: "Complete your course registration",
    icon: BookOpen,
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600",
    href: "/dashboard/courses",
  },
  {
    title: "Re-appearing Examination",
    description: "Register for re-appearing exams",
    icon: Clock,
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600",
    href: "/dashboard/cie",
  },
  {
    title: "Certificates",
    description: "Download academic certificates",
    icon: Award,
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600",
    href: "/dashboard/proctor",
  },
];

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/5 to-indigo-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 space-y-8"
      >
        {/* Enhanced Welcome Section */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="backdrop-blur-xl bg-gradient-to-r from-white/30 via-white/20 to-white/30 border-white/40 shadow-2xl">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="space-y-2">
                  <motion.h1 
                    className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Welcome back, {currentStudent.name.split(" ")[0]}! 👋
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Student ID: <span className="font-semibold">{currentStudent.usn}</span> • {currentStudent.department}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-200/30">
                    <Target className="w-5 h-5 mr-2" />
                    Semester {currentStudent.semester}
                  </Badge>
                </motion.div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Enhanced Metrics Grid */}
        <motion.div variants={itemVariants}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CalendarDays className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {overallAttendance.percentage}%
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {overallAttendance.status}
                  </p>
                  <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${overallAttendance.percentage}%` }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CIE Average</CardTitle>
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {cieOverview.totalScore}/{cieOverview.maxScore}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    +{cieOverview.scorePercentage}% from last CIE
                  </p>
                  <div className="w-full bg-gray-200/60 dark:bg-gray-700/60 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${cieOverview.scorePercentage}%` }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Fees</CardTitle>
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <CreditCard className="h-4 w-4 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-1">₹0</div>
                  <p className="text-xs text-green-600 mb-3">All fees paid</p>
                  <Badge className="bg-green-500/20 text-green-700 border-green-300/50">
                    ✓ Cleared
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-1">9</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Current semester courses
                  </p>
                  <Badge className="bg-purple-500/20 text-purple-700 border-purple-300/50">
                    4th Semester
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Quick Actions */}
        <motion.div variants={itemVariants}>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Quick Actions
              </h2>
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-1 ml-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Link href={action.href}>
                    <Card className="cursor-pointer backdrop-blur-xl bg-white/25 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:bg-white/35">
                      <CardHeader className="pb-4">
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl ${action.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <action.icon className={`h-7 w-7 ${action.iconColor}`} />
                        </motion.div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {action.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                          {action.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <motion.div 
                          className={`text-sm font-medium bg-gradient-to-r ${action.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}
                          whileHover={{ x: 5 }}
                        >
                          Access →
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}