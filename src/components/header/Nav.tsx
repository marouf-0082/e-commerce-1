import React from "react";
import { Container } from "../container/Container";

function Nav() {
  return (
    <header className="fixed top-0 w-full h-18 shadow shadow-slate-300 bg-white flex items-center z-50">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-2xl">
            BLOOM<span className="text-[#f69e0a]">SHOP</span>
          </div>
          <div className="flex gap-8 ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart2"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
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
