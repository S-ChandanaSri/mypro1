"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { svgs } from "@/constants/images";
import { strings } from "@/constants/strings";
import Button from "./common/Button";
import { useRouter, usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { PATHS } from "@/constants";
import { linkOptions } from "@/constants/arrays";
import { ILinkOption } from "@/constants/types";

export const navbarVariants = cva(
  `fixed z-20 flex h-[92px] w-full items-center justify-between md:px-12 px-8 font-serif text-neutral-50 md:h-[72px] transition-all duration-300`,
  {
    variants: {
      variant: {
        root: "bg-transparent",
        base: "bg-secondaryWashed-800",
      },
    },
    defaultVariants: {
      variant: "base",
    },
  },
);

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [variant, setVariant] = useState<"base" | "root">("base");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setVariant("base");
      } else {
        setVariant("root");
      }
    };

    if (pathname === PATHS.root) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setVariant("base");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const buttonVariant = variant === "base" || !variant ? "baseDark" : "base";

  const renderLinks = () => {
    return linkOptions.map((option: ILinkOption) => (
      <span
        key={option.label}
        className="cursor-pointer transition-all duration-200 hover:opacity-80"
        onClick={() =>
          router.push(`${option.page}${option.comp ? `#${option.comp}` : ""}`)
        }
      >
        {option.label}
      </span>
    ));
  };

  if (pathname === PATHS.login || pathname === PATHS.signUp) {
    return;
  }

  return (
    <div className={navbarVariants({ variant })}>
      <Link href={PATHS.root} className="flex items-center">
        <Image src={svgs.logo} alt="Logo" className="h-16 w-16" />
        <span className="font-display text-xl">{strings.appName}</span>
      </Link>
      <ul className="hidden space-x-8 text-sm font-medium md:flex">
        {renderLinks()}
      </ul>
      <Button
        className="hidden md:flex"
        preIconNode={svgs.chevronRightIn}
        size="md"
        variant={buttonVariant}
        onClick={() => router.push(PATHS.login)}
      >
        {strings.paths[PATHS.login]}
      </Button>

      <Button
        className="outline-none hover:bg-transparent md:hidden"
        preIconNode={svgs.hamburgerMenu}
        iconSize={36}
        size="md"
        variant="base"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      />
      <div
        className={`fixed right-0 top-[92px] ${menuOpen ? "h-[300px]" : "h-0"} w-full overflow-hidden rounded-b-xl bg-neutral-50/95 text-center text-neutral-950 transition-all duration-300 ease-out`}
      >
        <ul className="flex flex-col space-y-16 p-8 pt-10 text-md">
          <Link href={PATHS.login}>{strings.paths[PATHS.login]}</Link>
          {renderLinks()}
        </ul>
      </div>
    </div>
  );
};

Navbar.displayName = "Navbar";
export default Navbar;
