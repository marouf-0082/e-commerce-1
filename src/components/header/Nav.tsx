import { Container } from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useCartContextProvider } from "../../context/CartContext";
import { ShoppingCart, Search, BookHeart, LogOut } from "lucide-react";
import Button from "../../ui/Button";
import { useSignUpContextProvider } from "../../context/SignUpContext";
import { useEffect, useState } from "react";
import CircleUser from "../../assets/circle-user.svg";
import SearchBox from "../searchBox/SearchBox";

function Nav() {
  const { cartQty } = useCartContextProvider();
  const { data, isSignUp, handleSignOut } = useSignUpContextProvider();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
  }, [handleSignOut]);
  return (
    <header className="fixed top-0 w-full h-18 shadow shadow-slate-300 bg-white flex items-center z-50">
      <Container>
        <div className="flex justify-between items-center group">
          <Link to={"/"} className="text-2xl group-hover:text-[#363636]">
            BLOOM<span className="text-[#f69e0a]">SHOP</span>
          </Link>
          <SearchBox />
          <div className="flex gap-4 items-center">
            <div className="flex items-center relative cursor-pointer">
              <NavLink
                to={"/fav"}
                className="rounded-full p-2 hover:bg-gray-100 transition-all duration-300"
              >
                <BookHeart color="#333333" />
              </NavLink>
              <NavLink
                to={"/cart"}
                className="rounded-full p-2 hover:bg-gray-100 transition-all duration-300"
              >
                <ShoppingCart color="#333333" />
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
                  <Button
                    className="capitalize cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {data?.username}
                  </Button>
                  <div
                    className={`absolute top-20 right-20 w-52 h-64 flex flex-col justify-between items-center p-3 border-2 border-gray-200 rounded-3xl backdrop-blur-2xl bg-gray-200 ${isOpen ? "opacity-100 -translate-x-5" : "opacity-0"} transition-all duration-300 transition-discrete ease-in-out`}
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
                      <Button
                        className="flex gap-2 justify-center cursor-pointer"
                        onClick={handleSignOut}
                      >
                        <h3>SignOut</h3>
                        <LogOut size={20} color="#f69e0a" />
                      </Button>
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
                <>
                  <Button className="secondry-btn text-[14px] rounded-3xl px-2 hover:text-[#7c4b01]">
                    Sign In
                  </Button>
                  <Link
                    to={"/signup"}
                    className="primary-btn py-1 text-[14px] px-3 rounded-3xl"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Nav;
