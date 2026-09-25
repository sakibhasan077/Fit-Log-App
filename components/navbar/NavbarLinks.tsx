"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link href={"/"}>
        <li
          className={`${pathname === "/" ? "bg-[#c2f80029] rounded-full text-[#C2F800]" : "text-[#9CA3AF] hover:bg-[#ffffff25] rounded-xl"} px-4 py-2 `}
        >
          Workouts
        </li>
      </Link>

      <Link href={"/myPlan"}>
        <li
          className={`${pathname === "/myPlan" ? "bg-[#c2f80029] rounded-full text-[#C2F800]" : "text-[#9CA3AF] hover:bg-[#ffffff25] rounded-xl"} px-4 py-2 `}
        >
          My Plan
        </li>
      </Link>
    </>
  );
};

export default NavbarLinks;
