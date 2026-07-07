import { Container } from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useCartContextProvider } from "../../context/CartContext";
import { ShoppingCart, Search } from "lucide-react";
import Button from "../../ui/Button";
import { useSignUpContextProvider } from "../../context/SignUpContext";

function Nav() {
  const { cartQty } = useCartContextProvider();
  const { data, isSignUp, handleSignOut } = useSignUpContextProvider();
  return (
    <header className="fixed top-0 w-full h-18 shadow shadow-slate-300 bg-white flex items-center z-50">
      <Container>
        <div className="flex justify-between items-center group">
          <Link to={"/"} className="text-2xl group-hover:text-[#363636]">
            BLOOM<span className="text-[#f69e0a]">SHOP</span>
          </Link>
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <Search color="#333333" />
            </div>
            <div className="flex items-center relative cursor-pointer">
              <NavLink
                to={"/cart"}
                className="rounded-full p-2 hover:bg-gray-100"
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
                  <Button className="capitalize">{data?.username}</Button>
                  <Button
                    onClick={handleSignOut}
                    className=" secondry-btn text-[14px] rounded-3xl px-2 hover:text-[#7c4b01]"
                  >
                    Sign out
                  </Button>
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
