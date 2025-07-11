"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.newPassword.length < 8) {
      toast.error("New password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    // Simulate password change
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Password changed successfully!", {
      description: "Your password has been updated securely.",
      duration: 3000,
    });

    // Reset form
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setIsLoading(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto space-y-6"
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          className="rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Change Password</h1>
          <p className="text-muted-foreground">Update your account password</p>
        </div>
      </div>

      {/* Change Password Form */}
      <Card variant="glass" className="backdrop-blur-md bg-white/20 border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="h-5 w-5" />
            <span>Security Settings</span>
          </CardTitle>
          <CardDescription>
            Enter your current password and choose a new secure password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Password */}
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password *</Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords.current ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("currentPassword", e.target.value)}
                  placeholder="Enter your current password"
                  className="pr-10 bg-white/50 backdrop-blur-sm"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => togglePasswordVisibility("current")}
                >
                  {showPasswords.current ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password *</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("newPassword", e.target.value)}
                  placeholder="Enter your new password"
                  className="pr-10 bg-white/50 backdrop-blur-sm"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPasswords.new ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters long
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password *</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("confirmPassword", e.target.value)}
                  placeholder="Confirm your new password"
                  className="pr-10 bg-white/50 backdrop-blur-sm"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Password Requirements:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>At least 8 characters long</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Include uppercase and lowercase letters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Include at least one number</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span>Include at least one special character</span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <Button
                type="submit"
                className="flex-1"
                disabled={isLoading}
              >
                {isLoading ? "Updating Password..." : "Update Password"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}