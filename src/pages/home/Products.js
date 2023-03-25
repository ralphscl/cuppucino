
import { ReactComponent as CoffeeBean } from '../../images/icons/coffee-beans.svg';
import { ReactComponent as TeaMug } from '../../images/icons/tea-mug.svg';
import { ReactComponent as WineGrapes } from '../../images/icons/wine-grapes.svg';
import { ReactComponent as BeerMug } from '../../images/icons/beer-mug.svg';
import { ReactComponent as Waiter } from '../../images/icons/waiter.svg';
// CSS
import './Products.css';

const Products = () => {
    return (
      <>
      <div className='products'>
        <h1>Products</h1>
        <div className='gallery'>
          {
            ['coffee', 'tea', 'food', 'beer', 'wine'].map(item => {
              return(
                <div className='card'>
                  {
                    item === 'coffee' ? <CoffeeBean/> 
                    : item === 'tea' ? <TeaMug/>
                    : item === 'food' ? <Waiter/>
                    : item === 'wine' ? <WineGrapes/> 
                    : <BeerMug/>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      </>
    );
  }
  
  export default Products;