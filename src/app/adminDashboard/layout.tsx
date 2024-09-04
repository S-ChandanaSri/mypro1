import Sidebar from "./components/sidebar";
import Header from "./components/header";
export default function AdminDashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      <div className="lg:flex lg:flex-row lg:w-[1440px] ">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
