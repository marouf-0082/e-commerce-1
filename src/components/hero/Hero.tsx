import React from "react";
import { Container } from "../container/Container";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-2 mt-30 mb-10">
        <h1 className="text-[36px] text-[#f69e0a] font-semibold tracking-tight xl:text-[48px]">
          Step Into Style
        </h1>
        <p className="tracking-wider xl:text-[18px] font-medium">
          Discover our latest collection of premium sneakers <br /> — comfort,
          design, and performance in every pair.
        </p>
      </div>
    </Container>
  );
}

export default Hero;
