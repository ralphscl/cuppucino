import { useState, useRef } from 'react';
// Component
import Button from '../../components/button/Button';
// SVG
import { ReactComponent as CoffeeBean } from '../../images/icons/coffee-beans.svg';
import { ReactComponent as TeaMug } from '../../images/icons/tea-mug.svg';
import { ReactComponent as WineGrapes } from '../../images/icons/wine-grapes.svg';
import { ReactComponent as BeerMug } from '../../images/icons/beer-mug.svg';
import { ReactComponent as Waiter } from '../../images/icons/waiter.svg';
// PNG
import coffeeBg from '../../images/wallpapers/unsplash-fahmi-fakhrudin-nzyzAUsbV0M.jpg';
import teaBg from '../../images/wallpapers/unsplash-matt-seymour-PVSCfkqcMP4.jpg';
import foodBg from '../../images/wallpapers/unsplash-louis-hansel-LIJujhJviMI.jpg';
import wineBg from '../../images/wallpapers/unsplash-ca-creative-z38uTGNpNnA.jpg';
import beerBg from '../../images/wallpapers/unsplash-gerrie-van-der-walt-2uSnxq3M4GE.jpg';
// CSS
import './Products.css';

function GalleryLarge(props) {
  return (
    <div className='gallery1'>
      {
        props.galleryItems.map(item => {
          return (
            <div 
              className={item.label === props.category ? 'active cat-card' : 'cat-card'} 
              style={{backgroundImage: `url(${item.bg})`}}
              onClick={() => {props.setCategory(item.label)}}
            >
              {item.icon}
              <p>
                Sed sagittis sodales lobortis. Curabitur in eleifend turpis,
                id vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
              </p>
            </div>
          )
        })
      }
    </div>
  );
}

function GallerySmall(props) {
  return (
    <div className='gallery2'>
      <div className='items'>
      {
        props.galleryItems.map(item => {
          return (
            <div className='item'>
              <img 
                src={item.bg} 
                alt={`${item.label}-background`} 
                className='carousel-image' 
                draggable='false'
              />
              <p>
                Sed sagittis sodales lobortis. Curabitur in eleifend turpis,
                id vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies.
              </p>
            </div>
          )
        })
     }
      </div>
    </div>
  )
}

const Products = () => {
  const [category, setCategory] = useState("")
  const galleryItems = [
    {
      label: 'coffee',
      icon: <CoffeeBean />,
      bg: coffeeBg,
    },{
      label: 'tea',
      icon: <TeaMug />,
      bg: teaBg,
    },{
      label: 'food',
      icon: <Waiter />,
      bg: foodBg,
    },{
      label: 'wine',
      icon: <WineGrapes />,
      bg: wineBg,
    },{
      label: 'beer',
      icon: <BeerMug />,
      bg: beerBg,
    }
  ];

  return (
    <div className='products'>
      <p className='bg'>Products</p>
      <h2 className='subheading'>Browser our Menu</h2>
      <h1 className='heading'>Recent Products</h1>
      
      <GalleryLarge 
        category={category} 
        setCategory={setCategory} 
        galleryItems={galleryItems}
      />

      <GallerySmall
        galleryItems={galleryItems}
      />

      <div className='action'>
        <Button className="btn-home-general" text="view all products" />
      </div>
    </div>
  );
}

export default Products;