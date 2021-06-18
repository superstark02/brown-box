import ImageGallery from 'react-image-gallery';
import React from 'react'
import './Slider.css'

export default class Slider extends React.Component {
  render() {
    return <ImageGallery 
        items={this.props.images}
        infinite={true}  
        showNav={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        />;
  }
}