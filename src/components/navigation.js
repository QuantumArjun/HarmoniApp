//react
import React, { Component } from 'react';

//components

//style
import css from '../styles/app.css'; 

//icons
import home from '../assets/icons/home.svg';
import legal from '../assets/icons/legal.svg';
import myCampaigns from '../assets/icons/myCampaigns.svg';
import settings from '../assets/icons/settings.svg';
import marketplace from '../assets/icons/marketplace.svg';
import stats from '../assets/icons/stats.svg';




class  Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {currScreen: "home"};
    this.screenImages = {
      "home": home, 
      "legal": legal, 
      "myCampaigns": myCampaigns, 
      "settings": settings, 
      "marketplace": marketplace, 
      "stats": stats
    }
  }


  screen(name){
    const chosenScreen = this.props.currScreen === name; 
    return (
      <div  
      className= { chosenScreen ? "navButton clicked": "navButton"} 
      onClick = {() => this.props.changeScreen(name)}
    >
      <img src={this.screenImages[name]} className="image"alt={name}/>
    </div>
    );
  }
  render() {
    return (
      <div className="navigation" style={css.bar}>
        {this.screen("home")}
        {this.screen("stats")}
        {this.screen("marketplace")}
        {this.screen("myCampaigns")}
        {this.screen("legal")}
        {this.screen("settings")}
      </div>
    );
  }
}
export default Navigation;
