"use client";

import Link from "next/link";
import { strings } from "@/constants/strings";
import { worldMill } from "@react-jvectormap/world";
import { countries } from "../../constants/arrays";
import { COLORS, LINKS } from "@/constants";
import dynamic from "next/dynamic";

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
  {
    ssr: false,
  },
);

const DistributedTeam: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center px-12 text-center lg:px-48">
      <h3 className="text-2xl font-medium text-neutral-950">
        {strings.aboutUs.distributedTeamHeading}
      </h3>
      <span className="mt-4 text-lg text-neutral-500">
        {strings.aboutUs.distributedTeamSubheading}
      </span>
      <div className="my-16 h-[40rem] w-full">
        <VectorMap
          map={worldMill}
          backgroundColor="transparent"
          zoomStep={0}
          zoomOnScroll={false}
          panOnDrag={false}
          markers={countries}
          regionStyle={{
            initial: {
              fill: COLORS.netrual[500],
            },
          }}
          markerStyle={{
            initial: {
              fill: COLORS.primary[300],
              //@ts-ignore
              "stroke-width": 8,
              "stroke-opacity": 0.6,
              stroke: COLORS.primary[200],
              r: 10,
            },
            hover: {
              //@ts-ignore
              "stroke-width": 8,
              stroke: COLORS.primary[100],
            },
          }}
        />
      </div>
      <div className="flex w-full flex-col justify-between space-y-12 text-center lg:flex-row lg:space-y-0">
        <div className="flex flex-col">
          <span className="text-lg font-light text-secondaryWashed-900">
            {strings.aboutUs.team.support}
          </span>
          <span className="mt-2 text-md text-neutral-500">
            {strings.aboutUs.team.supportBody}
          </span>
          <Link
            href={`mailto:${LINKS.supportMail}`}
            className="mt-6 text-md font-medium text-secondaryWashed-800"
          >
            {LINKS.supportMail}
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-light text-secondaryWashed-900">
            {strings.aboutUs.team.sales}
          </span>
          <span className="mt-2 text-md text-neutral-500">
            {strings.aboutUs.team.salesBody}
          </span>
          <Link
            href={`mailto:${LINKS.salesMail}`}
            className="mt-6 text-md font-medium text-secondaryWashed-800"
          >
            {LINKS.salesMail}
          </Link>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-light text-secondaryWashed-900">
            {strings.aboutUs.team.phone}
          </span>
          <span className="mt-2 text-md text-neutral-500">
            {strings.aboutUs.team.phoneBody}
          </span>
          <Link
            href={`tel:${LINKS.phone}`}
            className="mt-6 text-md font-medium text-secondaryWashed-800"
          >
            {strings.contactPhone}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DistributedTeam;
