import { Link } from "react-router-dom";

function ProductRelatedItem({
  image,
  name,
  price,
  id,
}: {
  image: string;
  name: string;
  price: number;
  id: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="rounded-3xl border border-border overflow-hidden shadow flex flex-col group hover:shadow-md transition-all duration-300">
        <div className="w-full h-72 overflow-hidden">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" src={image} alt={name} />
        </div>
        <div className="p-4">
          <h3 className="pb-2 font-bold">{name}</h3>
          <p className="text-[19px] font-bold !text-[#f69e0a]">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductRelatedItem;
