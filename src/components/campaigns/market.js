//react
import React, { Component } from "react";

//components

//style
import css from "../../styles/card.css";
import colors from '../../assets/colors';
import greyHeartIcon from "../../assets/icons/heart.svg";
import redHeartIcon from "../../assets/icons/liked-heart.svg";
import ratingIcon from "../../assets/icons/rating.svg"

//Components
import Modal from '../../components/modal.js';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.isLiked || false,
      isClicked: this.props.isClicked || false,
    };
  }

  changeColor() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  toggleModal() {
    console.log(this.state.isClicked)
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className="market" style={css} onClick={() => this.toggleModal()}>
        <Modal
          title="Mentorship"
          show={this.state.isClicked}
          handleClose={() => this.toggleModal()}
          imgSrc={this.props.imgsrc}
          description="Get your employees talking to one another! The mentorship campaign will automatically pair your team member together in pairs of two, based on shared interests and references. We’ll follow up with employees, check if they’re meeting, and report back how things are going. Happy Learning!"
        >
        </Modal>
        <div className="card">
          <div className="heart-div">
            {this.state.isLiked ? (
              <img
                className="heart-icon"
                src={redHeartIcon}
                alt={this.props.name}
                onClick={() => this.changeColor()}
              />
            ) : (
                <img
                  className="heart-icon"
                  src={greyHeartIcon}
                  alt={this.props.name}
                  onClick={() => this.changeColor()}
                />
              )}
          </div>
          <div className="inside">
            <div className="card-top">
              <img className="camp-pic" src={this.props.imgsrc} alt={this.props.name} />
              <div>
                <h2>{this.props.name}</h2>
                {/* +67% increase in Productivity */}
                <p>{this.props.description}</p>
                <span style={{ color: colors.harmoniGreen, marginLeft: "12px", }}>+{this.props.percentIncreased}%</span>
                <span> increase in </span>
                <span style={{ fontWeight: "bold" }} >{this.props.metric}</span>
              </div>
            </div>
            <div className="card-bottom">
              <img className="rating-icon" src={ratingIcon} alt={this.props.name}></img>
              <p className="rating">{this.props.rating}</p>
              <p>${this.props.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
