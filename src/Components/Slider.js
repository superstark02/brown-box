import ImageGallery from 'react-image-gallery';
import React from 'react'
import './Slider.css'

const images = [
  {
    original: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-grenade-rtl-1_720x.png?v=1613743977',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/products/stone-grenade-rtl-1_720x.png?v=1613743977',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/160212109431210728423522grenade-1.png?v=1616589606',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/160212109431210728423522grenade-1.png?v=1616589606',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/160212111131210728423522grenade-3.png?v=1616589621',
    thumbnail: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/160212111131210728423522grenade-3.png?v=1616589621',
  }
];

export default class Slider extends React.Component {
  render() {
    return <ImageGallery 
        items={images}
        infinite={true}  
        showNav={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        />;
  }
}