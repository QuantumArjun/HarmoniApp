//react
import React, { Component } from 'react';

//components
import Line from '../../utils/line'
//style
import css from '../../styles/card.css';

import lunchclub from '../../assets/lunchclub.png';


class Ongoing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onGoingCamps: [
        {
          name: "lunch Series",
          description: "Length of employment",
          image: lunchclub,
          expanded: false,
          stats: [
            {
              name: "Attendance Rate",
              percent: 85
            },
            {
              name: "Retention Rate",
              percent: 92
            },
            {
              name: "Retention Rate",
              percent: 92
            }
          ]
        },
        {
          name: "lunch Series",
          description: "Length of employment",
          image: lunchclub,
          expanded: false,
          stats: [
            {
              name: "Attendance Rate",
              percent: 85
            },
            {
              name: "Retention Rate",
              percent: 92
            }
          ]
        },
        {
          name: "lunch Series",
          description: "Length of employment",
          image: lunchclub,
          expanded: false,
          stats: [
            {
              name: "Attendance Rate",
              percent: 85
            },
            {
              name: "Retention Rate",
              percent: 92
            }
          ]
        }
      ]
    }
  }

  handleClick = (index) => {
    let onGoingCamps = this.state.onGoingCamps;
    onGoingCamps[index].expanded = !this.state.onGoingCamps[index].expanded
    this.setState({ onGoingCamps })
  }

  getStats() {

    return this.state.onGoingCamps.map((camp, index) =>
      <div>
        <div className="picandtext">
          <div>
            <img src={camp.image} className="image circle" alt={camp.name} />
          </div>
          <div className="addmargin">
            <h3>
              {camp.name}
            </h3>
            <p>
              {camp.description}
            </p>
          </div>
        </div>
        {camp.stats.map((st, i) =>
          <div>
            {camp.expanded || i < 2 ?
              <div>
                <Line
                  width={492}
                  height={6}
                  color="random"
                  percent={st.percent}
                />
                <div className="sideways">
                  <h3>
                    {st.name}
                  </h3>
                  <h3>
                    {st.percent + "%"}
                  </h3>
                </div>
              </div>
              :
              <div>
              </div>
            }
          </div>
        )}
        <div className="center">
          {camp.stats.length <= 2 ?
            < div >
            </div>
            :
            <div>
              {camp.expanded ?
                <div
                  className="button cont"
                  onClick={() => this.handleClick(index)}
                >
                  <span>Contract</span>
                </div>
                :
                <div
                  className="button exp"
                  onClick={() => this.handleClick(index)}
                >
                  <span>Expand</span>
                </div>
              }
            </div>
          }

        </div>
        <hr className="greysep" />
      </div >
    )
  }
  render() {
    return (
      <div className="card ongoing" style={css.card}>
        <h2>
          Ongoing Campaigns
        </h2>
        <hr className="greysep" />
        <div className="stats">
          {this.getStats()}
        </div>
      </div>
    );
  }
}
export default Ongoing;
