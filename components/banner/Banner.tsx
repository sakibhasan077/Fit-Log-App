import Link from "next/link";
import BannerImage from "@/public/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mt-32.5 container mx-auto">
      <div className="p-14 flex flex-col justify-center gap-10 lg:gap-0 lg:flex-row lg:justify-between items-center min-h-112 bg-[#15171D] border-2 border-[#222630] rounded-2xl font-inter">
        {/* Left Content */}
        <div>
          <p className="text-[#C2F800] text-[12px] font-bold mb-5 leading-[16.5px] tracking-[1.1px]">WORKOUT LIBRARY</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-black leading-15 tracking-[-1.5px] mb-5">
            TRAIN WITH INTENT. LOG <br className="hidden lg:block" /> EVERY SET.
          </h1>
          <p className="leading-6 mb-5 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden md:block" />
            into today's plan, and watch the week's work add up.
          </p>
          <button className="text-[14px] font-bold tracking-[.3px] leading-4 bg-[#C2F800] py-4 px-7 rounded-xl text-black"><Link href={"/"} >BROWSE WORKOUTS</Link></button>
        </div>
        {/* Right Image */}
        <div>
          <Image src={BannerImage} alt="Banner Image" height={500} width={500} className="h-83.5 w-83.5"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
