import Link from 'next/link';
import React from 'react';

const NoDataCart = () => {
  return (
    <div className='mt-6 border border-dashed bg-[rgba(17,19,23,0.5)] border-[rgba(255,255,255,0.1)] min-h-70 rounded-2xl flex flex-col items-center justify-center font-inter'>
      <h3 className='text-xl font-bold font-oswald leading-5 tracking-[.7px] mb-2'>NOTHING HERE YET</h3>
      <p className='mb-6 text-xs text-[#A1A1AA]'>
        Browse the library and add a lift to get today moving.
      </p>
      <Link href={"/"}>
      <button
          className="rounded-full bg-[#CCFF00] px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-lime-300"
        >
          Go to workouts
        </button></Link>
    </div>
  );
};

export default NoDataCart;