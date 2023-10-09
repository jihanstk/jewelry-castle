import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaLanguage } from "react-icons/fa";
import { BiSolidCaretRightCircle } from "react-icons/bi";
// import { MdFastfood, MdOutlinePostAdd } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import { useState } from "react";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <div
          className={`bg-[#680101]  ${
            open ? "md:w-72 w-full " : "md:w-20 w-0 md:left-0 -left-44 "
          } bg-dark-purple h-[100%] fixed top-0 p-5 mr-2/4 pt-8 duration-300`}
        >
          {/* <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}

          <BiSolidCaretRightCircle
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 text-3xl text-white rounded-full duration-150 ${
             open && "rotate-180 md:-right-3 right-6 "
           }`}
            onClick={() => setOpen(!open)}
          ></BiSolidCaretRightCircle>

          <div className="flex gap-x-4 items-center">
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              <NavLink
                to="/"
                className="btn btn-ghost text-sm uppercase font-mono"
              >
                JewelryCastle
              </NavLink>
            </h1>
          </div>
          <ul className="pt-6 text-slate-200">
            <li
              className={`text-slate-200 rounded-md p-2 cursor-pointer hover:bg-light-white text-sm items-center gap-x-4  `}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-orange-500 " : ""
                }
                to="product"
              >
                <div className="flex items-center gap-5 text-lg duration-200">
                  <FaLanguage className=" text-2xl my-3"></FaLanguage>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-lg duration-200`}
                  >
                    Product
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div
          className={`absolute   ${
            open
              ? "left-[300px] md:w-[calc(100%-300px)] w-0 "
              : "md:left-[100px] md:w-[calc(100%-100px)] w-full duration-300"
          } overflow-hidden md:duration-300`}
        >
          <div>
            <div className="flex justify-between items-center md:p-10 p-10">
              <FaBars
                className={` cursor-pointer 
            text-3xl text-black  duration-150 ${
              open && "rotate-180 md:-right-3 right-6"
            }`}
                onClick={() => setOpen(!open)}
              ></FaBars>
              <div className="flex gap-x-4 items-center">
                <h1
                  className={` origin-left font-medium text-xl duration-200 `}
                >
                  <NavLink
                    to="/"
                    className=" text-2xl font-bold uppercase font-mono"
                  >
                    JewelryCastle
                  </NavLink>
                </h1>
              </div>
              <img
                className="w-10 h-10 rounded-full"
                src={isAdmin.photo}
                alt=""
              />
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
