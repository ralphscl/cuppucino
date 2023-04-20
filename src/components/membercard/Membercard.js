// Image
import Logo from '../../images/brand/cuppucino-logo-transparent-white.webp';
import Chip from '../../images/mastercard/chip.png';
// CSS
import './Membercard.css';

const Membercard = () => {

    return (
        <>
        <div class="membercard">
            <div class="card front">
                <header>
                    <span class="logo">
                        <img src={Logo} alt=""/>
                    </span>
                </header>
                <div class="details">
                    <div class="name-number">
                        <h6>Membership Number</h6>
                        <h5 class="number">4636 9765 2321 5483</h5>
                    </div>
                    <div class="valid-date">
                        <h6>VALID THRU</h6>
                        <h5>03/2027</h5>
                    </div>
                </div>
            </div>
            <div class="card back">
                <h6>
                    For reservations, call 08000000000 
                    or email at customerservice@cuppucino.com
                </h6>
                <span class="magnetic-strip"></span>
                <h5>
                    This card is issued by and remains the property of cuppucino. <br/>
                </h5>
            </div>
        </div>
        </>
    );
  }
  
  export default Membercard;