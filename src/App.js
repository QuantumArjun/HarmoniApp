import React, { Component } from 'react';

//components
import Navigation from './components/navigation';
import Overview from './components/overview';

//screens
import Marketplace from './screens/marketplace';
import Home from './screens/home';
import Legal from './screens/legal';
import MyCampaigns from './screens/myCampaigns';
import Settings from './screens/settings';
import Stats from './screens/stats';
//style
import css from './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: "home",
      currGraph: "main"
    };
    this.screens = {
      "home": <Home
        graph={this.state.currGraph}
      />,
      "legal": <Legal />,
      "myCampaigns": <MyCampaigns />,
      "settings": <Settings />,
      "marketplace": <Marketplace />,
      "stats": <Stats />
    }
  }

  changeScreen(screen) {
    this.setState({ currScreen: screen });
  }

  infoBarOnClick(metric) {
    console.log("in app js", metric)
    this.setState({ currGraph: metric });
  }

  renderScreen() {
    return this.screens[this.state.currScreen];
  }

  render() {
    return (
      <div className="app" style={css.app}>
        <div className="appnav">
          <Navigation
            currScreen={this.state.currScreen}
            changeScreen={this.changeScreen.bind(this)}
          />
        </div>
        <div className="appscreen">
          {this.state.currScreen === "home" ?
            <Home
              graph={this.state.currGraph}
            />
            :
            this.renderScreen()
          }
        </div>
        <div className="appoverview">
          <Overview
            changeScreen={this.changeScreen.bind(this)}
            infoBarClicked={this.infoBarOnClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
