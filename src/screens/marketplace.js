//react
import React, { Component } from 'react';

//components 
import Search from '../utils/search';
import Graph from '../components/graph';
import Ongoing from '../components/campaigns/onGoing';
//style 
import css from '../styles/marketplace.css';
import Market from '../components/campaigns/market';
import Modal from '../components/modal';
import lunchclub from '../assets/lunchclub.png';
import bGame from '../assets/bGame.png';
import execTalk from '../assets/execTalk.png';
import gameNight from '../assets/gameNight.png';
import happyHour from '../assets/happyHour.png';
import mysterDinner from '../assets/mysteryDinner.png';
import potLuck from '../assets/potLuck.png';
import volunteering from '../assets/volunteering.png';
import zoomLlama from '../assets/zoomLlama.png';
import escapeRoom from '../assets/escapeRoom.png';
import officeHours from '../assets/officeHours.png';
import { getAllCampaigns, getTopCampaigns } from '../api/getCampaigns';

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   showMentorship: false,
    //   showVolunteer: false,
    //   showEscape: false,
    //   showOH: false,
    //   showLlama: false,
    //   showhhappyHour: false,
      campaignsLoaded: false
    };
    this.campaigns = []
  }

  /*toggleModalMentorship = () => {
    this.setState({ showMentorship: !this.state.showMentorship });
  }; */
/*
  toggleModalVolunteer = () => {
    this.setState({ showVolunteer: !this.state.showVolunteer });
  };

  toggleModalEscape = () => {
    this.setState({ showEscape: !this.state.showEscape });
  };

  toggleModalOH = () => {
    this.setState({ showOH: !this.state.showOH });
  };

  toggleModalLlama = () => {
    this.setState({ showLlama: !this.state.showLlama });
  };

  toggleModalhappyHour = () => {
    this.setState({ showhappyHour: !this.state.showhappyHour });
  };
*/

  /* hideModal = () => {
    this.setState({ show: false });
  }; */
  componentDidMount() {
    console.log("WE MOUNTED")

    getAllCampaigns(10, "Top").then((data) => {
      console.log("data is ", data);
      this.campaigns = data;
      this.setState({ campaignsLoaded: true });
    })
  }

  getTopCampaigns() {
    if (this.state.campaignsLoaded) {
      console.log("sucessful")
      console.log(this.campaigns)
      return this.campaigns.map((camp) =>
        <Market
          name={camp.name}
          description={camp.shortDescription}
          percentIncreased={camp.predStat[0].increase}
          metric={camp.predStat[0].metric}
          imgsrc={camp.image}
          isLiked={false}
          isClicked={false}
          price={camp.cost.total}
          rating={2170}
        />
      );
    }
  }


  render() {
    return (
      <div className="marketplace" style={css.home}>
        {/* 
        <Modal
          title="Mentorship"
          show={this.state.showMentorship}
          handleClose={this.toggleModalMentorship}
          imgSrc={lunchclub}
          description="Get your employees talking to one another! The mentorship campaign will automatically pair your team member together in pairs of two, based on shared interests and references. We’ll follow up with employees, check if they’re meeting, and report back how things are going. Happy Learning!"
        >
        </Modal> */}

        {/* <Modal
          title="Volunteer"
          show={this.state.showVolunteer}
          handleClose={this.toggleModalVolunteer}
          imgSrc={volunteering}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique."
        >
        </Modal>

        <Modal
          title="Escape"
          show={this.state.showEscape}
          handleClose={this.toggleModalEscape}
          imgSrc={escapeRoom}
          description="No better way to build teamwork than being locked in a room for an hour in a high-pressure situation! Welcome to the magic of Escape Rooms. We partner with local vendors to set up the escape room in advance. All you need to do pick a date and put on your problem solving hat."
        >
        </Modal>

        <Modal
          title="OH"
          show={this.state.showOH}
          handleClose={this.toggleModalOH}
          imgSrc={officeHours}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique."
        >
        </Modal>

        <Modal
          title="Llama"
          show={this.state.showLlama}
          handleClose={this.toggleModalLlama}
          imgSrc={zoomLlama}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique."
        >
        </Modal>

        <Modal
          title="happyHour"
          show={this.state.showhappyHour}
          handleClose={this.toggleModalhappyHour}
          imgSrc={happyHour}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique."
        >
        </Modal>
 */}



        <h1> Marketplace </h1>
        <Search
          filter={true}
        />
        <div className="sideways align-items">
          <h2> Top Campaigns </h2>
          <p> View all </p>
        </div>
        <div className="sideways">
          {this.getTopCampaigns()}
          {/* <div onClick={this.toggleModalMentorship}>
            <Market
              name="Mentorship"
              description="Connect employees to mentors"
              percentIncreased={67}
              metric="Personal Growth"
              imgsrc={lunchclub}
              isLiked={false}
              price={0}
              rating={2170}
            />
          </div>

          <div onClick={this.toggleModalVolunteer}>
            <Market
              name="Volunteering Day"
              description="Day outing at your nearest foodbank"
              percentIncreased={23}
              metric="Communication"
              imgsrc={volunteering}
              isLiked={false}
              price={0}
              rating={4500}
            />
          </div>

          <div onClick={this.toggleModalEscape}>
            <Market
              name="Escape Room"
              description="The Great Escape..."
              percentIncreased={67}
              metric="Teamwork"
              imgsrc={escapeRoom}
              isLiked={false}
              price={"35 per employee"}
              rating={4500}
            />
          </div> */}
        </div> 
        <div className="sideways">

          {/*<div onClick={this.toggleModalOH}>
            <Market
              name="Exec Office Hour"
              description="Meet your boss's boss"
              percentIncreased={45}
              metric="Leadership"
              imgsrc={officeHours}
              isLiked={false}
              price={0}
              rating={0}
            />
          </div>
          <div onClick={this.toggleModalLlama}>
            <Market
              name="Zoom Llama"
              description="Meet the infamous Zoom Llama"
              percentIncreased={34}
              metric="Social"
              imgsrc={zoomLlama}
              isLiked={false}
              price={100}
              rating={4500}
            />
          </div>
          <div onClick={this.toggleModalhappyHour}>
            <Market
              name="Happy Hour"
              description="Chill with your coworkers"
              percentIncreased={14}
              metric="Social"
              imgsrc={happyHour}
              isLiked={false}
              price={0}
              rating={4500}
            />
          </div> */}
        </div>
        <div className="sideways align-items">
          <h2> Communication </h2>
          <p> View all </p>
        </div>
        {/*<div className="sideways">
          <Market
            name="Hawks vs. Warriors"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={bGame}
            isLiked={false}
            price={2000}
            rating={4500}
          />
          <Market
            name="Industry Talk"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={execTalk}
            isLiked={false}
            price={2000}
            rating={4500}
          />
          <Market
            name="Lunch Series"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={lunchclub}
            isLiked={false}
            price={2000}
            rating={4500}
          />
        </div>*/}
        <div className="sideways">
          {/*<Market
            name="Potluck"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={potLuck}
            isLiked={false}
            price={2000}
            rating={4500}
          />
          <Market
            name="Game Night"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={gameNight}
            isLiked={false}
            price={2000}
            rating={4500}
          />
          <Market
            name="Mystery Dinner"
            description="Connect employees with mentors"
            percentIncreased={67}
            metric="Productivity"
            imgsrc={mysterDinner}
            isLiked={false}
            price={2000}
            rating={4500}
          />  */}
        </div>
      </div>
    );
  }
}

export default Marketplace;
