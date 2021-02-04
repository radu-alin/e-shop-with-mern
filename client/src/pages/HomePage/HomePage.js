import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';
import Carousel from '../../components/Carousel/Carousel';
import Meta from '../../components/Meta/Meta';

const HomePage = (props) => (
  <main id='HomePage'>
    <Meta />
    <Carousel />
    <LatestProducts />
  </main>
);

export default HomePage;
