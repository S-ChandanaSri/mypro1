"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { PATHS } from "@/constants";
import { strings } from "@/constants/strings";
import { svgs } from "@/constants/images";
import Button from "./common/Button";
import { FooterConnectOptions, FooterLinks } from "@/constants/arrays";
import { IFooterConnectOption, ILinkOption } from "@/constants/types";
import Link from "next/link";

const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname === PATHS.login || pathname === PATHS.signUp) {
    return;
  }

  const renderFooterConnectOptions = () => {
    return FooterConnectOptions.map(
      (option: IFooterConnectOption, idx: number) => (
        <div key={idx} className="grid grid-cols-[auto_1fr] gap-x-3">
          <Image
            alt=""
            width={32}
            height={32}
            src={option.icon}
            className="row-span-2"
          />
          <span className="text-neutral-600">{option.type}</span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-secondary-700">
            {option.value}
          </p>
        </div>
      ),
    );
  };

  return (
    <div className="mt-24 space-y-14 bg-secondaryWashed-50 px-8 py-24 lg:px-24 xl:px-48">
      <div className="grid grid-cols-1 justify-between gap-y-2 rounded-xl bg-secondaryWashed-800 px-8 py-7 text-center text-neutral-50 md:grid-flow-col md:grid-cols-2 md:gap-y-0 md:px-9 md:text-left">
        <p className="text-md font-medium">{strings.footer.newsletter}</p>
        <p className="text-md text-neutral-50/80">
          {strings.footer.newsletterPromo}
        </p>
        <div className="flex items-center gap-3 rounded-xl bg-secondaryWashed-700 py-2 pl-6 pr-2 text-md md:row-span-2">
          <Image width={20} height={20} alt="" src={svgs.sms} />
          <input
            placeholder={strings.footer.enterMail}
            className="flex-1 bg-transparent text-netrual-50"
          />
          <Button variant="baseDark" className="h-14 w-48 rounded-xl text-lg">
            {strings.submit}
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
        <Image width={134} height={34} src={svgs.logoFooter} alt="" />
        <p className="text-md text-neutral-600">
          {strings.footer.description}...
          <span className="text-secondary-700">{strings.readMore}</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 text-md lg:grid-cols-4">
        {renderFooterConnectOptions()}
      </div>

      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {FooterLinks.map((linkArray, pIndex: number) => (
          <div
            key={pIndex}
            className="flex flex-col gap-6 text-md text-secondaryWashed-900"
          >
            <span className="font-medium text-primaryWashed-900">
              {linkArray[0].label}
            </span>
            {linkArray.map((link: ILinkOption, sIndex: number) => (
              <Link
                key={pIndex * linkArray.length + sIndex}
                className="hover:underline"
                href={link.page}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-between space-y-4 border-t-2 border-neutral-300 py-6 text-md text-secondaryWashed-900 md:flex-row md:space-y-0">
        <div className="flex gap-3 md:gap-10">
          <Link href={PATHS.aboutUs}>About Us</Link>
          <Link href={PATHS.aboutUs}>About Us</Link>
          <Link href={PATHS.aboutUs}>About Us</Link>
          <Link href={PATHS.aboutUs}>About Us</Link>
          <Link href={PATHS.aboutUs}>About Us</Link>
        </div>
        <span>{strings.footer.allRightsReserved}</span>
      </div>
    </div>
  );
};

export default Footer;
