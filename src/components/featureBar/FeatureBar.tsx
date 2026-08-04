
import { RotateCcw, Shield, Truck } from "lucide-react";

function FeatureBar() {
  return (
    <div className="mt-25">
        <div className="grid grid-cols-1 gap-8 max-w-[80%] mx-auto md:px-4 md:gap-2 md:grid-cols-3 items-center p-8 shadow-[0_0_8px_rgba(0,0,0,0.5)] dark:shadow-[0_0_8px_rgba(245,245,245,0.5)] rounded-3xl">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <Truck color="#FC9D0F" />
            </div>
            <div>
              <h2 className="font-semibold">Free Shipping</h2>
              <p>On orders over $50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <Shield color="#FC9D0F"/>
            </div>
            <div>
              <h2 className="font-semibold">24/7 Support</h2>
              <p>Get help anytime</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-orange-100 p-2 rounded-full flex justify-center items-center">
              <RotateCcw color="#FC9D0F" />
            </div>
            <div>
              <h2 className="font-semibold">30-Day Returns</h2>
              <p>Not satisfied? Return it</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default FeatureBar;
