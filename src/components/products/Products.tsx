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
            <Loader size="xl"/>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-3 px-32 py-18">
            {data &&
              data.map((item) => <ProductItem {...item} key={item.id} />)}
          </div>
        )}
      </div>
    </Container>
  );
}

export default Products;
