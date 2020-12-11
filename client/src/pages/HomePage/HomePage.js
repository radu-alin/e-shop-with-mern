import LatestProducts from '../../components/Product/LatestProducts/LatestProducts';
import Carousel from '../../components/Carousel/Carousel';
const HomePage = (props) => {
  return (
    <main id="HomePage">
      <Carousel />
      <LatestProducts />
    </main>
  );
};

export default HomePage;
