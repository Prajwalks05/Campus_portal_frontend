"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { feeOverview, feeStructure } from "@/data/fees";
import { currentStudent } from "@/data/student";

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

export default function FeesPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
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
            <h1 className="text-3xl font-bold tracking-tight">Fee Details</h1>
            <p className="text-muted-foreground">
              View your academic fee structure and payment status
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Button size="sm">
              Pay Now
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Fee Overview Cards */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="glass" className="border-green-200/50 bg-green-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-green-800">
                  Total Fees Paid
                </CardTitle>
                <CardDescription className="text-green-600">
                  All previous dues cleared
                </CardDescription>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">
                {formatCurrency(feeOverview.totalFeesPaid)}
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-blue-200/50 bg-blue-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-blue-800">
                  Current Year Fees
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Academic Year 2024-2025
                </CardDescription>
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-700">
                {formatCurrency(feeOverview.currentYearFees)}
              </div>
            </CardContent>
          </Card>

          <Card variant="glass" className="border-orange-200/50 bg-orange-50/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-sm font-medium text-orange-800">
                  Payment Status
                </CardTitle>
                <CardDescription className="text-orange-600">
                  {feeOverview.paymentDue}
                </CardDescription>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-600" />
            </CardHeader>
            <CardContent>
              <Badge
                variant={feeOverview.paymentStatus === "Paid" ? "success" : "warning"}
                className="text-lg px-4 py-2"
              >
                {feeOverview.paymentStatus}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Student Info */}
      <motion.div variants={itemVariants}>
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentStudent.name.toUpperCase()} - FEE DETAILS
            </CardTitle>
            <CardDescription>
              Student ID: {currentStudent.usn}
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Detailed Fee Structure */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" className="glass">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Detailed Fee Structure</CardTitle>
              <CardDescription>Breakdown of academic fees by year</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Type</TableHead>
                  <TableHead>Academic Year</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead className="text-right">2023-2024</TableHead>
                  <TableHead className="text-right">2024-2025</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((fee, index) => (
                  <motion.tr
                    key={index}
                    variants={itemVariants}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium">
                      {fee.feeType}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {fee.academicYear}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {fee.year}
                    </TableCell>
                    <TableCell className="text-right font-mono">
                      {formatCurrency(fee["2023-2024"])}
                    </TableCell>
                    <TableCell className="text-right font-mono font-semibold">
                      {formatCurrency(fee["2024-2025"])}
                    </TableCell>
                  </motion.tr>
                ))}
                <TableRow className="border-t-2 border-primary/20 bg-primary/5">
                  <TableCell className="font-bold text-primary">TOTAL</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right font-bold text-primary">
                    {formatCurrency(feeStructure.reduce((sum, fee) => sum + fee["2023-2024"], 0))}
                  </TableCell>
                  <TableCell className="text-right font-bold text-primary">
                    {formatCurrency(feeStructure.reduce((sum, fee) => sum + fee["2024-2025"], 0))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Actions */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="bg-gradient-to-r from-primary/5 to-blue-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-primary">Ready to make a payment?</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Pay your fees securely online with multiple payment options
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <CreditCard className="h-4 w-4 mr-2" />
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}