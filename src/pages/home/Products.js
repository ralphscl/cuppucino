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


function GalleryLarge(props) {
  return (
  <div className={props.item === props.category ? 'active cat-card' : 'cat-card'} onClick={() => {props.setCategory(props.item);}}>
    {props.item === 'coffee' ? <CoffeeBean /> 
      : props.item === 'tea' ? <TeaMug /> 
      : props.item === 'food' ? <Waiter /> 
      : props.item === 'wine' ? <WineGrapes /> 
      : <BeerMug />
    }
    <p>
      Sed sagittis sodales lobortis. Curabitur in eleifend turpis,
      id vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
    </p>
  </div>
  );
}


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
            return (<>
              <GalleryLarge category={category} setCategory={setCategory} item={item}></GalleryLarge>
            </>
            )
          })
        }
      </div>
      <div className='action'>
        <Button class="btn-home-general" text="view all products" />
      </div>
    </div>
  );
}

export default Products;