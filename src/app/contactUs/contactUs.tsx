"use client";
import { useState, ChangeEvent, FormEvent } from "react";

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
    <div className="bgcontactform w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center w-[664px] bg-white min-h-[846px] rounded-[15px] p-[20px]">
        <div className="flex flex-col w-[535.21px] min-h-[139.79px] px-[32px] gap-[32px] items-center">
          <div className="leading-[24px] text-[16px] font-[600] text-[#002855]">
            Contact us
          </div>
          <div className="leading-[44px] font-[600] text-[36px]">
            Get in touch
          </div>
          <div className="leading-[30px] font-[400] text-[20px] text-[#667085]">
            We&apos;d love to hear from you. Please fill out this form.
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[535.21px] mt-[40px] h-[619.39px] px-[32px] flex flex-col gap-[30px]"
        >
          <div className="w-[480px] h-[74px] gap-[32px] flex">
            <div className="max-w-[224px] h-[74px] flex flex-col items-start gap-[10px]">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border-[1px] border-[#D0D5DD] py-[12px] px-[16px] w-[224px] h-[48px] rounded-[8px] gap-[8px]"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="w-[224px] h-[74px] flex flex-col items-start gap-[10px]">
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border-[1px] border-[#D0D5DD] py-[12px] px-[16px] w-[224px] h-[48px] rounded-[8px] gap-[8px]"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="w-[480px] h-[74px] flex flex-col gap-[10px]">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              className="border-[1px] border-[#D0D5DD] py-[12px] px-[16px] min-w-[224px] h-[48px] rounded-[8px] gap-[8px]"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="w-[480px] h-[74px] flex flex-col gap-[10px]">
            <label>Phone number</label>
            <div className="flex flex-row border-[1px] border-[#D0D5DD] py-[12px] px-[16px] min-w-[224px] h-[48px] rounded-[8px] gap-[8px]">
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
                className="w-full"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="w-[480px] h-[154px] flex flex-col gap-[10px]">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-[480px] h-[128px] rounded-[8px] border-[1px] py-[10px] px-[14px] gap-[8px] border-[#D0D5DD]"
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="flex flex-row gap-[10px]">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <p>You agree to our friendly privacy policy</p>
            {errors.agree && <p className="text-red-500">{errors.agree}</p>}
          </div>
          <button
            type="submit"
            className="min-w-[480px] text-white min-h-[48px] hover:bg-[#05458e] flex flex-row justify-center items-center bg-[#002855] border-[1px] rounded-[8px]"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
