import Button from '../../components/button/Button';
import BackgroundVideo from '../../videos//pexel-engin-akyurt-1776352.mp4';
import './Header.css';

const Header = () => {
    return (
      <>

      <div className='header'>
        {/* Parralax */}
        <div className='parallax'>
          {/* Background */}
          <video autoPlay muted loop id='player'>
            <source src={BackgroundVideo} type='video/mp4' />
          </video>

          <div className='slogan'>
            <h1>Take a cup</h1>
            <h2>Forget about everything in a minute.</h2>
            <p>
                Consectetur adipiscing elit. Morbi convallis metus non euismod gravida. 
                Etiam magna tortor, elementum at pharetra a, commodo vitae mi. Integer eget ultrices magna, non congue 
                tellus.
            </p>
            <div className='action'>
              <Button type='btn-parallax read-more' text='Read More' />
              <Button type='btn-parallax view-product' text='View Product' />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Header;