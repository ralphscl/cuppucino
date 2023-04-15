import { useState } from 'react';
// Component
import Button from '../../components/button/Button';
// SVG
import { ReactComponent as CoffeeBean } from '../../images/icons/coffee-beans.svg';
import { ReactComponent as TeaMug } from '../../images/icons/tea-mug.svg';
import { ReactComponent as WineGrapes } from '../../images/icons/wine-grapes.svg';
import { ReactComponent as BeerMug } from '../../images/icons/beer-mug.svg';
import { ReactComponent as Waiter } from '../../images/icons/waiter.svg';
// CSS
import './Products.css';

const Products = () => {
  const [category, setCategory] = useState("")

    return (
      <div className='products'>
        <p className='bg'>Products</p>
        <h2 className='subheading'>Browser our Menu</h2>
        <h1 className='heading'>Recent Products</h1>
        <div className='gallery'>
          {
            ['coffee', 'tea', 'food', 'beer', 'wine'].map(item => {
              return(
                <div className={item === category ? 'active cat-card' : 'cat-card'} onClick={() => {setCategory(item)}}>
                  {
                    item === 'coffee' ? <CoffeeBean/> 
                    : item === 'tea' ? <TeaMug/>
                    : item === 'food' ? <Waiter/>
                    : item === 'wine' ? <WineGrapes/> 
                    : <BeerMug/>
                  }
                  <p>
                    Sed sagittis sodales lobortis. Curabitur in eleifend turpis, 
                    id vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
                  </p>
                </div>
              )
            })
          }
        </div>
        <div className='action'>
          <Button type="btn-home-general" text="view all products" />
        </div>
      </div>
    );
  }
  
  export default Products;