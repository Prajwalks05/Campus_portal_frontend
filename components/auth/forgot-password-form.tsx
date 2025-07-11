"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, User } from "lucide-react"
import Link from "next/link"

export function ForgotPasswordForm() {
  const [usn, setUsn] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccess(false)

    const usnPattern = /^[0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}$/
    if (!usn || !usnPattern.test(usn.toUpperCase())) {
      setError("Please enter a valid USN (e.g., 1BM23CS137)")
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      if (usn === "ERROR123") {
        setError("USN not found. Please check and try again.")
      } else {
        setSuccess(true)
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (value: string) => {
    setUsn(value)
    if (error) setError("")
    if (success) setSuccess(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="border-red-300 bg-red-100 dark:border-red-700 dark:bg-red-900/50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-800 dark:text-red-200">{error}</AlertDescription>
        </Alert>
      )}

      {success ? (
        <div className="text-center space-y-4">
          <CheckCircle className="mx-auto text-green-500 w-10 h-10" />
          <p className="text-gray-700">
            Reset instructions sent to email linked with <strong>{usn}</strong>
          </p>
          <Button className="w-full" variant="outline" onClick={() => { setSuccess(false); setUsn(""); }}>
            Send Again
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="usn" className="text-sm font-semibold text-white">
              USN <span className="text-red-300">*</span>
            </Label>
            <div className="relative group">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-300 group-focus-within:text-white transition-colors" />
              <Input
                id="usn"
                type="text"
                placeholder="Enter your USN (e.g., 1BM23CS137)"
                value={usn}
                onChange={(e) => handleChange(e.target.value.toUpperCase())}
                className="pl-10 h-12 border-blue-700 bg-blue-800/50 text-white placeholder:text-blue-100 focus:border-white focus:ring-white transition-all duration-200"
                required
                disabled={isLoading}
                maxLength={10}
              />
            </div>
            <p className="text-xs text-blue-200">
              Enter your University Seat Number to receive reset instructions
            </p>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Sending Reset Link..." : "Send Reset Instructions"}
          </Button>
        </>
      )}

      <div className="text-center pt-4 border-t border-blue-700">
        <p className="text-sm text-blue-200">
          Remembered your password?{" "}
          <Link href="/" className="text-white hover:text-blue-100 font-medium transition-colors">
            Back to Sign In
          </Link>
        </p>
      </div>

      <div className="text-center text-sm text-blue-200">
        Need help?{" "}
        <a href="mailto:portal@techverse.edu" className="text-white hover:text-blue-100 font-medium transition-colors">
          portal@techverse.edu
        </a>
      </div>
    </form>
  )
}
