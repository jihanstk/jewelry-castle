import { Link } from "react-router-dom";

const Footer = () => {
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
  return (
    <div className="mt-20 bg-[#d7f2fb]">
      <footer className="footer p-10 ">
        <aside>
          <p className="text-3xl font-bold">
            JewelryCastle
            <br />
          </p>
          <p>Providing reliable jewelry since 2020</p>
        </aside>
        <nav>
          <header className="footer-title">Navigations</header>
          <ul>
            {navLists.map((item, i) => {
              return (
                <li
                  key={i}
                  className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10 font-bold duration-300 "
                >
                  <Link
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "text-[#0b9795] font-bold" : ""
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav>
          <header className="footer-title">Address</header>
          <p className="font-bold text-slate-500">
            location: New-Market,Satkhira,khulna
          </p>
          <p className="font-bold text-slate-500">Phone: +8801888351004</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
