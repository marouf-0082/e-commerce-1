import { ArrowRight } from "lucide-react";
import { Container } from "../container/Container";

function NewsLetter() {
  return (
    <div className="border-t border-t-gray-300">
      <Container>
        <div className="flex flex-col justify-center items-center py-16 gap-4">
          <h3 className="font-bold text-2xl">Stay in the loop</h3>
          <p className="text-slate-600">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style inspiration.
          </p>
          <div className="flex gap-3">
            <input type="email" placeholder="Enter your email" className="border border-slate-200 pl-4 py-1.5 rounded-3xl w-96 text-sm shadow-xl focus:outline-none focus:ring-1 focus:ring-[#f69e0a]"/>
            <button className="flex items-center justify-center w-12 h-9 bg-[#f69e0a] rounded-2xl cursor-pointer">
              <ArrowRight size={16} color="#000000" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewsLetter;
