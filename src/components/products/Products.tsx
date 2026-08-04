import { useGetProducts } from "../services/product/hooks";
import { Container } from "../container/Container";
import ProductItem from "../productItems/ProductItem";
import Loader from "../loader/Loader";

function Products() {
  const { data, isLoading } = useGetProducts();
  return (
    <Container>
      <div>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader size="xl" />
          </div>
        ) : (
          <div
            className=" grid
              grid-cols-1
              gap-6
              py-10

              sm:grid-cols-2

              lg:grid-cols-3
              2xl:grid-cols-4
              "
          >
            {data &&
              data.map((item) => <ProductItem {...item} key={item.id} />)}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Products;
