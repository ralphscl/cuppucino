import Button from '../../components/button/Button'
import './Header.css';

const Header = () => {
    return (
      <div className='header'>
        {/* Parralax */}
        <div className='parallax'>
          <div className='slogan'>
            <h1>Take a cup and forget about everything for a few minutes.</h1>
            <h3>Vivamus mollis nec mi et vestibulum. Fusce nec viverra diam. Quisque cursus fermentum ipsum sed vulputate.</h3>
            <div className='action'>
              <Button type='btn-parallax read-more' text='Read More' />
              <Button type='btn-parallax view-product' text='View Product' />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;