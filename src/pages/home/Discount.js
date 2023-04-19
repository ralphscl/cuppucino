// Component
import Membercard from '../../components/membercard/Membercard';
import Button from '../../components/button/Button';
// CSS
import './Discount.css';

const Discount = () => {

    return (
        <>
            <div className='discount'>
                <div className='container'>
                    <section>
                        <Membercard/>
                    </section>
                    <div className='wallpaper'> </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Discount;