"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { attendanceData, getAttendanceStatusColor, overallAttendance } from "@/data/attendance";

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

export default function AttendancePage() {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

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
            <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
            <p className="text-muted-foreground">
              Monitor your attendance across all subjects
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overall Stats */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-4">
          <Card variant="glass" className="border-blue-200/50 bg-blue-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-blue-800">
                  Overall Attendance
                </CardTitle>
                <CardDescription className="text-blue-600">
                  {overallAttendance.status}
                </CardDescription>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">
                {overallAttendance.percentage}%
              </div>
              <div className="mt-2 w-full bg-blue-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${overallAttendance.percentage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-green-200/50 bg-green-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-800">
                  Eligible Courses
                </CardTitle>
                <CardDescription className="text-green-600">
                  Meeting attendance criteria
                </CardDescription>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">
                {overallAttendance.eligible}
              </div>
              <p className="text-sm text-green-600 mt-1">
                out of {attendanceData.length} courses
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-red-200/50 bg-red-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-red-800">
                  Not Eligible
                </CardTitle>
                <CardDescription className="text-red-600">
                  Below minimum requirement
                </CardDescription>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-700">
                {overallAttendance.notEligible}
              </div>
              <p className="text-sm text-red-600 mt-1">
                courses at risk
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-purple-200/50 bg-purple-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-purple-800">
                  Average Classes
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Per subject
                </CardDescription>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700">
                {Math.round(attendanceData.reduce((sum, item) => sum + item.totalClasses, 0) / attendanceData.length)}
              </div>
              <p className="text-sm text-purple-600 mt-1">
                classes conducted
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Attendance Table */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" className="glass">
          <CardHeader>
            <CardTitle>Detailed Attendance Records</CardTitle>
            <CardDescription>
              Subject-wise attendance breakdown for current semester
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">S.NO</TableHead>
                  <TableHead>COURSE CODE</TableHead>
                  <TableHead>COURSE NAME</TableHead>
                  <TableHead>FACULTY</TableHead>
                  <TableHead className="text-center">ATTENDED</TableHead>
                  <TableHead className="text-center">TOTAL</TableHead>
                  <TableHead className="text-center">PERCENTAGE</TableHead>
                  <TableHead className="text-center">STATUS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record) => (
                  <motion.tr
                    key={record.id}
                    variants={itemVariants}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium text-center">
                      {record.sno}
                    </TableCell>
                    <TableCell className="font-mono text-sm font-semibold text-primary">
                      {record.courseCode}
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{record.courseName}</div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {record.facultyName}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-semibold text-green-600">
                        {record.classesAttended}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-semibold">
                        {record.totalClasses}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-bold text-lg">
                          {record.attendancePercentage}%
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(record.attendancePercentage)}`}
                            style={{ width: `${record.attendancePercentage}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        className={`${getAttendanceStatusColor(record.status)} border font-medium`}
                        variant="outline"
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Attendance Guidelines */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-blue-200/50">
          <CardHeader>
            <CardTitle className="text-blue-800">Attendance Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-green-800">Good (≥90%)</p>
                  <p className="text-sm text-green-600">Excellent attendance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-yellow-800">Warning (75-89%)</p>
                  <p className="text-sm text-yellow-600">Needs improvement</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-red-800">Critical (<75%)</p>
                  <p className="text-sm text-red-600">Below minimum requirement</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> A minimum of 75% attendance is required to be eligible for semester examinations.
                Students with attendance below 75% may need to seek special permission from the academic office.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}