import React from 'react';
import './style.css';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallery = props => {

    return (
        <div className="galleryPost" style={props.galleryStyle}>
            <section style={{ width: props.largeWidth }}>
                <div className="mainImageWrapper">
                    {/* <img src={require(`../../../blogPostImages/${props.imagesArray[1]}`)} alt="" /> */}
                    <img src={props.imagesArray[1]} alt="" />
                </div>
            </section>
            <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                {
                    props.imagesArray.map( (imageUrl, indexImage) => 
                        <SideImage 
                            key={indexImage}
                            height={props.sideImageHeight}
                            // src={require(`../../../blogPostImages/${image}`)}
                            src={imageUrl}
                            alt="" />
                    )
                }
            </section>
        </div>
        );

};

export default ImageGallery;