// Package
import Tilt from 'react-parallax-tilt';
// Component
import Button from '../../components/button/Button';
// SVG
import { ReactComponent as Eye } from '../../images/icons/eye.svg';
import { ReactComponent as Messenger } from '../../images/icons/messenger.svg';
// CSS
import './Blogs.css';

const Blogs = () => {

    return (
      <div className='blogs'>
        <p className='bg'>Blogs</p>
        <h2 className='subheading'>Read our Stories</h2>
        <h1 className='heading'>Recent posts</h1>

        <div className='container'>
          {
            [1, 2, 3].map(item => {
              return(
                <Tilt>
                  <div className='card'>
                    <img 
                      src={'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}  
                      alt={`random-pexel`} 
                    />
                    <div className='content'>
                      <h1>{"Lorem Ipsum Dolor".substring(0,15) + "..."}</h1>
                      <p>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt sapien vitae ipsum luctus mollis. Suspendisse potenti. Pellentesque tempus tortor lorem. Nullam facilisis ipsum quis mi bibendum congue. Phasellus sit amet luctus sapien. Integer interdum tincidunt neque in venenatis. Phasellus lorem elit, hendrerit quis enim ac, volutpat dictum lacus. In hac habitasse platea dictumst. Pellentesque rutrum dignissim purus eget faucibus. Aenean elementum, nunc sed bibendum euismod, urna diam lobortis orci, quis porta felis neque facilisis erat.".substring(0, 200) + "..."}
                      </p>
                    </div>
                    <div className='footer'>
                      <h1 className='date'>31</h1>
                      <p className='month'>September 2022</p>
                      <p className='views'> <Eye /> 9,999</p>
                      <p className='comments'> <Messenger/> 999</p>
                    </div>
                  </div>
                </Tilt>
              )
            })
          }
        </div>

        <div className='action'>
          <Button type="btn-home-general" text="view all products" />
        </div>
      </div>
    );
  }
  
  export default Blogs;