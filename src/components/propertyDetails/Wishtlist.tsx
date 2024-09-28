import Image from "next/image";
import { svgs } from "@/constants/images";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Link from "next/link";
import Button from "../common/Button";

export default function Wishlist({ setPopup }: any) {
  const favouriteArray = useAppSelector(
    (state: RootState) => state.propertiesFeature.favouriteProperties,
  );

  return (
    <div className="popup max-h-[40rem] w-[26.25rem] rounded-2xl border border-neutral-500 bg-white font-serif md:w-[45rem] lg:w-[55.5rem] 2xl:w-fit">
      <div className="flex h-11 flex-row justify-start p-2">
        <div className="flex w-full flex-row items-center">
          <div className="relative h-9 w-9" onClick={() => setPopup(false)}>
            <Image
              src={svgs.propertyFilterXcross}
              alt="xcross icon"
              fill={true}
            />
          </div>
          <div className="w-full text-center text-lg">Add to your wishlist</div>
        </div>
      </div>
      <hr className="border bg-neutral-500" />

      {/* Favourite Properties section*/}

      <div className="scrollbar-thin grid h-[31rem] grid-cols-1 gap-y-10 overflow-y-auto p-10 md:grid-cols-2 md:gap-10 lg:grid-cols-3 2xl:grid-cols-4">
        {favouriteArray?.map((property: any, index: any) => (
          <div key={index} className="w-fit rounded-2xl bg-secondary-50 p-2">
            <Link
              href={`http://localhost:3000/properties/london/${property.id}`}
            >
              <div className="relative h-60 w-64">
                <Image
                  src={property.image}
                  alt="favourite Image"
                  key={index}
                  fill={true}
                  className="rounded-2xl object-cover"
                />
              </div>
            </Link>
            <div>
              <p className="text-md">{property.id}</p>
              <p className="text-md text-secondary-300">{property.saved}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center border-t border-neutral-400 p-4">
        {/* <button className="rounded-lg bg-secondary-900 px-12 py-3 text-lg text-neutral-50">
          Create new Wishlist
        </button> */}
        <Button className="rounded-lg bg-secondary-900 px-12 py-3 text-lg text-neutral-50">
          Create new Wishlist
        </Button>
      </div>
    </div>
  );
}
