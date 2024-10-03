"use client";
import Image from "next/image";
import { svgs, propertyDetailsImages } from "@/constants/images";
import { useState } from "react";

export default function ConfirmAndPay() {
  const [ready, setReady] = useState(false);
  const [paymentReview, setPaymentReview] = useState(false);
  const [congratulations, setCongratulations] = useState(false);

  const handleConfrimOrder = () => {
    setReady(true);
    setTimeout(() => {
      setReady(false);
      setPaymentReview(true);
    }, 2000);
    setTimeout(() => {
      setPaymentReview(false);
      setCongratulations(true);
    }, 4000);
  };
  return (
    <>
      <div className="flex flex-col gap-y-5 p-5 pt-[132px] md:p-10 md:pt-[112px]">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center lg:gap-x-5 lg:gap-y-0">
          <div className="flex w-full flex-col gap-y-3 rounded-2xl bg-neutral-100 p-5">
            <div className="flex flex-row gap-x-5">
              <Image
                src={svgs.mainLeftArrow}
                alt="left arrow"
                width={10}
                height={10}
                className="object-contain"
              />
              <p className="text-xl">Confirm and pay</p>
            </div>
            <div className="flex flex-row justify-between gap-x-5 rounded-md border border-secondary-800 p-3">
              <div className="flex flex-col">
                <p className="text-lg">This is a rare find</p>
                <p className="text-md">Mayer place is usually booked</p>
              </div>
              <Image
                src={svgs.mainRareFind}
                alt="rare find"
                width={25}
                height={22}
                className="object-contain"
              />
            </div>
            <p className="text-lg">Your Trip</p>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-lg">Dates</p>
                <p className="text-md">Jul 11-14</p>
              </div>
              <button className="text-lg">Edit</button>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-lg">Guests</p>
                <p className="text-md">2 guests</p>
              </div>
              <button className="text-lg">Edit</button>
            </div>
            <p className="text-lg">Choose how to pay</p>
            <div className="flex flex-row justify-between gap-x-5 rounded-md border border-secondary-800 p-3">
              <div className="flex flex-col">
                <p className="text-lg">Pay in Full</p>
                <p className="text-md">Pay the total $125 for full rent</p>
              </div>

              <input type="radio" />
            </div>
            <div className="flex flex-row justify-between gap-x-5 rounded-md border border-secondary-800 p-3">
              <div className="flex flex-col">
                <p className="text-lg">Pay part now part later</p>
                <p className="text-md">Pay $90 now rest will pay later</p>
              </div>
              <input type="radio" />
            </div>
          </div>

          <div className="flex flex-col gap-y-3 rounded-2xl bg-neutral-100 p-5">
            <div className="flex flex-row gap-x-8">
              <Image
                alt="property image"
                src={propertyDetailsImages.propertyInterior1}
                width={200}
                height={160}
                className="object-contain"
              />
              <div className="flex flex-col gap-y-4">
                <p className="text-xl">21 Poland Street,#2</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet conrestsec mdesuthnia emlemdhjak
                  dolro scim to posuer washin marshi akala
                </p>
                <div className="flex flex-row gap-x-2">
                  <Image
                    src={svgs.propertyStar}
                    alt="rating star"
                    width={15}
                    height={15}
                  />{" "}
                  <p>5 star (Review)</p>
                </div>
              </div>
            </div>
            <hr className="border border-neutral-400" />
            <div>
              <p className="text-xl">Price Details</p>
              <div className="flex flex-row justify-between text-lg text-neutral-500">
                <p>$50 x 3 nights</p>
                <p>$150</p>
              </div>
              <div className="flex flex-row justify-between text-lg text-neutral-500">
                <p>Cleaning fee</p>
                <p>$150</p>
              </div>
            </div>
            <hr className="border border-neutral-400" />
            <div className="flex flex-row justify-between text-lg text-neutral-400">
              <p>Total fee</p>
              <p>$300</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 rounded-2xl bg-neutral-100 p-5">
          <p>Payment details</p>
          <div className="flex flex-col text-neutral-500">
            <label>Credit card</label>
            <div className="flex justify-between rounded-md bg-neutral-200 p-2">
              <input
                type="number"
                placeholder="4647 7474 7363 7363"
                className="bg-neutral-200"
              />
              <Image
                src={svgs.mainCreditCard}
                alt="credit card"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col text-neutral-500">
            <label>Name</label>
            <input
              type="text"
              className="rounded-md bg-neutral-200 p-2"
              placeholder="ANNE MARTIN"
            />
          </div>

          <div className="flex flex-col gap-x-5 gap-y-2 text-neutral-500 sm:flex-row sm:gap-y-0">
            <div className="flex flex-col">
              <label>Expiration date</label>
              <input
                type="number"
                className="rounded-md bg-neutral-200 p-2"
                placeholder="01/2024"
              />
            </div>
            <div className="flex flex-col">
              <label>Cvv</label>
              <input
                type="number"
                className="rounded-md bg-neutral-200 p-2"
                placeholder="782"
              />
            </div>
          </div>

          <div className="flex gap-x-5">
            <button
              className="rounded-sm bg-secondary-800 p-2 text-neutral-50"
              onClick={handleConfrimOrder}
            >
              Confirm order
            </button>
            <button className="rounded-sm bg-neutral-200 p-2 text-neutral-500">
              Cancel and return
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-8">
          <div>
            <p className="text-lg">Cancellation policy</p>
            <p className="text-sm">
              Fee cancellation before Aug 25 Cancel before 11 jul to get partial
              refund <span>Learn more</span>
            </p>
          </div>
          <div>
            <p className="text-lg">Ground rules</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Mattis ornare odio nunc
              aliquet feugiat ut dignissim vel. Ornare arcu donec amet lectus eu
              adipiscing. Cras sed et adipiscing molestie eu libero. Tortor
              etiam augue tellus mi facilisi ridiculus.
            </p>
          </div>
        </div>
      </div>
      {ready && (
        <div className="popup flex h-80 w-96 flex-col items-center justify-center rounded-md bg-neutral-50">
          <Image
            src={svgs.logoblue}
            alt="logo"
            width={150}
            height={150}
            className="my-5 object-cover"
          />

          <p className="text-lg text-secondary-800">
            we are getting your trip ready
          </p>
        </div>
      )}
      {paymentReview && (
        <div className="popup flex h-80 w-96 flex-col items-center justify-center rounded-md bg-neutral-50">
          <Image
            src={svgs.mainMoney}
            alt="logo"
            width={150}
            height={150}
            className="my-5 object-cover"
          />

          <p className="text-lg text-secondary-800">
            Reviewing payment details
          </p>
        </div>
      )}
      {congratulations && (
        <div className="popup flex h-80 w-96 flex-col items-center justify-center rounded-md bg-neutral-50">
          <Image
            src={svgs.mainCongratulations}
            alt="logo"
            width={200}
            height={400}
            className="my-5 object-cover"
          />

          <p className="text-lg text-secondary-800">
            Congratulations! your room is booked
          </p>
        </div>
      )}
    </>
  );
}
