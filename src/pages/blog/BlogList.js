import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API
import { fetchPosts } from '../../api/blogAPI';
// Utils
import { capitalizeFirstLetter } from '../../utils/StringUtils';

const BlogList = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch paginated posts (10 item)
    fetchPosts(page, 10)
      .then(posts => {
        setPosts(posts);
      });
  }, [page]);

  /**
   * Incerement page counter
   */
  const incrementPage = () => {
    setPage(page + 1);
  }

  /**
   * Decrement page counter
   */
  const decrementPage = () => {
    setPage(page - 1);
  }
  
  return (
    <div>
      <h1>Blog List</h1> 
      {posts.map(post => (
        <div className='card' key={post.id}>
            <img src={'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}  alt={`random-image-pexel-${post.id}`} />
            <Link to={`${post.id}`} >
                <h4>{capitalizeFirstLetter(post.title).substring(0,20)}...</h4>
            </Link>
            <p>{capitalizeFirstLetter(post.body).substring(0,150)}...</p>
        </div>
      ))}

      <p>Page: {page}</p>
      <button onClick={() => setPage(1)}>First</button>
      <button onClick={decrementPage}>Prev</button>
      <button onClick={incrementPage}>Next</button>
      <button>Last</button>
    </div>
  );
}
  
export default BlogList;