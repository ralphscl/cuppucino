import Header from './Header';
import Highlight from './Highlight';
import Products from './Products';
import Discount from './Discount';
import Partners from './Partners';
import Blogs from './Blogs';

const Home = () => {
  return (
    <div className="home">
      <Header/> 
      <Highlight/>
      <Products/>
      <Discount />
      <Partners />
      <Blogs/>
    </div>
  );
}

export default Home;
