// eslint-disable-next-line no-unused-vars
import React from "react";
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import {useSelector } from "react-redux";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="p-3 shadow-lg fixed w-full z-10 h-[85px] flex bg-red-300">
        <nav className="container mx-auto px-12 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="ml-4 cursor-pointer text-4xl font-bold text-black hidden xl:block"
            >
              CricInfo
            </Link>
          </div>

          <ul className="xl:flex gap-16 items-center text-xl font-GrotMed hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/matchlist">MatchList</Link>
            </li>
            <li className="ml-6 relative">
              <Link to="/cart">
                <>
                  <span className="absolute top-1/2 -translate-y-1/2 -left-[26px]">
                    <svg
                      className="fill-[#60b246] stroke-0 stroke-[#60b246] overflow-hidden"
                      viewBox="-1 0 37 32"
                      height="20"
                      width="20"
                      fill="#686b78"
                    >
                      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-ProximaNovaSemiBold text-white">
                      {/* {cartItems.length} */}5
                    </span>
                  </span>
                </>
                <span className="font-ProximaNovaMed text-base">Cart</span>
              </Link>
            </li>
          </ul>

          <div className="text-2xl cursor-pointer mr-1 xl:hidden">
            <MdOutlineRestaurantMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
