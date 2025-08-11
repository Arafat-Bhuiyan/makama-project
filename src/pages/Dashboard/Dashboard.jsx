import { Bell } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { StartCards } from "./StartCards";
import { RightSidebar } from "./RightSidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-l px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <Bell className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 border-x border-t">
          <div className="grid grid-cols-12 gap-6">
            {/* Stats Cards */}
            <StartCards />
            {/* Right Sidebar */}
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
