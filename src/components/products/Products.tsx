import { useGetProducts } from '../services/product/hooks'
import { Container } from '../container/Container';
import ProductItem from '../productItem/ProductItem';

function Products() {
    const {data, isLoading} = useGetProducts();
    console.log(data)
  return (
        <Container>
            <div className='grid gap-6 sm:grid-cols-3 px-32 py-18'>
                {isLoading ? (
                <h1>Loading...</h1>
            ) :  data && data.map((item) => (
                        <ProductItem {...item} key={item.id}/>
                ))
            }
            </div>
        </Container>
  )
}

export default Products