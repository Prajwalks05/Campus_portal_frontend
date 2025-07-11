"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Target, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cieData, cieOverview } from "@/data/cie";

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

export default function CIEPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">CIE Marks</h1>
            <p className="text-muted-foreground">
              Continuous Internal Evaluation marks and eligibility status
            </p>
          </div>
        </div>
      </motion.div>

      {/* Performance Overview */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-4">
          <Card variant="glass" className="border-green-200/50 bg-green-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-800">
                  Overall Performance
                </CardTitle>
                <CardDescription className="text-green-600">
                  {cieOverview.performanceStatus}
                </CardDescription>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">
                {cieOverview.overallPerformance}%
              </div>
              <div className="mt-2 w-full bg-green-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${cieOverview.overallPerformance}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-blue-200/50 bg-blue-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-blue-800">
                  Eligible Subjects
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Meeting CIE criteria
                </CardDescription>
              </div>
              <CheckCircle2 className="h-8 w-8 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">
                {cieOverview.eligible}
              </div>
              <p className="text-sm text-blue-600 mt-1">
                out of {cieData.length + 4} subjects
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-purple-200/50 bg-purple-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-purple-800">
                  Current Score
                </CardTitle>
                <CardDescription className="text-purple-600">
                  Latest CIE total
                </CardDescription>
              </div>
              <Target className="h-8 w-8 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-700">
                {cieOverview.totalScore}/{cieOverview.maxScore}
              </div>
              <p className="text-sm text-purple-600 mt-1">
                {cieOverview.scorePercentage}% Score
              </p>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-orange-200/50 bg-orange-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-orange-800">
                  Grade Point
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Current semester
                </CardDescription>
              </div>
              <Award className="h-8 w-8 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-700">
                9.2
              </div>
              <p className="text-sm text-orange-600 mt-1">
                Excellent performance
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* CIE Marks Table */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" className="glass">
          <CardHeader>
            <CardTitle>Detailed CIE Marks</CardTitle>
            <CardDescription>
              Subject-wise breakdown of Continuous Internal Evaluation marks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead rowSpan={2} className="w-16 text-center border-r">S.NO</TableHead>
                    <TableHead rowSpan={2} className="border-r">COURSE</TableHead>
                    <TableHead colSpan={5} className="text-center border-r bg-blue-50/50">THEORY MARKS</TableHead>
                    <TableHead colSpan={2} className="text-center border-r bg-green-50/50">LAB MARKS</TableHead>
                    <TableHead rowSpan={2} className="text-center border-r bg-purple-50/50">FINAL</TableHead>
                    <TableHead rowSpan={2} className="text-center border-r bg-orange-50/50">NCMC</TableHead>
                    <TableHead rowSpan={2} className="text-center border-r bg-red-50/50">CIE TOTAL</TableHead>
                    <TableHead rowSpan={2} className="text-center">STATUS</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableHead className="text-center text-xs bg-blue-50/50">CIE-1</TableHead>
                    <TableHead className="text-center text-xs bg-blue-50/50">CIE-2</TableHead>
                    <TableHead className="text-center text-xs bg-blue-50/50">CIE-3</TableHead>
                    <TableHead className="text-center text-xs bg-blue-50/50">AAT-1</TableHead>
                    <TableHead className="text-center text-xs bg-blue-50/50 border-r">AAT-2</TableHead>
                    <TableHead className="text-center text-xs bg-green-50/50">LAB-1</TableHead>
                    <TableHead className="text-center text-xs bg-green-50/50 border-r">LAB-2</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cieData.map((record) => (
                    <motion.tr
                      key={record.id}
                      variants={itemVariants}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium text-center border-r">
                        {record.sno}
                      </TableCell>
                      <TableCell className="border-r">
                        <div className="space-y-1">
                          <div className="font-medium text-sm">{record.courseName}</div>
                          <div className="text-xs text-primary font-mono">({record.courseCode})</div>
                          <div className="text-xs text-muted-foreground">{record.facultyName}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold">
                        {record.theoryMarks.cie1}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold">
                        {record.theoryMarks.cie2}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold">
                        {record.theoryMarks.cie3}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold">
                        {record.theoryMarks.aat1}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold border-r">
                        {record.theoryMarks.aat2}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold">
                        {record.labMarks.lab1 || "-"}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold border-r">
                        {record.labMarks.lab2 || "-"}
                      </TableCell>
                      <TableCell className="text-center text-sm font-bold text-purple-600 border-r">
                        {record.finalSummary}
                      </TableCell>
                      <TableCell className="text-center text-sm font-semibold border-r">
                        {record.ncmcMarks || "-"}
                      </TableCell>
                      <TableCell className="text-center text-lg font-bold text-primary border-r">
                        {record.cieTotal}/50
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={record.status === "ELIGIBLE" ? "success" : "destructive"}
                          className="font-medium"
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CIE Guidelines */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-blue-200/50">
          <CardHeader>
            <CardTitle className="text-blue-800">CIE Evaluation Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-800">Theory Components:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• <strong>CIE-1, CIE-2, CIE-3:</strong> Written examinations (20 marks each)</li>
                  <li>• <strong>AAT-1, AAT-2:</strong> Assignment/Activities (5 marks each)</li>
                  <li>• <strong>Total Theory:</strong> 50 marks</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-800">Lab Components:</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• <strong>Lab-1, Lab-2:</strong> Practical evaluations</li>
                  <li>• <strong>Continuous Assessment:</strong> Regular lab work</li>
                  <li>• <strong>Final Lab Exam:</strong> End-semester practical</li>
                </ul>
              </div>
            </div>
            <div className="p-4 bg-blue-100 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Eligibility Criteria:</strong> Students must secure a minimum of 40% marks in CIE to be eligible for 
                semester-end examinations. Lab courses require both theory and practical components to be cleared.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}