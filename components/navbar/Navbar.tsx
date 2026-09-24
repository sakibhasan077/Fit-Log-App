import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";

const Navbar = () => {
  let links = (
    <>
      <li className="px-4 py-2 bg-[#c2f80029] rounded-full text-[#C2F800]">
        <Link href={"/"}>Workouts</Link >
      </li>
      <li className="px-4 py-2 text-[#9CA3AF]">
        <Link href={"/"}>My Plan</Link >
      </li>
    </>
  );
  return (
    <nav className="px-6 fixed top-0 w-full shadow-md bg-[#0c0d10] z-50 border-b-2 border-gray-700">
      <div className="navbar bg-[#0c0d10] text-white">
        <div className="navbar-start">
          <div className="dropdown mr-4">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-transparent border-0 ">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#0c0d10] text-white border border-gray-800 p-4 rounded-box z-1 mt-3 w-52 shadow font-inter text-[14px] font-semibold"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2.5">
          <Image src={Logo} alt="Website Logo" height={100} width={100} className="h-7 w-7"></Image>
          <Link href={"/"} className=" text-xl text-[white] font-oswald font-black text-[18px]">FITLOG</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-inter text-[14px] font-semibold">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-6">
          <button><Link href={"/"} className="font-inter font-medium text-[14px]">Plan <span className="font-inter font-bold text-base text-black bg-[#C2F800] px-2.5 py-0.5 rounded-full ml-2">0</span> </Link></button>
          <button><Link href={"/"} className="font-inter font-medium text-[14px]">Saved <span className="font-inter font-bold text-base text-white border-[#3c404d] border-2  px-2.5 py-0.5 rounded-full ml-2">0</span> </Link></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
