"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-16 bg-black opacity-70 absolute">
        <div className="flex w-32 h-full items-center justify-center">
            <Image width={50} height={50} src="/images/logo.png" alt="marisha logo" className="hidden sm:block w-24"/>
        </div>
        <div className="flex items-center justify-center">
        
        </div>
        <div className="w-40">

        </div>
    </div>
  );
}
