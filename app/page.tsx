"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import { useState } from "react";
import FirstContent from "./components/FirstContent";
import SecondContent from "./components/SecondContent";
import ThirdContent from "./components/ThirdContent";
import { motion } from "framer-motion";
import { zoomIn, slideIn } from "./utils/motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-full sm:py-10 sm:px-24 p-4 bg-[#FFFDFA]">
      <div className="flex flex-col">
        {/* Gray background color on open menu */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="bg-slate-400/60 absolute inset-0 z-40"
          />
        )}

        {/* Logo image */}
        <div className="py-8">
          <Image
            src="/images/logo.svg"
            alt="logo"
            height={60}
            width={60}
            className="w-auto h-auto"
          />
        </div>

        {/* NavBar Component */}

        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className=" flex flex-col sm:flex-row">
          <FirstContent />
          <SecondContent />
        </div>

        <ThirdContent />
      </div>
    </div>
  );
}
