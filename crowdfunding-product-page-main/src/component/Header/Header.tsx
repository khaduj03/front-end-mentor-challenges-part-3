import { useState } from "react";

const Nav=()=>(
  <nav className="w-[60rem] z-50 rounded-3xlmd:rounded-none   md:w-auto md:h-auto">
    <ul className="flex rounded-3xl md:rounded-none   md:flex-row md:bg-inherit bg-white flex-col  text-lg  md:space-x-12 text-black md:text-white font-semibold">
        <li className="md:border-b-0 px-10 text-start border-b md:py-0 py-4 border-gray-300">
          <a
            href="#"
            className="relative md:px-0    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            About
          </a>
        </li>
        <li className="md:border-b-0 md:px-0  px-10 text-start border-b md:py-0  py-4 border-gray-300">
          <a
            href="#"
            className="relative    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Discover
          </a>
        </li>
        <li className="md:border-b-0  md:px-0 px-10 text-start border-b rounded-b-3xl md:py-0  py-4 border-gray-300">
          <a
            href="#"
            className="relative   after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
          >
            Get Started
          </a>
        </li>
      </ul>
  </nav>
)
export default function Header() {
  const [menu , setMenu]=useState(false)
  return (
    <header className="md:bg-background bg-backgroundMobile flex justify-between h-96 p-10 lg:px-32">
      {/* Logo */}
      <img className="md:w-32 md:h-5 w-20 h-3" src="/images/logo.svg" alt="logo" />
      {/* Navigation Menu */}
      <div className="md:flex hidden">
      <Nav/>
      </div>
        <div>
      </div>

      {/* Hamburger button for mobile menu */}
      <button
        className="md:hidden relative w-8 h-8 mr-2 z-50"
        onClick={() => setMenu(!menu)}
        // aria-expanded={menu}
        aria-label={menu ? "Close menu" : "Open menu"}
      >
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${menu ? "rotate-45 top-3" : "rotate-0 top-0"}`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out top-3 ${menu ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${menu ? "-rotate-45 top-3" : "rotate-0 top-6"}`}
        ></span>
      </button>



      {menu&&(<div className="absolute  left-0 w-full px-5 z-50 flex   top-20 h-auto">
       <Nav/>
      </div>)}
    </header>
  );
}
