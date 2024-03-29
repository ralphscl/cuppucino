
// Icon
import { ReactComponent as Facebook } from '../../images/social/facebook.svg';
import { ReactComponent as Instagram } from '../../images/social/instagram.svg';
import { ReactComponent as Twitter } from '../../images/social/twitter.svg';
import { ReactComponent as Reddit } from '../../images/social/reddit.svg';
// Component
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
// CSS
import './Subscription.css';

const Home = () => {
  return (
    <div className="subscription">
      <div className='container'>
        <div className='subscribe'>
            <h2>Subscribe</h2>
            <h1>Weekly newsletter</h1>
        </div>
        <div className='form'>
          <Input className='inp-home-subscribe' type='text' />
          <Button className="btn-home-subscribe" text="Subscribe" />
        </div>
        <div className='social'>
            <div><Facebook /></div>
            <div><Instagram /></div>
            <div><Twitter /></div>
            <div><Reddit /></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
