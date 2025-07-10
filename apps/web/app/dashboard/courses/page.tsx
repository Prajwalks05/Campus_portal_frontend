"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { courses, getTypeColor } from "@/data/courses";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

export default function CoursesPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground">
              View your enrolled courses and faculty information
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm backdrop-blur-sm"
            />
          </div>
        </Card>
      </motion.div>

      {/* Courses Table */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" className="glass">
          <CardHeader>
            <CardTitle>Course Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">S.NO</TableHead>
                  <TableHead>COURSE CODE</TableHead>
                  <TableHead>COURSE NAME</TableHead>
                  <TableHead>COURSE TYPE</TableHead>
                  <TableHead className="text-center">CREDITS</TableHead>
                  <TableHead>FACULTY NAME</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <motion.tr
                    key={course.id}
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium text-center">
                      {course.sno}
                    </TableCell>
                    <TableCell className="font-mono text-sm font-semibold text-primary">
                      {course.courseCode}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{course.courseName}</div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`${getTypeColor(course.courseType)} border font-medium`}
                        variant="outline"
                      >
                        {course.courseType === "Professional Core Course (PC)" && "PC"}
                        {course.courseType === "Non-Credit Mandatory Course (NCMC)" && "NCMC"}
                        {course.courseType === "Basic Science Courses (BS)" && "BS"}
                        {course.courseType === "Ability Enhancement Courses (AE)" && "AE"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full font-semibold text-sm">
                        {course.credits}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        {course.facultyName}
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Course Summary */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card variant="glass" className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {courses.filter(c => c.courseType === "Professional Core Course (PC)").length}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Professional Core
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {courses.filter(c => c.courseType === "Basic Science Courses (BS)").length}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Basic Science
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">
                {courses.filter(c => c.courseType === "Ability Enhancement Courses (AE)").length}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Ability Enhancement
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-600">
                {courses.reduce((sum, course) => sum + course.credits, 0)}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Total Credits
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}