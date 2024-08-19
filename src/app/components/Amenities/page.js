'use client'

import React, { useState ,useEffect} from 'react';
import Image from 'next/image';

import wifi from '../../_assets/images/wifi.png'
import washer from '../../_assets/images/washer.png';
import park from '../../_assets/images/park.png';
import free from '../../_assets/images/free.png';
import kitchen from '../../_assets/images/kitchen.png';
import workplace from '../../_assets/images/workplace.png';
import tv from '../../_assets/images/tv.png';
import ac from '../../_assets/images/ac.png';
import pool from '../../_assets/images/pool.png';
import patio from '../../_assets/images/patio.png';
import tub from '../../_assets/images/tub.png';
import piano from '../../_assets/images/piano.png';
import table from '../../_assets/images/table.png';
import exercise from '../../_assets/images/exercise.png';
import beach from '../../_assets/images/beach.png';
import indoor from '../../_assets/images/indoor.png';
import outdoor from '../../_assets/images/outdoor.png';
import { useRouter } from 'next/navigation';

export default function Amenities({ listingid }) {
  const [selectedoption, setSelectedOption] = useState([]);
  const router = useRouter();

  const options = [
    { label: "WiFi", img: wifi },
    { label: "TV", img: tv },
    { label: "Kitchen", img: kitchen },
    { label: "Washer", img: washer },
    { label: "Free Parking", img: free },
    { label: "Paid parking", img: park },
    { label: "Air Conditioning", img: ac },
    { label: "Workplace", img: workplace }
  ];

  const options1 = [
    { label: "Pool", img: pool },
    { label: "Patio", img: patio },
    { label: "Hot tub", img: tub },
    { label: "Piano", img: piano },
    { label: "Pool table", img: table },
    { label: "Exercise equipment", img: exercise },
    { label: "Beach access", img: beach },
    { label: "Indoor fireplace", img: indoor },
    { label: "Outdoor dining area", img: outdoor },
  ];

  const options3 = [
    { label: "Fire kit", img: wifi },
    { label: "Smoke alarm", img: tv },
    { label: "Fire extinguisher", img: kitchen },
    { label: "Carbon monoxide alarm", img: washer }
  ];

  const handleClick = (option) => {
    if (selectedoption.includes(option.label)) {
      setSelectedOption(selectedoption.filter((item) => item !== option.label));
    } else {
      setSelectedOption([...selectedoption, option.label]);
    }
  };

  const handleClick1 = (option1) => {
    if (selectedoption.includes(option1.label)) {
      setSelectedOption(selectedoption.filter((item) => item !== option1.label));
    } else {
      setSelectedOption([...selectedoption, option1.label]);
    }
  };

  const handleClick3 = (option3) => {
    if (selectedoption.includes(option3.label)) {
      setSelectedOption(selectedoption.filter((item) => item !== option3.label));
    } else {
      setSelectedOption([...selectedoption, option3.label]);
    }
  };

  fetch('http://localhost:3001/amenities', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ selectedoption,id:listingid }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response.text().then(text => {
        throw new Error(text);
      });
    })
    .then((data) => {
      console.log("Response data:", data);
      console.log("success");
     
      console.log("success",data.id);

    })
    .catch((err) => console.error("Error:", err));

  return (
    <>
      <div className=' h-[1770px]  '>
        <div className='flex flex-col relative  top-[140px] rounded-[15px]'>
          <div className='w-[688px] relative left-[412px] top-[-70px]'>
            <p className='w-[896px] text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000]'>
              Tell the guest what your place has to offer
            </p>
            <p className='w-[688px] text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000] pt-3'>
              You can add more amenities after you publish your listings
            </p>
          </div>

          <div className='grid grid-cols-3 gap-5 mx-auto relative left-[421px] '>
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleClick(option)}
                className={`h-[133px] w-[226px] rounded-[7px] border-[1px] py-[29px] px-[15px] flex flex-col items-center ${selectedoption.includes(option.label) ? 'border-blue-500 border-[7px]' : 'border-[#8E98A8]'}`}
              >
                <div className='w-[90px] h-[88px] flex flex-col items-center'>
                  <Image src={option.img} alt={option.label} width={48} height={48} className='relative bottom-2' />
                  <p className='w-[180px] h-[30px] text-[20px] font-[400] leading-[30px] tracking-[0.46px] text-[#000000]'>
                    {option.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col relative  top-[140px] rounded-[15px]'>
          <div className='w-[688px] relative left-[412px]  top-[70px]'>
            <p className='w-[417px] h-[30px] text-[20px] font-[400] leading-[30px] tracking-[0.46px] text-[#000000]'>
              Do you have any standout amenities?
            </p>
          </div>

          <div className='grid grid-cols-3 gap-5 mx-auto relative left-[421px]'>
            {options1.map((option1, index) => (
              <button key={index} onClick={() => handleClick1(option1)} className={`h-[133px] w-[226px] relative top-[140px] rounded-[7px] border-[1px] border-[#8E98A8] py-[29px] px-[15px] flex flex-col items-center ${selectedoption.includes(option1.label) ? 'border-blue-500 border-[7px]' : 'border-[#8E98A8]'}`}>
                <div className=' w-[90px] h-[88px] flex flex-col items-center '>
                  <Image src={option1.img} alt={option1.label} width={48} height={48} className='relative bottom-2' />
                  <p className=' w-[180px] h-[30px] text-[20px] font-[400] leading-[30px] tracking-[0.46px] text-[#000000]'>
                    {option1.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col relative  top-[140px] rounded-[15px]'>
          <div className='w-[688px] relative left-[412px] top-[220px]'>
            <p className='w-[417px] h-[30px] text-[20px] font-[400] leading-[30px] tracking-[0.46px] text-[#000000]'>
              Do you have any safety amenities?
            </p>
          </div>

          <div className='grid grid-cols-3 gap-5 mx-auto relative left-[421px]'>
            {options3.map((option3, index) => (
              <button key={index} onClick={() => handleClick3(option3)} className={`h-[133px] w-[226px] relative top-[270px] rounded-[7px] border-[1px] border-[#8E98A8] py-[29px] px-[15px] flex flex-col items-center ${selectedoption.includes(option3.label) ? 'border-blue-500 border-[7px]' : 'border-[#8E98A8]'}`}>
                <div className=' w-[90px] h-[88px] flex flex-col items-center '>
                  <Image src={option3.img} alt={option3.label} width={48} height={48} className='relative bottom-2' />
                  <p className=' w-[180px] h-[30px] text-[20px] font-[400] leading-[30px] tracking-[0.46px] text-[#000000]'>
                    {option3.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

     
    </>
  );
}
