// Package
import { Link, useLocation } from 'react-router-dom';
// Brand
import BrandLogo from '../../images/brand/cuppucino-logo-transparent.webp';
import BrandLogoWhite from '../../images/brand/cuppucino-logo-transparent-white.webp';
import BrandLogoBlack from '../../images/brand/cuppucino-logo-transparent-black.webp';
// Icon
import { ReactComponent as IconSearch } from '../../images/icons/search.svg';
import { ReactComponent as IconUser } from '../../images/icons/user.svg';
import { ReactComponent as IconCart } from '../../images/icons/cart.svg';
// Stylesheet
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <>
      <nav className="navbar">
        <div className='brand'>
          <img alt="cuppucino-logo-black" src={BrandLogoWhite} />
          <img alt="cuppucino-logo" src={BrandLogo} />
        </div>

        <div className='nav'>
          <div className='item'>
            <li><Link to="/" exact="true" className={location.pathname === '/' ? 'active' : undefined}>Home</Link></li>
          </div>
          <div className='item'>
            <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : undefined}>Menu</Link></li>
          </div>
          <div className='item'>
            <li><Link to="/vendor" className={location.pathname === '/vendor' ? 'active' : undefined}>Vendor</Link></li>
          </div>
          <div className='item'>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : undefined}>Blog</Link></li>
          </div>
          <div className='item'>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : undefined}>About</Link></li>
          </div>
          <div className='item'>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : undefined}>Contact</Link></li>
          </div>
        </div>



        <div className='actions'>
          <span>0</span>
          <IconCart />
          <IconUser />
          <IconSearch />
        </div>

        </nav>
    </>
  );
}

export default Navbar;
