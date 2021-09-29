import React from 'react';
import './style.css';
import Layout from '../../components/Layout';
import BlogPost from '../../components/BlogPost';

const Post = (props) => {
  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )
}

export default Post;