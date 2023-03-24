import Header from './Header';
import Highlight from './Highlight';
import Products from './Products';
import Partners from './Partners';

const Home = () => {
  return (
    <div className="home">
      <Header/> 
      <Highlight/>
      <Products/>
      <Partners />
    </div>
  );
}

export default Home;
