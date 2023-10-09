import { Link, NavLink } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAdmin from "../../../Hooks/useAdmin/useAdmin";
const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  const badgeObj = localStorage.getItem("addToCart");
  const badge = badgeObj ? JSON.parse(badgeObj) : 0;
  console.log(badgeObj);

  const navLists = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "All jewelry",
      path: "/all-jewelry",
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
          <Link to="/">
            {" "}
            <h1 className="md:text-4xl text-xl font-bold">JewelryCastle</h1>
          </Link>
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
                className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10 font-bold duration-300 "
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-[#0b9795] font-bold" : ""
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          {isAdmin.role == "user" ? (
            <li className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10 font-bold duration-300">
              <Link to="dashboard/product">
                Cart{" "}
                <span className="badge-info">{Object.keys(badge).length}</span>
              </Link>
            </li>
          ) : (
            ""
          )}
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
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-md btn-info  "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn btn-outline btn-md btn-info">Login</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
