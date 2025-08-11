import {
  Grid,
  Calendar,
  Users,
  BarChart3,
  Settings,
  MessageSquare,
  User,
  LogOut 
} from "lucide-react";
import drScope from "../../assets/images/scope-logo.png";
import arrorDown from "../../assets/images/arrow-down.png";

export const Sidebar = () => {
  const menuItems = [
    { icon: Grid, label: "Dashboard", active: true },
    { icon: Calendar, label: "Appointment" },
    { icon: Users, label: "Patient" },
    { icon: BarChart3, label: "Report" },
    { icon: MessageSquare, label: "Complaints" },
    { icon: Settings, label: "Setting" },
  ];
  return (
    <div className="w-64 bg-white shadow-sm relative">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div>
            <img src={drScope} className="w-9 h-9" alt="" />
          </div>
          <span className="font-semibold text-sm text-gray-900">
            Open Health care
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  onClick={() => setSelectedMenuItem(item.label)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    item.active
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="px-4 pb-4">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center space-x-3 p-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="font-medium text-gray-900">Eleanor Pena</p>
            <p className="text-sm text-gray-500">Doctor</p>
          </div>
          <img src={arrorDown} alt="" />
        </div>
      </div>
    </div>
  );
};
