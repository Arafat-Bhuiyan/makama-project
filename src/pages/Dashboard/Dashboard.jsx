import { useState } from "react";
import {
  Users,
  Bell,
  ChevronDown,
  User,
  Stethoscope,
  UserPlus,
} from "lucide-react";

import { Sidebar } from "./Sidebar";

export default function Dashboard() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const appointments = [
    {
      time: "08:30 am - 10:30 am",
      title: "Fahad Visit",
      doctor: "Dr. Carol D. Pollack-rundle",
    },
    {
      time: "08:30 am - 10:30 am",
      title: "Fahad Visit",
      doctor: "Dr. Carol D. Pollack-rundle",
    },
    {
      time: "08:30 am - 10:30 am",
      title: "Fahad Visit",
      doctor: "Dr. Carol D. Pollack-rundle",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
     <Sidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <Bell className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Stats Cards */}
            <div className="col-span-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* New Patients */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">New Patients</h3>
                    <UserPlus className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-4">125</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                {/* OPD Patients */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">OPD Patients</h3>
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-4">125</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                {/* Today's Operations */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">
                      Today's Operations
                    </h3>
                    <Stethoscope className="w-8 h-8 text-orange-500" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-4">125</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                {/* Visitors */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">Visitors</h3>
                    <User className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-4">125</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 gap-6">
                {/* Patient Visit Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Patient Visit
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Sort by</span>
                      <select className="text-sm border rounded px-2 py-1">
                        <option>Years</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                      <span>200</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>
                    {/* Chart area */}
                    <div className="ml-8 h-full relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0">
                        <div className="h-full flex flex-col justify-between">
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                        </div>
                      </div>
                      {/* Line chart */}
                      <svg className="w-full h-full" viewBox="0 0 400 150">
                        <path
                          d="M 20 120 Q 50 80 80 90 T 140 70 T 200 80 T 260 60 T 320 50 T 380 70"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M 20 120 Q 50 80 80 90 T 140 70 T 200 80 T 260 60 T 320 50 T 380 70 L 380 150 L 20 150 Z"
                          fill="url(#gradient1)"
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient
                            id="gradient1"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#3B82F6"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#3B82F6"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 mt-2">
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Income Chart */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Income
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Sort by</span>
                      <select className="text-sm border rounded px-2 py-1">
                        <option>years</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                      <span>200</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>
                    </div>
                    {/* Chart area */}
                    <div className="ml-8 h-full relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0">
                        <div className="h-full flex flex-col justify-between">
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                          <div className="border-t border-gray-100"></div>
                        </div>
                      </div>
                      {/* Line chart */}
                      <svg className="w-full h-full" viewBox="0 0 400 150">
                        <path
                          d="M 20 100 Q 50 60 80 70 T 140 50 T 200 60 T 260 40 T 320 30 T 380 50"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M 20 100 Q 50 60 80 70 T 140 50 T 200 60 T 260 40 T 320 30 T 380 50 L 380 150 L 20 150 Z"
                          fill="url(#gradient2)"
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient
                            id="gradient2"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#3B82F6"
                              stopOpacity="0.3"
                            />
                            <stop
                              offset="100%"
                              stopColor="#3B82F6"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500 mt-2">
                      {[
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ].map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-4 space-y-6">
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-100 text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                  Create Prescription
                </button>
                <button className="w-full bg-blue-100 text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                  Book Seat
                </button>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">
                    Upcoming Appointment
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded">
                      Today
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <p className="text-blue-500 font-medium mb-4">July 30, 2022</p>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">
                          {appointment.time}
                        </p>
                        <p className="font-medium text-gray-900">
                          {appointment.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {appointment.doctor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Feedback */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-4">
                  Patient Feedback
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-32 h-32">
                    {/* Donut Chart */}
                    <svg
                      className="w-32 h-32 transform -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="45"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="45"
                        stroke="#3B82F6"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray="180 100"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="45"
                        stroke="#F97316"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray="80 200"
                        strokeDashoffset="180"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="45"
                        stroke="#10B981"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray="20 260"
                        strokeDashoffset="100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs text-gray-500">Total</span>
                      <span className="text-lg font-bold text-gray-900">
                        45,251
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Excellent</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Good</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Poor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
