"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Heart, 
  Home, 
  Edit, 
  Save, 
  X,
  School,
  Users,
  FileText,
  ArrowLeft
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentStudent } from "@/data/student";
import { toast } from "sonner";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(currentStudent);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Profile updated successfully!", {
      description: "Your changes have been saved.",
      duration: 3000,
    });
    
    setIsEditing(false);
    setIsSaving(false);
  };

  const handleCancel = () => {
    setFormData(currentStudent); // Reset to original data
    setIsEditing(false);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Profile
              </h1>
              <p className="text-muted-foreground">Manage your personal information</p>
            </div>
          </div>
          
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button 
                onClick={handleSave} 
                disabled={isSaving}
                className="gap-2"
              >
                <Save className="h-4 w-4" />
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleCancel}
                disabled={isSaving}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Profile Overview Card */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="backdrop-blur-xl bg-white/25 border-white/40 shadow-xl">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <Avatar className="w-24 h-24 mx-auto lg:mx-0">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`} />
                <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">
                  {formData.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-center lg:text-left flex-1">
                <h2 className="text-3xl font-bold">{formData.name}</h2>
                <p className="text-lg text-muted-foreground">{formData.usn}</p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {formData.department}
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Semester {formData.semester}
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {formData.bloodGroup}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Personal Information Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Personal Details */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                      {formData.name}
                    </p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                      <Mail className="h-4 w-4" />
                      {formData.email}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                      <Phone className="h-4 w-4" />
                      {formData.phone}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  {isEditing ? (
                    <Input
                      id="dob"
                      value={formData.dateOfBirth}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("dateOfBirth", e.target.value)}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                      <Calendar className="h-4 w-4" />
                      {formData.dateOfBirth}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  {isEditing ? (
                    <Input
                      id="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("bloodGroup", e.target.value)}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  ) : (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                      <Heart className="h-4 w-4" />
                      {formData.bloodGroup}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Academic Information */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5" />
                Academic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label>USN</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.usn}
                  </div>
                </div>
                
                <div>
                  <Label>Department</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.department}
                  </div>
                </div>

                <div>
                  <Label>Current Semester</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.semester}th Semester
                  </div>
                </div>

                <div>
                  <Label>Mode of Admission</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.modeOfAdmission}
                  </div>
                </div>

                <div>
                  <Label>Accommodation</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.accommodation || "Day Scholar"}
                  </div>
                </div>

                <div>
                  <Label>Proctor</Label>
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    <div className="font-medium">{formData.proctorName}</div>
                    <div className="text-xs">{formData.proctorDesignation}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Address Information */}
      <motion.div variants={itemVariants}>
        <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <Label htmlFor="permanentAddress">Permanent Address</Label>
                {isEditing ? (
                  <Textarea
                    id="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("permanentAddress", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm min-h-[100px]"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm min-h-[100px]">
                    {formData.permanentAddress}
                  </div>
                )}
              </div>
              
              <div>
                <Label htmlFor="presentAddress">Present Address</Label>
                {isEditing ? (
                  <Textarea
                    id="presentAddress"
                    value={formData.presentAddress}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("presentAddress", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm min-h-[100px]"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm min-h-[100px]">
                    {formData.presentAddress}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Family Information */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Father's Information */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Father's Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fatherName">Name</Label>
                {isEditing ? (
                  <Input
                    id="fatherName"
                    value={formData.fatherName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fatherName", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.fatherName}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="fatherOccupation">Occupation</Label>
                {isEditing ? (
                  <Input
                    id="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fatherOccupation", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.fatherOccupation}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="fatherQualification">Qualification</Label>
                {isEditing ? (
                  <Input
                    id="fatherQualification"
                    value={formData.fatherQualification}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fatherQualification", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.fatherQualification}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="fatherMobile">Mobile</Label>
                {isEditing ? (
                  <Input
                    id="fatherMobile"
                    value={formData.fatherMobile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fatherMobile", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.fatherMobile}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="fatherEmail">Email</Label>
                {isEditing ? (
                  <Input
                    id="fatherEmail"
                    type="email"
                    value={formData.fatherEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fatherEmail", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.fatherEmail}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mother's Information */}
        <motion.div variants={itemVariants}>
          <Card variant="glass" className="backdrop-blur-xl bg-white/20 border-white/40 shadow-xl h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Mother's Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="motherName">Name</Label>
                {isEditing ? (
                  <Input
                    id="motherName"
                    value={formData.motherName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("motherName", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.motherName}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="motherOccupation">Occupation</Label>
                {isEditing ? (
                  <Input
                    id="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("motherOccupation", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.motherOccupation}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="motherQualification">Qualification</Label>
                {isEditing ? (
                  <Input
                    id="motherQualification"
                    value={formData.motherQualification}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("motherQualification", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.motherQualification}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="motherMobile">Mobile</Label>
                {isEditing ? (
                  <Input
                    id="motherMobile"
                    value={formData.motherMobile}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("motherMobile", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.motherMobile}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="motherEmail">Email</Label>
                {isEditing ? (
                  <Input
                    id="motherEmail"
                    type="email"
                    value={formData.motherEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("motherEmail", e.target.value)}
                    className="bg-white/50 backdrop-blur-sm"
                  />
                ) : (
                  <div className="text-sm text-muted-foreground bg-white/30 p-3 rounded-lg backdrop-blur-sm">
                    {formData.motherEmail}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}