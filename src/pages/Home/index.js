import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Layout from '../../components/Layout';
import RecentPosts from './RecentPosts';
import ImageGallery from './ImageGallery';
import blogData from '../../data/blog.json';

const Home = (props) => {
    const galleryHeight = 450;
    const galleryStyle = {
        height: galleryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = galleryHeight / 3;
    const imgArray = blogData.data.map(post => post.blogImage)
    return (
        <div>
            <Card>
                <ImageGallery 
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleryStyle}
                    imagesArray={imgArray}
                />
            </Card>
                <Layout>
                    <RecentPosts style={{width: '100%'}}/>
                </Layout>
        </div>
    );
}

export default Home;