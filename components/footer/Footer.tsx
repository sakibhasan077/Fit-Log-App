import React from 'react';

import FooterLogo from "@/public/assets/footerLogo.png";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className=' mt-16 border-t-2 border-[#1A1D24] bg-black'>
      <div className='container mx-auto py-10 font-inter flex flex-col gap-4 sm:flex-row sm:gap-0 sm:justify-between items-center justify-center'>
        {/* logo */}
        <div className='flex gap-2 items-center text-sm font-bold font-oswald'>
          <Image src={FooterLogo} alt='Footer Logo' width={50} height={50} className='w-5 h-5' ></Image> FITLOG
        </div>
        {/* content */}
        <span className='text-xs text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
      </div>
    </footer>
  );
};

export default Footer;