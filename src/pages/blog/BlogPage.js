import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPost, fetchPostComment } from '../../api/blogAPI'

const Blog = () => {
  const { blogId } = useParams();

  useEffect(() => {
    fetchPost(blogId)
      .then(post => {
        console.log(post) 
      });

    fetchPostComment(blogId)
      .then(comments => {
        console.log(comments)
      });
      
  });

  return (
    <div className="App">
      <h1>Blog page for blog {blogId}</h1> 
    </div>
  );
}
  
export default Blog;