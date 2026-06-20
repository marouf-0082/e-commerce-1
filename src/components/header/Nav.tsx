import { Container } from "../container/Container";
import { Link, NavLink } from "react-router-dom";
import { useCartContextProvider } from "../../context/CartContext";
import { ShoppingCart, Search } from "lucide-react";

function Nav() {
  const { cartQty } = useCartContextProvider();
  return (
    <header className="fixed top-0 w-full h-18 shadow shadow-slate-300 bg-white flex items-center z-50">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-2xl">
            BLOOM<span className="text-[#f69e0a]">SHOP</span>
          </Link>
          <div className="flex gap-8 ">
            <div className="flex items-center">
              <Search color="#333333" />
            </div>
            <div className="flex items-center relative cursor-pointer">
              <NavLink to={"/cart"}>
                <ShoppingCart color="#333333" />
              </NavLink>
              {cartQty > 0 && (
                <span className="absolute -top-2 -right-3 w-5 h-5 flex items-center justify-center rounded-full bg-[#f69e0a] text-white text-xs font-bold">
                  {cartQty}
                </span>
              )}
            </div>
            <div className="flex gap-4">
              <button>Sign In</button>
              <button className="bg-[#f69e0a] py-1 px-3 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Nav;
