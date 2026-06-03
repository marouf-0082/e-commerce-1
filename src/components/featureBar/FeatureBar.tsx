import React from "react";
import { Container } from "../container/Container";
import delivery from "../../assets/delivery.svg";
import warranty from "../../assets/warranty.svg";
import support from "../../assets/return.svg";

function FeatureBar() {
  return (
    <div className="mt-25">
      <Container>
        <div className="grid grid-cols-3 items-center px-6 border border-gray-300 shadow-md shadow-gray-200 py-8 rounded-3xl">
          <div className="flex gap-3">
            <div>
              <img src={delivery} alt="Delivery" className="w-12 bg-orange-100 p-2 rounded-full"/>
            </div>
            <div>
              <h2>Free Shipping</h2>
              <p>On orders over $50</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <img src={warranty} alt="Warranty" className="w-12 bg-orange-100 p-2 rounded-full"/>
            </div>
            <div>
              <h2>24/7 Support</h2>
              <p>Get help anytime</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
                <img src={support} alt="Support" className="w-12 bg-orange-100 p-2 rounded-full"/>
            </div>
            <div>
              <h2>30-Day Returns</h2>
              <p>Not satisfied? Return it</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeatureBar;
