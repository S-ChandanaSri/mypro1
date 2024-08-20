import React from 'react';
import Image from 'next/image';
import mattress2 from '../../_assets/images/mattress2.png';
import mattress1 from '../../_assets/images/mattress1.png';
import mattress3 from '../../_assets/images/mattress3.png';

export default function page() {
  return (
    <>
            
              <div className='flex h-[575px] relative bottom-[80px]'>
                <div className='w-[568px] h-[136px] relative top-[310px] left-[140px] '>
                    <p className='custo-font text-[45px] font-[500] leading-[67.5px] tracking-[0.46px] text-[#000000] text-center'>You,re just three steps to setup your zenden</p>
                </div>
                <div className='flex flex-col items-center justify-between '>
                    <div className='w-[623px] h-[115.07px] relative left-[250px] top-[100px] flex '>
                        <div className='w-[448px] h-[107px] '>
                        <p className='w-[448px] h-[53px] custo-font text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000] text-left'>1.Tell us about your place</p>
                        <p className=' w-[394px] h-[54px] custo-font text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000] text-left'>Share some basic info, like where it is and 
                        how many guest can stay</p>
                        </div>
                        <Image src={mattress1} width={129} height={115.07} alt='' />

                    </div>
                    <div className='w-[623px] h-[115.07px] relative left-[250px] top-[100px] flex '>
                        <div className='w-[448px] h-[107px] '>
                        <p className='w-[448px] h-[53px] custo-font text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000] text-left'>2.Make it stand out</p>
                        <p className=' w-[394px] h-[54px] custo-font text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000] text-left'>Add 5 or more photos plus title and little description</p>
                        </div>
                        <Image src={mattress3} width={129} height={115.07} alt='' />

                    </div>
                    <div className='w-[623px] h-[115.07px] relative left-[250px] top-[100px] flex '>
                        <div className='w-[448px] h-[107px] '>
                        <p className='w-[448px] h-[53px] custo-font text-[35px] font-[400] leading-[52.5px] tracking-[0.46px] text-[#000000] text-left'>3.Finish up and publish</p>
                        <p className=' w-[394px] h-[54px] custo-font text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000] text-left'>Choose if you like to start with an experienced guest ,set up starting price and publish your listing</p>
                        </div>
                        <Image src={mattress2} width={129} height={115.07} alt='' />

                    </div>
                </div>
              </div>
            </>
  )
}
