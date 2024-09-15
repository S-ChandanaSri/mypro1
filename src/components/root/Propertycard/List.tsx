import React from 'react';
import Image from 'next/image';
import { propertyinfo } from '@/constants/types';
import { roomViewImages, roomViewSvgIcons } from "@/constants/images";
import Button from '@/components/common/Button';
import Card from './Card'; 

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
        <div className="flex flex-col gap-8">
          {list?.map((items, index) => (
            
            <div className="   flex lg:flex-row flex-col gap-2 " key={index}>
    <div className=" gap-1 flex lg:flex-row flex-col">
      <div className="relative lg:w-[17.4rem] lg:h-[16.6rem] w-[27.5rem] min-h-[13rem] rounded-sm">
        <Image
          src={roomViewImages.roomViewExterior}
          alt="main image"
          fill={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="  flex lg:flex-col flex-row gap-1">
        <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
          <Image
            src={roomViewImages.roomViewinterior1}
            alt="main image"
            fill={true}
            className=" object-cover"
          />
        </div>
        <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
          <Image
            src={roomViewImages.roomViewinterior2}
            alt="main image"
            fill={true}
            className=" object-cover"
          />
        </div>
        <div className="relative lg:w-[9.3rem] lg:h-[5.3rem] w-36 h-20 rounded-sm">
          <Image
            src={roomViewImages.roomViewinterior3}
            alt="main image"
            fill={true}
            className=" object-cover"
          />
        </div>
      </div>
    </div>

    <div className="w-full lg:h-64  justify-between  lg:ml-4 flex flex-col gap-6">
      <div className="  flex flex-col gap-1">
        <p className="text-lg">
          Super Collection Avenue near Gandhi maidan
        </p>
        <div className="flex text-xs">
          Gandhi maidan,patna&nbsp;&nbsp;
          <div className="relative w-3  h-4">
            <Image
              src={roomViewSvgIcons.roomLocation}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          3.3 km
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex gap-1  bg-[#3D52A0] text-neutral-50 p-1 items-center text-sm">
            3.7{" "}
            <div className="relative w-3  h-3">
              <Image
                src={roomViewSvgIcons.roomStart}
                alt="right arrow"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-xs">
            112 ratings <span>Good</span>
          </p>
        </div>
      </div>

      <div className=" text-sm   flex flex-row gap-5">
        <div className="flex gap-2">
          <div className="relative w-6  h-4">
            <Image
              src={roomViewSvgIcons.roomWifi}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          Free wifi
        </div>
        <div className="flex gap-2">
          <div className="relative w-7  h-4">
            <Image
              src={roomViewSvgIcons.roomTv}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>
          Tv
        </div>
        <div className="flex gap-2">
          <div className="relative w-5  h-5">
            <Image
              src={roomViewSvgIcons.roomCloud}
              alt="right arrow"
              fill={true}
              className="object-cover"
            />
          </div>{" "}
          Ac
        </div>
        <div>+ 4 more</div>
      </div>

      <div className=" text-md   flex flex-row justify-between items-center">
        <div>Rs 10,000</div>

        <div className="flex flex-row gap-2 ">
          <button className="w-32 h-10 border-[1px] border-neutral-950 rounded-md">
            View Details
          </button>
          <Button variant="card">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  </div>
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
              />
            </React.Fragment>
          ))}
        </>
        
      )}
    </>
  );
};

export default List;

{/*<React.Fragment key={index}>
              <Card
                title="Super Collection Avenue near Gandhi Maidan"
                content="Gandhi maidan, Patna"
                image={roomViewImages.roomViewExterior} 
                location={
                  <span>
                    Gandhi maidan, Patna&nbsp;&nbsp;
                    <div className="relative w-3 h-4 inline-block">
                      <Image
                        src={roomViewSvgIcons.roomLocation}
                        alt="Location icon"
                        fill={true}
                        className="object-cover"
                      />
                    </div>
                    3.3 km
                  </span>
                }
                icons={[
                  roomViewSvgIcons.roomWifi,
                  roomViewSvgIcons.roomTv,
                  roomViewSvgIcons.roomCloud,
                ]}
                sublabels={["Free Wifi", "TV", "AC"]}
                buttonLabel="Book Now"
                buttonVariant="card"
              />
            </React.Fragment>
            

            //card==>

            {cards.map((card,index)=>(
    
            
                <div key={index} className="h-[341px] w-[270px] rounded-[13px] pl-2 pt-4 xxs:ml-[4rem] xxs:w-[300px] xs:ml-[8rem] xs:w-[306px] sm:relative sm:right-[5rem] lg:w-[250px] xl:w-[306px]">
                      <Image
                        width={306}
                        height={228}
                        alt=""
                        src={card.icon}
                        className="h-[14rem] w-[20rem] rounded-[13px]"
                      />
                      <div className="h-[6rem] w-[18rem] pt-2">
                        <div className="h-[4rem] w-[18rem] rounded-[13px]">
                          <div className="flex h-[26.37px] w-[18rem] items-center rounded-[13px]">
                            <Image
                              width={26.37}
                              height={26.37}
                              alt=""
                              src={card.icon1}
                              className="h-[26.37px] w-[26.37px] rounded-[13px]"
                            />
                            <p className="font-inter h-[18px] w-[256px] text-[13.19px] font-semibold leading-[17.8px] text-[#3D52A0]">
                              {card.label}
                            </p>
                          </div>
                          <div className="flex h-[20.88px] w-[280.11px] justify-between rounded-[13px] pl-2">
                            <div className="flex h-[18.68px] w-[71.47px] rounded-[13px]">
                              <Image
                                width={18.68}
                                height={18.68}
                                alt=""
                                src={card.icon2}
                                className=" rounded-[13px]"
                              />
                              <p className="font-inter h-[1rem] w-[3rem] text-[12.09px] font-[600] leading-[16.32px]">
                                {card.sublabel}
                              </p>
                            </div>
                            <div className="flex h-[17.58px] w-[71.37px] rounded-[13px]">
                              <Image
                                width={17.58}
                                height={17.58}
                                alt=""
                                src={card.icon3}
                                className=" rounded-[13px]"
                              />
                              <p className="font-inter h-[1rem] w-[3rem] text-[12.09px] font-[600] leading-[16.32px]">
                              {card.sublabel}
                              </p>
                            </div>
                            <div className="flex h-[16.48px] w-[69.27px] rounded-[13px]">
                              <Image
                                width={16.48}
                                height={16.48}
                                alt=""
                                src={card.icon4}
                                className=" rounded-[13px]"
                              />
                              <p className="font-inter h-[1rem] w-[44px] text-[12.09px] font-[600] leading-[16.32px]">
                              {card.sublabel}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="pr-[170px]">
                          <Button variant="card">
                          {card.sublabel1}
                          </Button>
                        </div>
                      </div>
                      
                    </div>
                    ))}
            
            
            */}

          