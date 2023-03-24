// SVG
import { ReactComponent as CoffeeCup } from '../../images/others/coffee-cup.svg';
import { ReactComponent as CoffeeBean } from '../../images/icons/coffee-beans.svg';
import { ReactComponent as TeaMug } from '../../images/icons/tea-mug.svg';
import { ReactComponent as WineGrapes } from '../../images/icons/wine-grapes.svg';
import { ReactComponent as BeerMug } from '../../images/icons/beer-mug.svg';
// Utils
import { capitalizeFirstLetter } from '../../utils/StringUtils';
// CSS
import './Highlight.css';

const Highlight = () => {
    return (
      <div className='highlight'>
        <div className='left'>
            <h2>Who we are</h2>
            <h1>What we serve</h1>
            <p> 
                Sed sagittis sodales lobortis. Curabitur in eleifend turpis, 
                id vehicula odio. Donec pulvinar tellus egetmagna aliquet ultricies. 
                Praesent gravida hendrerit ex, nec eleifend sem convallis vitae.
            </p>
            <CoffeeCup className='path' />
        </div>
        <div className='right'>

          {['coffee', 'tea', 'wine', 'beer'].map(item => {
            return(
              <div>
                {
                  item === 'coffee' ? <CoffeeBean/> 
                  : item === 'tea' ? <TeaMug/> 
                  : item === 'wine' ? <WineGrapes/> 
                  : <BeerMug/>
                }
                <h2>{capitalizeFirstLetter(item)}</h2>
                <p>
                    Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. 
                    Donec pulvinar tellus eget magna aliquet ultricies.
                </p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Highlight;