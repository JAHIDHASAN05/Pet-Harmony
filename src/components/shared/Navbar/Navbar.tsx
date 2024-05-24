import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/Logo.png'

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>

      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <li>
        <Link href={'/dashboard'}>Dashboard</Link>
      </li>
      <li>
        <Link href={'/profile'}>MyProfile</Link>
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
        <p className="text-2xl border  flex items-center justify-center"> <span className=""><Image src={logo} alt='logo' width={40} height={30}></Image></span> <span>Pet Harmony</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          {NavItems}
        </ul>
      </div>
      <div className="navbar-end gap-5 ">
        <Link href={'/login'} className="btn bg-[#FF7D5A] border-0 rounded-[4rem] text-white font-semibold">Login</Link>
        {/* <a className="btn">Log Out</a> */}
      </div>
    </section>
    
  );
};

export default Navbar;
