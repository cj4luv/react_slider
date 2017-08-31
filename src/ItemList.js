import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick'
import './ItemList.css'

class ItemList extends Component {

  render() {
    const { children, settings} = this.props
    // console.log('itemList', children)
    return (
      <div className='slider_contianer'>
        <Slider  {...settings} className='inner_slider'>
          {children}
        </Slider>
      </div>
    );
  }

}

ItemList.propTypes = {
  children: PropTypes.node,
}

export default ItemList;
