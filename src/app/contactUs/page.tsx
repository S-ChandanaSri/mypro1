"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import FormContainer from "@/components/common/FormContainer";
import BackgroundImageContainer from "@/components/common/BackgroundImageContainer";
import { BACKGROUNDS } from "@/constants/images";
import Link from "next/link";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agree: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  agree?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.firstName) {
      tempErrors.firstName = "First name is required.";
      isValid = false;
    }

    if (!formData.lastName) {
      tempErrors.lastName = "Last name is required.";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email address is invalid.";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Phone number is invalid.";
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }

    if (!formData.agree) {
      tempErrors.agree = "You must agree to the privacy policy.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log(formData);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle successful submission
        } else {
          // Handle errors in submission
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  return (
    <BackgroundImageContainer
      backgroundImage={BACKGROUNDS.CONTACTUS_IMAGE}
      className="  flex justify-center items-center"
    >
      <div className="flex flex-col items-center w-[26.6rem]    md:w-fit bg-neutral-50 rounded-lg p-1 md:p-5">
        <div className="flex flex-col  md:px-8 md:gap-8 items-center">
          <div className="  text-[#002855] text-md">Contact us</div>
          <div className="text-2xl">Get in touch</div>
          <div className=" text-neutral-600 text-lg">
            We&apos;d love to hear from you. Please fill out this form.
          </div>
        </div>

        <FormContainer onSubmit={handleSubmit} variant="contactUs">
          <div className=" gap-4 flex md:flex-row flex-col ">
            <div className=" flex flex-col items-start gap-2">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-neutral-600 w-full  p-3 rounded-2 gap-2"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className=" flex flex-col items-start gap-2">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-neutral-600 p-3 w-full rounded-2 gap-2"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className="border border-neutral-600 p-3 rounded-2 gap-2"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className=" flex flex-col gap-2">
            <label>Phone number</label>
            <div className="flex flex-row border border-neutral-600 p-3  rounded-2 gap-2">
              <select
                name="countryCode"
                onChange={handleChange}
                className="w-[70px] outline-none"
              >
                <option value="+1">US</option>
                <option value="+91">IND</option>
              </select>
              <input
                type="text"
                name="phoneNumber"
                placeholder="+1(555)000-0000"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className=" flex flex-col gap-2">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className=" h-32 rounded-lg border p-2  border-neutral-600"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <p className="text-md">
              You agree to our friendly{" "}
              <Link href="#" className="underline text-blue-900 ">
                privacy policy
              </Link>
            </p>
            {errors.agree && <p className="text-red-500">{errors.agree}</p>}
          </div>
          <button
            type="submit"
            className=" text-neutral-50 text-md  hover:bg-[#05458e] bg-[#002855] border-[1px] rounded-lg p-4"
          >
            Send message
          </button>
        </FormContainer>
      </div>
    </BackgroundImageContainer>
  );
}
