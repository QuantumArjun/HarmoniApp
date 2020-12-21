//react
import React, { Component } from 'react';

//components
import Line from '../../utils/line'
//style
import css from '../../styles/card.css';

import lunchclub from '../../assets/lunchclub.png';
import Market from '../campaigns/market';
import bGame from '../../assets/bGame.png';
import execTalk from '../../assets/execTalk.png';
import gameNight from '../../assets/gameNight.png';
import happyHour from '../../assets/happyHour.png';
import mysterDinner from '../../assets/mysteryDinner.png';
import potLuck from '../../assets/potLuck.png';
import volunteering from '../../assets/volunteering.png';
import zoomLlama from '../../assets/zoomLlama.png';
import escapeRoom from '../../assets/escapeRoom.png';
import officeHours from '../../assets/officeHours.png';


class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendedCamps: [
        {
          name: "Mentorship",
          description: "Connect employees with mentors",
          percentIncreased: 67,
          metric: "Personal growth",
          imgsrc:lunchclub,
          isLiked: false,
          price: 0,
          rating: 2170,
        },
        {
          name: "Volunteering Day",
          description: "Day outing at your nearest foodbank",
          imgsrc:bGame,
          percentIncreased: 23,
          metric: "Communication",
          isLiked: true,
          price: 0,
          rating: 4500,
        },
        {
          name: "Escape Room",
          description: "The Great Escape...",
          imgsrc:execTalk,
          percentIncreased: 67,
          metric: "Teamwork",
          isLiked: false,
          price: "35$ per employee",
          rating: 1215,
        },
        {
          name: "Exec Office Hours",
          description: "Meet your boss's boss",
          imgsrc: officeHours,
          percentIncreased: 45,
          metric: "Leadership",
          isLiked: false,
          price: 0,
          rating: 542,
        },
        {
          name: "Zoom Llama",
          description: "Meet the infamous Zoom Llama",
          imgsrc:zoomLlama,
          percentIncreased: 34,
          metric: "Social",
          isLiked: false,
          price: 100,
          rating: 237,
        },
        {
          name: "Happy Hour",
          description: "Chill with your coworkers",
          imgsrc:happyHour ,
          percentIncreased: 14,
          metric: "Social",
          isLiked: false,
          price: 0,
          rating: 381,
        },
      ]
    }
  }

  handleClick = (index) => {
    let onGoingCamps = this.state.onGoingCamps;
    onGoingCamps[index].expanded = !this.state.onGoingCamps[index].expanded
    this.setState({ onGoingCamps })
  }

  getCampaigns() {
    return this.state.recommendedCamps.map((camp) =>
      <Market
        name={camp.name}
        description={camp.description}
        percentIncreased={camp.percentIncreased}
        metric={camp.metric}
        imgsrc={camp.imgsrc}
        isLiked={camp.liked}
        price={camp.price}
        rating={camp.rating}
      />
    );
  }
  render() {
    return (
      <div className="recommended">
        <div className="card" style={css.card}>
          <h2>
            Recommended Campaigns
          </h2>
        </div>
        {this.getCampaigns()}
      </div>
    );
  }
}
export default Recommended;
