import SideSection from "../../components/roomView/sideSection";
import FilterSection from "../../components/roomView/filterSection";

export default function RoomViewPage() {
  return (
    <div className="flex flex-row pt-[92px] md:pt-[72px]">
      <FilterSection />
      <SideSection />
    </div>
  );
}
