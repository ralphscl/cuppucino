import Header from './Header';
import Highlight from './Highlight';
import Products from './Products';
import Partners from './Partners';
import Blogs from './Blogs';

const Home = () => {
  return (
    <div className="home">
      <Header/> 
      <Highlight/>
      <Products/>
      <Blogs/>
      <Partners />
    </div>
  );
}

export default Home;
