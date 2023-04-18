// Component
import Mastercard from '../../components/mastercard/Mastercard';
import Button from '../../components/button/Button';
// CSS
import './Discount.css';

const Discount = () => {

    return (
        <>
            <div className='discount'>
                <div className='container'>
                    <section>
                        <Mastercard/>
                    </section>
                    <div className='wallpaper'> </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Discount;