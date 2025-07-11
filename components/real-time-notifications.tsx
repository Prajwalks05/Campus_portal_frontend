"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, X, CheckCircle, CreditCard, GraduationCap } from "lucide-react"
import { toast } from "sonner"

interface Notification {
  id: number
  message: string
  type: "academic" | "attendance" | "payment" | "general"
  time: string
  read: boolean
}

export function RealTimeNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      message: "CIE-3 marks updated for Software Engineering",
      type: "academic",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      message: "Attendance below 75% in Operating Systems",
      type: "attendance",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      message: "Fee payment due in 3 days",
      type: "payment",
      time: "2 hours ago",
      read: false,
    },
  ])

  const [isOpen, setIsOpen] = useState(false)

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotifications = [
        {
          message: "New assignment posted for Data Structures",
          type: "academic" as const,
        },
        {
          message: "Attendance marked for today's classes",
          type: "attendance" as const,
        },
        {
          message: "Library book due date reminder",
          type: "general" as const,
        },
        {
          message: "Semester fee payment confirmation received",
          type: "payment" as const,
        },
      ]

      if (Math.random() > 0.7) {
        const randomNotification = randomNotifications[Math.floor(Math.random() * randomNotifications.length)]
        const newNotification: Notification = {
          id: Date.now(),
          message: randomNotification.message,
          type: randomNotification.type,
          time: "Just now",
          read: false,
        }

        setNotifications((prev) => [newNotification, ...prev.slice(0, 9)])

        // Show toast notification
        toast(randomNotification.message, {
          description: "Click to view details",
          action: {
            label: "View",
            onClick: () => setIsOpen(true),
          },
        })
      }
    }, 15000) // Check every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <GraduationCap className="h-4 w-4 text-blue-600" />
      case "attendance":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "payment":
        return <CreditCard className="h-4 w-4 text-orange-600" />
      default:
        return <Bell className="h-4 w-4 text-gray-600" />
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "attendance":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "payment":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  if (!isOpen) {
    return (
      <Button variant="ghost" size="icon" className="relative" onClick={() => setIsOpen(true)}>
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 animate-pulse">
            {unreadCount}
          </Badge>
        )}
      </Button>
    )
  }

  return (
    <Card className="fixed top-20 right-6 w-96 max-h-96 overflow-hidden shadow-2xl z-[9999] border backdrop-blur-xl bg-white/98 dark:bg-gray-900/98">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg flex items-center">
          <Bell className="h-5 w-5 mr-2" />
          Notifications
          {unreadCount > 0 && <Badge className="ml-2 bg-red-500 text-white">{unreadCount}</Badge>}
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400">No notifications</div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
                  !notification.read ? "bg-blue-50 dark:bg-blue-900/20" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{notification.message}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                      <Badge variant="secondary" className={`text-xs ${getNotificationColor(notification.type)}`}>
                        {notification.type}
                      </Badge>
                    </div>
                  </div>
                  {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
