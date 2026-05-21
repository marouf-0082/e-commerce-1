import { useGetProducts } from '../services/product/hooks'
import { Container } from '../container/Container';
import { Link } from 'react-router-dom';
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
                    <Link to={`/products/${item.id}`} key={item.id}>
                        <ProductItem {...item}/>
                    </Link>
                ))
            }
            </div>
        </Container>
  )
}

export default Products