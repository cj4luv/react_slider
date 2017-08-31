import React, { Component } from 'react';
import './App.css';

import ItemList from './ItemList'
import CardView from './CardView'

import Data from './Data'

class App extends Component {
  constructor(props) {
    super(props);
    this.settings = {
      dots: false,
      arrows: false,
      speed: 300,

      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      variableWidth: true,
      adaptiveHeight: false
    };
  }

  _renderCardView() {
    let arr = [];

    for (let key in Data) {
      // console.log(Data[key])
      arr.push(<div key={key} onClick={()=>{console.log('on click', key)}}><CardView data={Data[key]}/></div>)
    }
    return arr;
  }

  render() {
    return (
      <div className="App">

        <ItemList settings={this.settings}>
          {this._renderCardView()}
        </ItemList>

      </div>
    );
  }
}

export default App;
