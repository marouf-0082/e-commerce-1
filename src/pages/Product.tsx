import { Link, useParams } from "react-router-dom";
import { Container } from "../components/container/Container";
import {
  useGetProduct,
  useGetProducts,
} from "../components/services/product/hooks";
import FeatureBar from "../components/featureBar/FeatureBar";
import ProductItem from "../components/productItem/ProductItem";

function Product() {
  const params = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetProduct(params.id as string);
  const { data: products, isLoading: isProductsLoading } = useGetProducts();
  console.log(products);
  return (
    <div>
      <Container>
        <div className="mt-25 mb-16">
          <nav className="mb-8">
            <Link
              to={"/"}
              className="flex gap-2 text-[14px] hover:bg-[#fffde8] rounded-3xl px-3 py-2 w-max items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                className="bi bi-arrow-bar-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"
                />
              </svg>{" "}
              Return to Shop
            </Link>
          </nav>
          {isLoading ? (
            "Loading..."
          ) : (
            <div className="grid grid-cols-2 gap-12 px-20">
              <div className="w-full max-w-[500px] px-4 mx-auto">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto w-full object-cover max-h-[500px] rounded-3xl border border-slate-200 shadow-md"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f69e0a"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-primary text-[#f69e0a] "
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f69e0a"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-primary text-[#f69e0a] "
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f69e0a"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-primary text-[#f69e0a] "
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f69e0a"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-primary text-[#f69e0a] "
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f69e0a"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star fill-primary text-[#f69e0a] "
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                  <p className="text-[14px]">(4.8) • 127 reviews</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <p>
                  Lightweight running sneakers designed for speed and comfort.
                  Breathable mesh and durable sole.
                </p>
                <div className="border-t border-gray-300 mt-5 pt-5">
                  <div>
                    <label htmlFor="quantity">Quantity</label>
                    <div className="flex border border-gray-300 w-35 h-11 items-center justify-around mt-2 rounded-3xl ">
                      <div className="">-</div>
                      <span>1</span>
                      <div>+</div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-32 py-2 bg-[#f69e0a] rounded-3xl text-[15px] hover:bg-[#ffa408] transition-colors duration-300">
                      Add to Cart
                    </button>
                    <button className="px-32 py-2 border border-gray-200 shadow rounded-3xl text-[15px] hover:bg-[#fffbef] transition-colors duration-300">
                      Buy Now
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          )}
          <FeatureBar />
          <div className="mt-20">
            <h2 className="font-bold text-2xl">Related Products</h2>
            <div className="grid grid-cols-4 gap-5 mt-8">
              {isProductsLoading
                ? "Loading..."
                : products
                    ?.filter((product) => product.id !== params.id)
                    .slice(0, 4)
                    .map((product) => (
                      <ProductItem {...product} key={product.id}/>
                    ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
