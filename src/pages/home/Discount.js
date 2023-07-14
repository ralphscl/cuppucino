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
                    <div>
                    <h3>Special Offer</h3>
                    <h1>Get your discount</h1>
                    <section>
                        <Membercard/>
                    </section>
                    <p>
                        Morbi malesuada dui in iaculis lacinia. Duis laoreet ut 
                        liberonec tincidunt. Maecenas a eros finibus, condimentum 
                        tortoreget, auctor nunc. Aenean a efficitur leo.
                    </p>
                    <Button className='btn-discount' text='Get now' />
                    </div>
                    <div className='wallpaper'> </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Discount;