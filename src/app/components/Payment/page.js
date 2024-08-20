'use client'
import React,{useState,useEffect} from 'react';
import Navbar from '../Navbar/page.js';
import Footerpayment from '../Footerpayment/page.js';
import Image from 'next/image';
//import { useLocation, useNavigate } from 'react-router-dom';
import Display from '../Display/page.js';
import Amount from '../Amount/page.js';
import Pay from '../Pay/page.js';
import { useRouter } from 'next/navigation';
import { useListing } from '@/app/context/ListingContext.js';


export default function Payment() {

    const router = useRouter();
    const { listingid } = useListing();
    const [currentstep,setCurrentstep]=useState(0)
    const [step, setStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [num, setNum] = useState('');
    ////const navigate=useNavigate();
    //const location = useLocation();
    //console.log("location",location.state)
    //const { listingid } = location.state || {}; 
   


    

        
    const handleBack = () => {
        setStep((prevStep) => (prevStep - 1)); 
        if (currentstep > 0) {
          setCurrentstep(prevStep => prevStep - 1);
        }
      };

    const handleNext=()=>{
        if (step === 0) {
            setStep((prevStep) => prevStep + 1);
            setCurrentstep((prevStep) => prevStep + 1);
          }else if(step===1){
            setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setStep((prevStep) => prevStep + 1);
          setCurrentstep((prevStep) => prevStep + 1);
        }, 3000);

          }else if(step===2){

            setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setCurrentstep((prevStep) => prevStep + 1);
          router.push("/components/Propertylisting" );
          
        }, 3000);
          }
    }

    const [salary,setSalary]=useState(1000);
  const [addition, setAddition] = useState(0);
    useEffect(() => {
      const calculatedAddition = parseInt(salary, 10) + parseInt(num, 10);
      setAddition(calculatedAddition);
    }, [salary, num]);
  

    const handleSalaryChange = (e) => {
      setSalary(e.target.value);
    };
  
  
    const [edit,setEdit] = useState(false);

    

    const decimalDigits=0;

    

    

  return (
    <div className='flex flex-col min-h-screen bg-[#FFFFFF]'>
      <Navbar/>
      <div className='flex-grow'>
      <div className='flex items-center '>
        {step === 0 && (

          <Display listingid={listingid}/>
          
        )}
      {step === 1 && (
           <Amount listingid={listingid} salary={salary} setSalary={setSalary} />
         )}

        {step === 2 && (
        <Pay listingid={listingid} salary={salary}/>
           )}

      </div>
      </div>
      <Footerpayment isLoading={isLoading} buttonText="NEXT" onClick={handleNext} onBack={handleBack} step={step} setStep={setStep} currentstep={currentstep}/>

    </div>
  )
}
