"use client";
import styles from "./roomView.module.css";

import SideSection from "../components/sideSection";
// import SideSection from "@/components/side-section";
import FilterSection from "../components/filterSection";

import Image from "next/image";
import Footer from "../components/footer";

export default function RoomViewPage() {
  return (
    <>
      <div className="flex flex-row">
        <FilterSection />
        <SideSection />
      </div>

      <Footer />
    </>
  );
}
