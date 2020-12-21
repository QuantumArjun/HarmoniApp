//react
import React, { Component } from 'react';

//components

//style
import css from '../styles/utils.css';

import colors from '../assets/colors'

class Line extends Component {

  render() {
    //TODO: COLOR SHOULD NOT BE RANDOM
    let color;
    if(this.props.color === "random"){
      var keys = Object.keys(colors);
      color = keys[ 6 * Math.random() << 0];
    } else {
      color = this.props.color;
    }

    const styleCard = {
      height: this.props.height || 6,
      width: "100%",
      background: `linear-gradient(to right, var(--${color}) 0%, var(--${color})${this.props.percent}%, #E5E9F2 ${this.props.percent}%, #E5E9F2 100%)`
    }
    return (
      <hr className="line" style={styleCard}>
      </hr>
    );
  }
}
export default Line;
