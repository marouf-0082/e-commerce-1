import React from "react";
import { Container } from "../container/Container";

function NewsLetter() {
  return (
    <div className="border-t border-t-gray-300">
      <Container>
        <div className="flex flex-col justify-center items-center py-16 gap-4 border-b border-b-gray-300">
          <h3 className="font-bold text-2xl">Stay in the loop</h3>
          <p className="text-slate-600">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style inspiration.
          </p>
          <div className="flex gap-3">
            <input type="email" placeholder="Enter your email" className="border border-slate-200 pl-4 py-1.5 rounded-3xl w-96 text-sm shadow-xl focus:outline-none focus:ring-1 focus:ring-[#f69e0a]"/>
            <button className="flex items-center justify-center w-12 h-9 bg-[#f69e0a] rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewsLetter;
