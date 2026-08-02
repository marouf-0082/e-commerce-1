import { Container } from "../components/container/Container";
import { useFavContextProvider } from "../context/FavProductsContext";
import ProductItem from "../components/productItems/ProductItem";

function FavProduct() {
  const { favItems } = useFavContextProvider();
  return (
    <div>
      <Container>
        <div className="mt-35">
          {favItems.length > 0 ? (
            <div>
              <h1 className="text-center text-3xl">Favorites</h1>
              <div className="grid
              grid-cols-1
              gap-6
              py-10

              sm:grid-cols-2

              lg:grid-cols-3">
                {favItems.map((item) => (
                  <ProductItem {...item} key={item.id} />
                ))}
              </div>
            </div>
          ) : (
            <div>No favorite products found.</div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default FavProduct;
