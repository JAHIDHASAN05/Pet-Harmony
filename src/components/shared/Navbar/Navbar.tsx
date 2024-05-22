import Link from "next/link";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>

      <li>
        <Link href={'/'}>About</Link>
      </li>
      <li>
        <Link href={'/'}>MyProfile</Link>
      </li>
    </>
  );
  return (
    <section className="navbar bg-[rgb(60,0,64)] text-white md:px-[3rem] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        <p className="text-xl ">Pet Harmony</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="btn">Login</a>
        {/* <a className="btn">Log Out</a> */}
      </div>
    </section>
    
  );
};

export default Navbar;
