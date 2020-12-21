//react
import React, { Component } from 'react';

//components 
import Graph from '../components/graph';
import Ongoing from '../components/campaigns/onGoing';
import Modal from '../components/modal';
//style 
import css from '../styles/home.css';

import lunchclub from "../assets/lunchclub.png";
import Recommended from '../components/campaigns/recommended';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: this.props.graph
    }
  }

  render() {


    return (
      <div className="home"  key={this.props.graph} style={css.home}>
        <h1> Your Team </h1>
        {console.log("in home graph is", this.state.graph, this.props.graph)}
        <Graph
        data ={this.props.graph || "main"}
        />
        <div className="campaigns">
          <div className="ongoing campaign">
            <Ongoing/>
          </div>
          <div className="recommended campaign">
            <Recommended />
          </div>
        </div>
      </div>
    );
  }
}

/* class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal
        title="Mentorship"
        show={this.state.show} 
        handleClose={this.hideModal}
        imgSrc={lunchclub}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus vestibulum lorem sed risus ultricies tristique."
        >
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
} */

export default Home;
