import React from "react";
import { Container } from "../container/Container";

function Hero() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center gap-3 mt-35">
        <h1 className="text-5xl text-[#f69e0a] font-semibold tracking-tight">
          Step Into Style
        </h1>
        <p className="text-[19px] text-slate-900">
          Discover our latest collection of premium sneakers <br /> — comfort,
          design, and performance in every pair.
        </p>
      </div>
    </Container>
  );
}

export default Hero;
