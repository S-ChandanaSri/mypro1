"use client";
import SideSection from "../../components/roomView/sideSection";
import FilterSection from "../../components/roomView/filterSection";
import Footer from "../../components/roomView/footer";

export default function RoomViewPage() {
  return (
    <div className="flex flex-row mt-[92px] md:mt-[72px]">
      <FilterSection />
      <SideSection />
    </div>
  );
}
