"use client";

// import { useState, useMemo, useEffect, useRef } from "react";
// import Select from "react-select";
// import countryList from "react-select-country-list";

// interface AddressType {
//   road: string;
//   city: string;
//   country: string;
//   zipcode: string;
//   street: string;
//   state: string;
//   country_code: string;
//   village: string;
//   mandal: string;
//   district: string;
// }
// interface CountryOption {
//   value: string;
//   label: string;
// }
export default function Address() {
  // export default function Address({ listingid }: { listingid: string }) {
  //   const iframeRef = useRef(null);
  //   const options: CountryOption[] = useMemo(() => countryList().getData(), []);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState("");
  //   const [valuee, setValue] = useState({ value: "", label: "" });

  //   const [address, setAddress] = useState({
  //     road: "",
  //     city: "",
  //     country: "",
  //     zipcode: "",
  //     street: "",
  //     state: "",
  //     country_code: "",
  //     village: "",
  //     mandal: "",
  //     district: "",
  //   });

  //   const changeHandler = (selectedOption: { value: string; label: string }) => {
  //     setValue(selectedOption);
  //     setAddress((prevAddress: AddressType) => ({
  //       ...prevAddress,
  //       country: selectedOption.label,
  //       country_code: selectedOption.value,
  //     }));
  //   };

  //   useEffect(() => {
  //     fetch("http://localhost:3001/address", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ address, id: listingid }),
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         return response.text().then((text) => {
  //           throw new Error(text);
  //         });
  //       })
  //       .then((data) => {
  //         console.log("Response data:", data);
  //         console.log("success");
  //       })
  //       .catch((err) => console.error("Error:", err));
  //   }, [address, listingid]);

  //   useEffect(() => {
  //     if (iframeRef.current) {
  //       const iframe = iframeRef.current;
  //       const url = iframe.getAttribute("src");

  //       const params = new URLSearchParams(new URL(url).search);
  //       const embedParams = params.get("pb");

  //       const latitudeMatch = embedParams?.match(/!3d(-?\d+\.\d+)/);
  //       const longitudeMatch = embedParams?.match(/!2d(-?\d+\.\d+)/);

  //       const latitude = latitudeMatch ? latitudeMatch[1] : "Not found";
  //       const longitude = longitudeMatch ? longitudeMatch[1] : "Not found";

  //       console.log(`Latitude: ${latitude}`);
  //       console.log(`Longitude: ${longitude}`);
  //     }

  //     navigator.geolocation.getCurrentPosition(
  //       (pos) => {
  //         const { latitude, longitude } = pos.coords;
  //         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  //         fetch(url)
  //           .then((res) => res.json())
  //           .then((data) => {
  //             const country = data.address.country || "";
  //             const countryCode = data.address.country_code || "";

  //             const selectedOption = options.find(
  //               (option: CountryOption) =>
  //                 option.value.toUpperCase() === countryCode.toUpperCase(),
  //             );

  //             setAddress({
  //               road: data.address.road || data.address.street || "",
  //               city:
  //                 data.address.city ||
  //                 data.address.town ||
  //                 data.address.city_district ||
  //                 "",
  //               country: country,
  //               zipcode: data.address.zipcode || data.address.postcode || "",
  //               street: data.address.street || data.address.colony || "",
  //               state: data.address.state || "",
  //               country_code: countryCode,
  //               district: data.address.state_district || "",
  //               mandal: data.address.county || "",
  //               village: data.address.suburb || "",
  //             });

  //             setValue(selectedOption);
  //             setLoading(false);
  //           })
  //           .catch((err) => {
  //             console.error("Error fetching address:", err);
  //             setError("Unable to fetch address.");
  //             setLoading(false);
  //           });
  //       },
  //       (err) => {
  //         console.error("Geolocation error:", err);
  //         setError("Unable to get location.");
  //         setLoading(false);
  //       },
  //     );
  //   }, [options]);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>{error}</p>;

  return (
    <>
      {/* <div className="relative left-[350px] top-[10px] flex h-[670px] flex-col items-center">
        <p className="custo-font h-[68px] w-[597px] text-[45px] font-[400] leading-[67.5px] tracking-[0.46px] text-[#000000]">
          {" "}
          Confirm your address{" "}
        </p>
        <p className="custo-font h-[54px] w-[852px] text-[18px] font-[300] leading-[27px] tracking-[0.46px] text-[#000000]">
          {" "}
          Your address will only be shared with your guest only after they have
          made rservations{" "}
        </p>
        <div className="left-[251px] top-[364px] h-[76px] w-[709px] rounded-[5px] border-[1px] border-[#000000] px-[10px] py-[12px]">
          <Select
            options={options}
            value={valuee}
            className="h-full w-full border-none outline-none"
            onChange={changeHandler}
            styles={{
              control: (base: any) => ({
                ...base,
                height: "100%",
                border: "none",
                boxShadow: "none",
              }),
            }}
          >
            {valuee && (
              <p>
                <span>{valuee.value} </span> {valuee.label}
              </p>
            )}
          </Select>
        </div>
        <div className="relative top-[2px] h-[402px] w-[709px] rounded-[5px] border-[1px] border-[#000000] px-[10px] py-[12px]">
          <div className="pt-3">
            <div className="h-[57x] w-[210px] gap-[3px]">
              <p className="custo-font h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                Street address
              </p>
              <p className="custo-font relative bottom-1.5 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.street}
                {address.village}
              </p>
            </div>
            <div className="left-[250px] top-[533px] w-[710px] border-[1px] border-[#8E98A8]"></div>
            <div className="w-[210px] gap-[3px]">
              <p className="custo-font relative top-1 h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                Mandal
              </p>
              <p className="custo-font relative bottom-1.5 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.mandal}
              </p>
            </div>
            <div className="left-[250px] top-[533px] w-[710px] border-[1px] border-[#8E98A8]"></div>
            <div className="h-[57x] w-[210px] gap-[3px]">
              <p className="custo-font relative top-1 h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                City
              </p>
              <p className="custo-font relative bottom-1.5 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.city}
              </p>
            </div>
            <div className="left-[250px] top-[533px] w-[710px] border-[1px] border-[#8E98A8]"></div>
            <div className="h-[57x] w-[210px] gap-[3px]">
              <p className="custo-font relative top-1 h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                City
              </p>
              <p className="custo-font relative bottom-1.5 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.district}
              </p>
            </div>
            <div className="left-[250px] top-[533px] w-[710px] border-[1px] border-[#8E98A8]"></div>
            <div className="h-[57x] w-[210px] gap-[3px]">
              <p className="custo-font relative top-1 h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                State
              </p>
              <p className="custo-font relative bottom-1.5 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.state}
              </p>
            </div>
            <div className="left-[250px] top-[533px] w-[710px] border-[1px] border-[#8E98A8]"></div>
            <div className="h-[57x] w-[210px] gap-[3px]">
              <p className="custo-font relative top-1 h-[34px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                zipcode
              </p>
              <p className="custo-font relative bottom-2 h-[24px] w-[210px] text-[16px] font-[300] leading-[24px] tracking-[0.46px] text-[#8E98A8]">
                {address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
