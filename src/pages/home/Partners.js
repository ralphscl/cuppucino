import BakeryHouse from '../../images/partners/bakery-house.png';
import BeerBrewer from '../../images/partners/beer-brewer.png';
import FreshCoffee from '../../images/partners/fresh-coffee.png';
import OrganicCoffee from '../../images/partners/organic-coffee.png';
import PremiumWine from '../../images/partners/premium-wine.png';
import Resto from '../../images/partners/resto.png';
// CSS
import './Partners.css';

const Partners = () => {
    return (
      <div className='partners'>
        <img src={BakeryHouse} alt={BakeryHouse} />
        <img src={BeerBrewer} alt={BeerBrewer} />
        <img src={FreshCoffee} alt={FreshCoffee} />
        <img src={OrganicCoffee} alt={OrganicCoffee} />
        <img src={PremiumWine} alt={PremiumWine} />
        <img src={Resto} alt={Resto} />
      </div>
    );
  }
  
  export default Partners;