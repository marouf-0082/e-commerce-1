import { ArrowRight } from "lucide-react";
import { Container } from "../container/Container";

function NewsLetter() {
  return (
    <div className="border-b border-border">
      <Container>
        <div className="flex flex-col justify-center items-center py-16 gap-4">
          <h3 className="font-bold text-2xl">Stay in the loop</h3>
          <p className="max-w-xl
        text-center
        text-sm
        text-foreground-2">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style inspiration.
          </p>
          <div className="flex
          flex-row
          justify-center
        w-full
        max-w-lg
        gap-3

        sm:flex-row">
            <input type="email" placeholder="Enter your email" className="ring-1 ring-border text-foreground pl-4 py-1.5 rounded-3xl w-full max-w-96 text-sm shadow-shadow focus:outline-none placeholder:text-foreground-2"/>
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
