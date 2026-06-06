import { Container } from "../container/Container";

import { RotateCcw, Shield, Truck } from "lucide-react";

function FeatureBar() {
  return (
    <div className="mt-25">
      <Container>
        <div className="grid grid-cols-3 items-center px-6 border border-gray-300 shadow-md shadow-gray-200 py-8 rounded-3xl">
          <div className="flex gap-3">
            <div className="w-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <Truck color="#FC9D0F" />
            </div>
            <div>
              <h2 className="font-semibold text-[#262626]">Free Shipping</h2>
              <p>On orders over $50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <Shield color="#FC9D0F"/>
            </div>
            <div>
              <h2 className="font-semibold text-[#262626]">24/7 Support</h2>
              <p>Get help anytime</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <RotateCcw color="#FC9D0F" />
            </div>
            <div>
              <h2 className="font-semibold text-[#262626]">30-Day Returns</h2>
              <p>Not satisfied? Return it</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeatureBar;
