import { useState } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  let hamburger = <img src="/menu.svg" className="w-8"></img>;
  let close = <img src="/x.svg" className="w-8"></img>;

  return (
    <nav className=" z-50 w-[90%] lg:w-[70%] max-w-[2000px] fixed bg-white mx-auto p-3 flex left-0 right-0 sm:justify-around justify-between items-center top-0 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  rounded-b-xl">
      <img src="/logo.webp" className="w-8 sm:w-14" alt="logo" />

      <ul
        className={`flex fixed w-24 sm:w-auto sm:static flex-col sm:flex-row bg-white sm:bg-none gap-2 lg:gap-6 items-center justify-center font-bold text-gray-500 text-xs sm:text-base top-[80px] ${
          hamburgerOpen ? "right-[35px]" : " right-[-150px]"
        }  z-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] sm:shadow-none sm:rounded-none rounded-md ease-out transition-all`}
      >
        <li className="hover:scale-110 ease-in-out transition-all hover:text-orange-500  rounded-md ">
          <a href="/">
            <div className=" p-2 rounded-md  flex sm:flex-row flex-col-reverse gap-2 items-center">
              <span>Home</span>
              <img src="home.svg" className="sm:w-6 w-4" alt="home-icon" />
            </div>
          </a>
          <hr className=" visible sm:hidden" />
        </li>

        <li className="hover:scale-110 ease-in-out transition-all hover:text-orange-500  rounded-md">
          <a href="/products">
            <div className=" p-2 rounded-md  flex sm:flex-row flex-col-reverse gap-2 items-center">
              <span>Products</span>
              <img
                src="bottle.svg"
                className="sm:w-6 w-4"
                alt="products-icon"
              />
            </div>
          </a>
          <hr className=" visible sm:hidden" />
        </li>

        <li className="hover:scale-110 ease-in-out transition-all hover:text-orange-500  rounded-md">
          <a href="/about" className="">
            <div className=" p-2 rounded-md  flex sm:flex-row flex-col-reverse gap-2 items-center">
              <span>About</span>
              <img
                src="alert-circle.svg"
                className="sm:w-6 w-4"
                alt="alert-icon"
              />
            </div>
          </a>
          <hr className=" visible sm:hidden" />
        </li>

        <li className="hover:scale-110 ease-in-out transition-all hover:text-orange-500  rounded-md">
          <a href="/contact">
            <div className=" p-2 rounded-md  flex sm:flex-row flex-col-reverse gap-2 items-center">
              <span> Contact</span>
              <img
                src="contact.svg"
                className="sm:w-6 w-4"
                alt="contact-icon"
              />
            </div>
          </a>
        </li>
      </ul>
      <div
        className=" sm:hidden visible"
        onClick={() => {
          setHamburgerOpen(!hamburgerOpen);
        }}
      >
        {hamburgerOpen ? close : hamburger}
      </div>
    </nav>
  );
}
export default Navbar;
