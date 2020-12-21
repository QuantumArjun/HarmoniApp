//react
import React, { Component } from 'react';

//components 

//style 
import css from '../styles/overview.css';
import Calendar from '../utils/calendar';
import InfoBar from '../utils/infobar';

//icons
import commIcon from '../assets/icons/communication.svg';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.allmetrics = [
      {
        name: "Diversity & Inclusion",
        percentIncreased: 12,
        imgsrc: commIcon,
      },
      {
        name: "Leadership",
        percentIncreased: 12,
        imgsrc: commIcon,
      },
      {
        name: "Teamwork",
        percentIncreased: 12,
        imgsrc: commIcon,
      },
      {
        name: "Communication",
        percentIncreased: 12,
        imgsrc: commIcon,
      },
    ]
    this.popCamp = [
      {
        name: "Movie Night",
        description: "141 Successful Campaigns",
        imgsrc: commIcon,
      },
      {
        name: "Movie Night",
        description: "141 Successful Campaigns",
        imgsrc: commIcon,
      },
    ]

  }
  loadMetric() {
    return this.allmetrics.map(met =>
      <InfoBar
        name={met.name}
        percentIncreased={met.percentIncreased}
        imgsrc={met.imgsrc}
        onClick= {() => this.props.infoBarClicked(met.name)}
      />
    );
  }
  loadCampaigns() {
    return this.popCamp.map(camp =>
      <InfoBar
        name={camp.name}
        description={camp.description}
        imgsrc={camp.imgsrc}
      />
    );
  }

  render() {


    return (
      <div className="overview" style={css.Overview}>
        <div className="title">
          <h1> Overview </h1>
        </div>
        <div
          className="createcamp"
          onClick={() => this.props.changeScreen("marketplace")}
        >
          <h2 className="bigtext">
            Launch Campaign
          </h2>
        </div>
        <h2>
          Calendar
        </h2>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Calendar />
        </div>
        <hr className="greysep" />
        <div className="title">
          <h2> Key Metrics </h2>
          <p> View all </p>
        </div>
        {this.loadMetric()}
        <hr className="sep" />
        <div className="title">
          <h2> Popular Campaigns </h2>
          <p> View all </p>
        </div>
        {this.loadCampaigns()}

      </div>
    );
  }
}

export default Overview;
