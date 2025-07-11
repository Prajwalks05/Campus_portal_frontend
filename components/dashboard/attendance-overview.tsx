"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const attendanceData = [
  {
    id: 1,
    course: "Cryptography",
    courseCode: "23CS4ESCRP",
    faculty: "Syed Akram",
    totalClasses: 45,
    attendedClasses: 42,
    percentage: 93.3,
    status: "Good",
    lastAttended: "2024-01-15",
    requiredClasses: 0,
  },
  {
    id: 2,
    course: "Theoretical Foundations Of Computations",
    courseCode: "23CS4PCTFC",
    faculty: "Sowmya T",
    totalClasses: 48,
    attendedClasses: 40,
    percentage: 83.3,
    status: "Average",
    lastAttended: "2024-01-14",
    requiredClasses: 2,
  },
  {
    id: 3,
    course: "Software Engineering",
    courseCode: "23CS4PCSED",
    faculty: "Rajeshwari Madli",
    totalClasses: 42,
    attendedClasses: 38,
    percentage: 90.5,
    status: "Good",
    lastAttended: "2024-01-15",
    requiredClasses: 0,
  },
  {
    id: 4,
    course: "Operating Systems",
    courseCode: "23CS4PCOPS",
    faculty: "Radhika A D",
    totalClasses: 40,
    attendedClasses: 28,
    percentage: 70.0,
    status: "Critical",
    lastAttended: "2024-01-10",
    requiredClasses: 8,
  },
  {
    id: 5,
    course: "Analysis And Design Of Algorithms",
    courseCode: "23CS4PCADA",
    faculty: "Sarala D V",
    totalClasses: 38,
    attendedClasses: 35,
    percentage: 92.1,
    status: "Good",
    lastAttended: "2024-01-15",
    requiredClasses: 0,
  },
]

const weeklyAttendance = [
  { day: "Mon", date: "Jan 15", status: "present", subjects: ["Cryptography", "Software Eng"] },
  { day: "Tue", date: "Jan 16", status: "present", subjects: ["Operating Systems", "Algorithms"] },
  { day: "Wed", date: "Jan 17", status: "absent", subjects: ["Theory of Computation"] },
  { day: "Thu", date: "Jan 18", status: "present", subjects: ["Cryptography", "Software Eng"] },
  { day: "Fri", date: "Jan 19", status: "present", subjects: ["Operating Systems"] },
]

export function AttendanceOverview() {
  const [selectedSemester, setSelectedSemester] = useState("2024-25 Even")

  const overallAttendance = attendanceData.reduce(
    (acc, curr) => {
      acc.total += curr.totalClasses
      acc.attended += curr.attendedClasses
      return acc
    },
    { total: 0, attended: 0 },
  )

  const overallPercentage = (overallAttendance.attended / overallAttendance.total) * 100

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Good":
        return "bg-green-100 text-green-800"
      case "Average":
        return "bg-yellow-100 text-yellow-800"
      case "Critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 85) return "bg-green-500"
    if (percentage >= 75) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Overall Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600 mb-2">{overallPercentage.toFixed(1)}%</div>
            <Progress value={overallPercentage} className="mb-2" />
            <div className="text-sm text-gray-600">
              {overallAttendance.attended}/{overallAttendance.total} classes attended
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
              Critical Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600 mb-2">1</div>
            <div className="text-sm text-gray-600">Subjects below 75% attendance</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600 mb-2">4/5</div>
            <div className="text-sm text-gray-600">Days attended this week</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 mr-2 text-purple-600" />
              Classes Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm text-gray-600">Scheduled for today</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Overview */}
      <Card>
        <CardHeader>
          <CardTitle>This Week&apos;s Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {weeklyAttendance.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                <div className="text-xs text-gray-500 mb-3">{day.date}</div>
                <div
                  className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                    day.status === "present" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  {day.status === "present" ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <AlertTriangle className="h-6 w-6" />
                  )}
                </div>
                <div className="text-xs text-gray-600">{day.subjects.length} classes</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Subject-wise Attendance</CardTitle>
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-25 Even">2024-25 Even</SelectItem>
              <SelectItem value="2024-25 Odd">2024-25 Odd</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">Total Classes</TableHead>
                  <TableHead className="text-center">Attended</TableHead>
                  <TableHead className="text-center">Percentage</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Required Classes</TableHead>
                  <TableHead className="text-center">Last Attended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((subject) => (
                  <TableRow key={subject.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <div className="font-medium">{subject.course}</div>
                        <div className="text-sm text-gray-500">({subject.courseCode})</div>
                        <div className="text-sm text-gray-500">{subject.faculty}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-medium">{subject.totalClasses}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="font-medium">{subject.attendedClasses}</span>
                        <div className="w-16">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(subject.percentage)}`}
                            style={{ width: `${subject.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`font-semibold ${
                          subject.percentage >= 85
                            ? "text-green-600"
                            : subject.percentage >= 75
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {subject.percentage.toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={getStatusColor(subject.status)}>{subject.status}</Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      {subject.requiredClasses > 0 ? (
                        <span className="text-red-600 font-medium">{subject.requiredClasses} more</span>
                      ) : (
                        <span className="text-green-600">✓ Met</span>
                      )}
                    </TableCell>
                    <TableCell className="text-center text-sm text-gray-600">{subject.lastAttended}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-red-600 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Attendance Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800">Operating Systems - Critical</h4>
                  <p className="text-sm text-red-700 mt-1">
                    Your attendance is at 70%. You need to attend 8 more classes to reach the minimum 75% requirement.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Theoretical Foundations - Watch</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Currently at 83.3%. Attend 2 more classes to maintain good standing.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-green-600 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Excellent Attendance</h4>
                  <p className="text-sm text-green-700 mt-1">
                    You have maintained above 90% attendance in 4 out of 5 subjects. Keep up the great work!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800">Weekly Consistency</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    You&apos;ve attended 80% of classes this week. Try to maintain regular attendance.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
