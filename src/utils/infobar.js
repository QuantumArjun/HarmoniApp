//react
import React, { Component } from 'react';

//components 

//style 
import css from '../styles/card.css';
import colors from '../assets/colors';

class Overview extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {


    return (
      <div onClick={this.props.onClick} className="infobar" style={css}>
        <div className="sideways infobar">
          <img src={this.props.imgsrc} alt={this.props.name} />
          <div>
            <p>{this.props.name}</p>
            {/* +67% increase in Productivity */}
            {this.props.percentIncreased ?
              <div>
                <span style={{ color: colors.harmoniGreen }}>+{this.props.percentIncreased}%</span>
                <span> increase </span>
              </div>
              :
              <div></div>
            }
            <span style={{ fontWeight: "light" }} >{this.props.description}</span>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Overview;
