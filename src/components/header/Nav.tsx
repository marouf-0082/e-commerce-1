import { Container } from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useCartContextProvider } from "../../context/CartContext";
import { ShoppingCart, BookHeart, LogOut, Search } from "lucide-react";
import { useSignUpContextProvider } from "../../context/SignUpContext";
import { useEffect, useState } from "react";
import CircleUser from "../../assets/circle-user.svg";
import SearchBox from "../searchBox/SearchBox";
import DarkMode from "../../ui/DarkMode";
import clsx from "clsx";

function Nav() {
  const { cartQty } = useCartContextProvider();
  const { data, isSignUp, handleSignOut } = useSignUpContextProvider();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [handleSignOut]);
  return (
    <header
      className={clsx("sticky top-0 w-full py-4 shadow-md flex items-center z-40 bg-background overflow-y-visible transition-all duration-300", isSearchOpen ? "pb-4" : "pb-2")}
    >
      <Container>
        <div className="relative flex justify-between items-center">
          <Link
            to={"/"}
            className="text-2xl hover:text-[#363636] dark:hover:text-[#bfbfbf] transition-all duration-300"
          >
            BLOOM<span className="text-[#f69e0a]">SHOP</span>
          </Link>
          <SearchBox className={`hidden sm:w-sm lg:block`} />
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center relative cursor-pointer">
              <Search
                className="text-svgIcon lg:hidden"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              <DarkMode className="hidden sm:block"/>
              <NavLink
                to={"/fav"}
                className="rounded-full p-2 hover:bg-svgIconBackground transition-all duration-300"
              >
                <BookHeart className="text-svgIcon" />
              </NavLink>
              <NavLink
                to={"/cart"}
                className="rounded-full p-2 hover:bg-svgIconBackground transition-all duration-300"
              >
                <ShoppingCart className="text-svgIcon" />
              </NavLink>
              {cartQty > 0 && (
                <span className="absolute -top-1 -right-2 w-5 h-5 flex items-center justify-center select-none rounded-full bg-[#f69e0a] text-white text-xs font-bold">
                  {cartQty}
                </span>
              )}
            </div>
            <div className="flex gap-2 h-7">
              {isSignUp ? (
                <>
                  <button
                    className="capitalize cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {data?.username}
                  </button>
                  <div
                    className={clsx(
                      "absolute top-18 -right-25 w-52 h-64 flex flex-col justify-between items-center p-3 border-2 border-gray-200 rounded-3xl backdrop-blur-2xl transition-all duration-300 transition-discrete ease-in-out",
                      isOpen
                        ? "opacity-100 -translate-x-5 translate-z-5 scale-105"
                        : "opacity-0 translate-x-25 translate-z-0 scale-100",
                    )}
                  >
                    <div className="flex flex-col items-center gap-3 justify-center">
                      <div className="w-16 h-16 rounded-full">
                        <img
                          src={CircleUser}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <h3 className="capitalize font-medium">
                        hi {data?.fullname}.
                      </h3>
                    </div>
                    <div className="self-end">
                      <button
                        className="flex gap-2 justify-center cursor-pointer"
                        onClick={handleSignOut}
                      >
                        <h3>SignOut</h3>
                        <LogOut size={20} color="#f69e0a" />
                      </button>
                    </div>
                  </div>
                  {/* <Button
                    onClick={handleSignOut}
                    className=" secondry-btn text-[14px] rounded-3xl px-2 hover:text-[#7c4b01]"
                  >
                    Sign out
                  </Button> */}
                </>
              ) : (
                <div className="hidden sm:flex gap-2 items-center">
                  <button className="secondry-btn text-black text-[14px] rounded-3xl py-1 px-3 hover:text-[#7c4b01]">
                    Sign In
                  </button>
                  <Link
                    to={"/signup"}
                    className="primary-btn py-1 text-[14px] px-3 rounded-3xl"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        {isSearchOpen && (
          <div
            className={`transition-all duration-1000 ${
              isSearchOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <SearchBox className="lg:hidden mt-4" />
          </div>
        )}
      </Container>
    </header>
  );
}

export default Nav;
