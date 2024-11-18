"use client";

import Image from "next/image";
import HeaderItem from "./headerItem";
import GradientBtn from "../buttons/gradientBtn";

export default function Header() {
  const handleClick = () => {
    console.log("Clicked quote button");
  };
  return (
    <nav className="flex w-full h-16 top-0 z-50 bg-black bg-opacity-70 px-2 absolute">
      <div className="flex h-full items-center justify-center opacity">
        <Image
          width={1000}
          height={1000}
          src="/images/logo.png"
          alt="marisha logo"
          className="hidden sm:block w-24"
        />
      </div>
      <HeaderItem />
      <div className="hidden md: sm:flex items-center justify-center">
        <GradientBtn name="get a quote" onClick={handleClick} />
      </div>
    </nav>
  );
}
