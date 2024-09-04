import Link from "next/link";
import Dashboard from "./dashboard/page";

export default function AdminDashboard() {
  const menuItems = ["Dashboard", "Rooms", "B"];
  return <Dashboard />;
}
