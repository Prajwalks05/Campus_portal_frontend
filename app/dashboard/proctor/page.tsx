"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Calendar, Briefcase, Users, GraduationCap } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

export default function ProctorPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Proctor Diary</h1>
            <p className="text-muted-foreground">
              Personal and family information
            </p>
          </div>
        </div>
      </motion.div>

      {/* Student Profile Header */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20">
          <CardHeader>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={`https://api.dicebear.com/7.x/micah/svg?seed=${currentStudent.name}`}
                  />
                  <AvatarFallback>
                    {currentStudent.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2">
                  <Badge className="bg-green-500 text-white border-white text-xs px-2 py-1">
                    VB
                  </Badge>
                </div>
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {currentStudent.name.toUpperCase()}
                </CardTitle>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-2" />
                    Student ID: {currentStudent.usn}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    {currentStudent.department}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="text-lg px-4 py-2 mb-2">
                  {currentStudent.proctorDesignation}
                </Badge>
                <p className="text-sm font-semibold text-primary">
                  {currentStudent.proctorName}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Contact Information */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card variant="elevated" className="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-blue-600 mr-3" />
                  <span className="text-sm font-medium">Phone</span>
                </div>
                <span className="font-semibold text-blue-800">{currentStudent.phone}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-green-600 mr-3" />
                  <span className="text-sm font-medium">Email</span>
                </div>
                <span className="font-semibold text-green-800">{currentStudent.email}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50/50 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-purple-600 mr-3" />
                  <span className="text-sm font-medium">Date of Birth</span>
                </div>
                <span className="font-semibold text-purple-800">{currentStudent.dateOfBirth}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-sm font-medium">Blood Group</span>
                </div>
                <Badge variant="outline" className="font-semibold text-red-800 border-red-200">
                  {currentStudent.bloodGroup}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                Academic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                <span className="text-sm font-medium">Department</span>
                <span className="font-semibold text-blue-800">{currentStudent.department}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50/50 rounded-lg">
                <span className="text-sm font-medium">Current Semester</span>
                <Badge variant="success" className="font-semibold">
                  {currentStudent.semester}th Semester
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50/50 rounded-lg">
                <span className="text-sm font-medium">Mode of Admission</span>
                <span className="font-semibold text-purple-800 text-xs">
                  {currentStudent.modeOfAdmission}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50/50 rounded-lg">
                <span className="text-sm font-medium">Accommodation</span>
                <span className="font-semibold text-orange-800">{currentStudent.accommodation}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Address Information */}
      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card variant="elevated" className="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                Permanent Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50/50 rounded-lg border border-green-200/50">
                <p className="text-sm font-medium text-green-800 leading-relaxed">
                  {currentStudent.permanentAddress}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated" className="glass">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Present Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-200/50">
                <p className="text-sm font-medium text-blue-800 leading-relaxed">
                  {currentStudent.presentAddress}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Family Information */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" className="glass">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-orange-600" />
              Family Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Father Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">Father / Guardian</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Name:</span>
                    <span className="font-semibold text-blue-800">{currentStudent.fatherName}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Occupation:</span>
                    <span className="font-semibold text-blue-800">{currentStudent.fatherOccupation}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Qualification:</span>
                    <span className="font-semibold text-blue-800">{currentStudent.fatherQualification}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Mobile:</span>
                    <span className="font-semibold text-blue-800">{currentStudent.fatherMobile}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Email:</span>
                    <span className="font-semibold text-blue-800 text-xs">{currentStudent.fatherEmail}</span>
                  </div>
                </div>
              </div>

              {/* Mother Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-pink-800">Mother</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-pink-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Name:</span>
                    <span className="font-semibold text-pink-800">{currentStudent.motherName}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Occupation:</span>
                    <span className="font-semibold text-pink-800">{currentStudent.motherOccupation}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Qualification:</span>
                    <span className="font-semibold text-pink-800">{currentStudent.motherQualification}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Mobile:</span>
                    <span className="font-semibold text-pink-800">{currentStudent.motherMobile}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50/30 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">Email:</span>
                    <span className="font-semibold text-pink-800 text-xs">{currentStudent.motherEmail}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}