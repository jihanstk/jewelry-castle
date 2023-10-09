import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
const NavBar = () => {
  const navLists = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "All jewelry",
      path: "/product",
    },
    {
      name: "My Jewelry",
      path: "/my-jewelry",
    },
    {
      name: "Add jewelry",
      path: "/add-jewelry",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className={` px-10 md:py-5 py-2 bg-white`} id="main-nav">
      <nav className="flex justify-between items-center">
        <div className="jihan">
          <h1 className="md:text-4xl text-xl font-bold">JewelryCastle</h1>
        </div>
        <ul
          className={` md:static absolute  bg-white md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-300 ${
            open ? "left-0 top-0 " : "left-[-500rem] top-0"
          } `}
        >
          {navLists.map((item, i) => {
            return (
              <li
                key={i}
                className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10"
              >
                <a href={`${item.id}`} className="text-xl ">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="font-bold z-20 duration-200 md:hidden inline-block p-6">
          {open ? (
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineMenuUnfold>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-outline btn-md btn-info  ">
                <a>Logout</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
