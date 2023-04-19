// Image
import Logo from '../../images/mastercard/logo.png';
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
                        <h5>Master Card</h5>
                    </span>
                    <img src={Chip} alt="" class="chip"/>
                </header>
                <div class="details">
                    <div class="name-number">
                        <h6>Card Number</h6>
                        <h5 class="number">4374 4010 2032 8754</h5>
                        <h5 class="name">Cuppucino</h5>
                    </div>
                    <div class="valid-date">
                        <h6>VALID THRU</h6>
                        <h5>03/2023</h5>
                    </div>
                </div>
            </div>
            <div class="card back">
                <h6>
                    For customer service, call 08000000000 
                    or email at customerservice@cuppucino.com
                </h6>
                <span class="magnetic-strip"></span>
                <div class="signature"><i>009</i></div>
                <h5>
                    This card is issued by and remains the property of mastercard. 
                    If found,please return to any Bank of America Branch or
                    E-business & Card Services 3100 14th St NW STE 101, Washington, DC 20010.
                </h5>
                <h5><i>wThis card was created by techvaness</i></h5>
            </div>
        </div>
        </>
    );
  }
  
  export default Membercard;