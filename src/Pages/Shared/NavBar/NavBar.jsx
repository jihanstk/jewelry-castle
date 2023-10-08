import { Link, NavLink } from "react-router-dom";

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
  return (
    <div
      className="flex justify-between items-center px-10 py-4 bg-white shadow-md mb-2 mt-0 duration-700 "
      id="main-nav"
    >
      <div>
        <ul className="md:flex gap-4 ">
          {navLists.map((list, i) => {
            return (
              <li key={i} className="text-md p-2 font-bold">
                <NavLink
                  to={list.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#358ebe] font-bold"
                      : " hover:text-[#358ebe]  duration-300"
                  }
                >
                  {list.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="text-left px-5 py-2">
        <h1 className="font-bold text-3xl text-left">
          <Link to="/">JewelryCastle</Link>{" "}
        </h1>
      </div>

      <div className="flex gap-5 px-5 py-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button className="btn btn-outline btn-info">LogOut</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
