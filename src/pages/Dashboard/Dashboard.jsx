import { Bell } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { StartCards } from "./StartCards";
import { RightSidebar } from "./RightSidebar";
import { useState } from "react";
import Prescription from "./Prescription";
import SeatBookingForm from "./SeatBookingForm";
import AppointmentTable from "./Appointment/Appointment";
import PatientTable from "./Patient/Patient";
import { Report } from "./Report/Report";
import Complaints from "./Complaints/Complaints";
import Setting from "./Setting.jsx/Setting";
import Profile from "./Profile/Profile";

export default function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState("Dashboard"); // New state to track the active component

  const handleComponentChange = (component) => {
    setCurrentComponent(component); // Change the active component
  };
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <Sidebar
        currentComponent={currentComponent}
        onMenuClick={handleComponentChange}
      />
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
          {/* Conditionally render the component based on the state */}
          {currentComponent === "Dashboard" && (
            <div className="grid grid-cols-12 gap-6">
              {/* Status Cards */}
              <StartCards />
              {/* Right Sidebar */}
              <RightSidebar handleComponentChange={handleComponentChange} />
            </div>
          )}
          {currentComponent === "Appointment" && <AppointmentTable />}
          {currentComponent === "Patient" && <PatientTable />}
          {currentComponent === "Report" && <Report />}
          {currentComponent === "Complaints" && <Complaints />}
          {currentComponent === "Setting" && <Setting />}
          {currentComponent === "Prescription" && (
            <Prescription handleComponentChange={handleComponentChange} />
          )}
          {currentComponent === "BookSeat" && <SeatBookingForm />}
           {currentComponent === "Profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}
