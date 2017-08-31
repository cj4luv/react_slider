import React, { Component } from 'react';
import './CardView.css'

class CardView extends Component {

  render() {
    return (
      <div className='card_container'>
        <img className='card_img' src={this.props.data.imgUrl} alt=''/>
        <p className='card_title'>{this.props.data.title}</p>
        <p className='card_harvest_date'>{this.props.data.harvestDate}</p>
        <p className='card_left_quantity'>{this.props.data.leftQuantity}</p>
        <p className='card_price'>{this.props.data.price}</p>
      </div>
    );
  }

}

export default CardView;
