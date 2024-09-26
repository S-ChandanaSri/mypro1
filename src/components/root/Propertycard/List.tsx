import React from "react";
import Image from "next/image";
import { propertyinfo } from "@/constants/types";
import { roomViewImages, roomViewSvgIcons } from "@/constants/images";
import Button from "@/components/common/Button";
import Card from "./Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const list = [1, 2, 3, 4, 5];

interface InfoCardsProps {
  title: string;
  subtitle: string;
  cards: propertyinfo[];
  option: boolean;
}

const List: React.FC<InfoCardsProps> = ({ cards = [], option }) => {
  return (
    <>
      {option ? (
        <div className="flex w-full flex-col gap-8">
          {list?.map((items, index) => (
            <Card
              key={index}
              title="Super Collection Avenue near Gandhi maidan"
              location="Gandhi maidan,patna&nbsp;&nbsp;"
              images={[
                roomViewImages.roomViewExterior,
                roomViewImages.roomViewinterior1,
                roomViewImages.roomViewinterior2,
                roomViewImages.roomViewinterior3,
              ]}
              imageStyles={[
                "lg:w-[17.4rem] lg:h-[16.6rem] ",
                "lg:w-[9.3rem] lg:h-[5.3rem]",
                "lg:w-[9.3rem] lg:h-[5.3rem]",
                "lg:w-[9.3rem] lg:h-[5.3rem]",
              ]}
              locate={roomViewSvgIcons.roomLocation}
              km={"3.3Km"}
              star={roomViewSvgIcons.roomStart}
              rating={"112 ratings"}
              rate={"Good"}
              ratepoint={"3.7"}
              icons={[
                roomViewSvgIcons.roomWifi,
                roomViewSvgIcons.roomTv,
                roomViewSvgIcons.roomCloud,
              ]}
              sublabels={["Free wifi", "Tv", "Ac", "+ 4 more"]}
              leftButtonLabel={"View Details"}
              buttonLabel="Book Now"
              buttonVariant="card"
              price="Rs 10,000"
              multiImage={true}
              detailsstyle={
                "w-full lg:h-38  justify-between  lg:relative lg:right-[6rem] bottom-9 flex flex-col gap-1 "
              }
              titlestyle={"text-lg"}
              locationstyle={"flex text-xs"}
              amenitystyle={"text-sm flex flex-row gap-5  "}
              placestyle={"flex text-xs relative bottom-9 "}
              buttonstyle={"flex flex-row gap-2 "}
              butonstyle={
                "w-[15rem] h-10 border-[1px] border-neutral-950 rounded-md"
              }
              pricestyle={
                "text-md flex flex-row justify-between items-center mt-9 "
              }
              wrapstyle={"absolute top-14"}
              ratepointstyle={
                "flex gap-1 bg-[#3D52A0] text-neutral-50 p-1 items-center text-sm"
              }
            />
          ))}
        </div>
      ) : (
        <>
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <Card
                image={card.icon}
                location={card.label}
                icons={[card.icon2, card.icon3, card.icon4]}
                sublabels={[card.sublabel, card.sublabel, card.sublabel]}
                buttonLabel={card.sublabel1}
                buttonVariant="card"
                amenitystyle={"flex justify-between"}
                buttonstyle={
                  "pr-[140px] pb-[1rem] relative left-[1rem] flex justify-end"
                }
              />
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

export default List;
