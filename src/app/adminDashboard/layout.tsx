import Sidebar from "../../components/adminDashboard/sidebar";
import Header from "../../components/adminDashboard/header";
export default function AdminDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="lg:flex lg:flex-row">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
