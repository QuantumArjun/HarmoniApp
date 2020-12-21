//react
import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

//components

//style
import css from '../styles/graph.css';
import colors from '../assets/colors';

const global = [
  {
    "id": "overall Engagemment",
    "color": colors.harmoniGreen,
    "data": [
      {
        "x": "Aug 2019",
        "y": 11
      },
      {
        "x": "Sep 2019",
        "y": 16
      },
      {
        "x": "Oct 2019",
        "y": 28
      },
      {
        "x": "Nov 2019",
        "y": 25
      },
      {
        "x": "Dec 2019",
        "y": 35
      },
      {
        "x": "Jan 2020",
        "y": 42
      },
      {
        "x": "Feb 2020",
        "y": 36
      },
      {
        "x": "Mar 2020",
        "y": 67
      },
      {
        "x": "Apr 2020",
        "y": 78
      },
      {
        "x": "May 2020",
        "y": 80
      },
      {
        "x": "June 2020",
        "y": 91
      }
    ]
  }
]

const leadership = [
  {
    "id": "overall Engagemment",
    "color": colors.harmoniRed,
    "data": [
      {
        "x": "Aug 2019",
        "y": 50
      },
      {
        "x": "Sep 2019",
        "y": 55
      },
      {
        "x": "Oct 2019",
        "y": 58
      },
      {
        "x": "Nov 2019",
        "y": 46
      },
      {
        "x": "Dec 2019",
        "y": 68
      },
      {
        "x": "Jan 2020",
        "y": 70
      },
      {
        "x": "Feb 2020",
        "y": 65
      },
      {
        "x": "Mar 2020",
        "y": 75
      },
      {
        "x": "Apr 2020",
        "y": 78
      },
      {
        "x": "May 2020",
        "y": 70
      },
      {
        "x": "June 2020",
        "y": 82
      }
    ]
  }
]

const communication = [
  {
    "id": "overall Engagemment",
    "color": colors.harmoniBlue,
    "data": [
      {
        "x": "Aug 2019",
        "y": 11
      },
      {
        "x": "Sep 2019",
        "y": 16
      },
      {
        "x": "Oct 2019",
        "y": 20
      },
      {
        "x": "Nov 2019",
        "y": 22
      },
      {
        "x": "Dec 2019",
        "y": 30
      },
      {
        "x": "Jan 2020",
        "y": 25
      },
      {
        "x": "Feb 2020",
        "y": 27
      },
      {
        "x": "Mar 2020",
        "y": 25
      },
      {
        "x": "Apr 2020",
        "y": 29
      },
      {
        "x": "May 2020",
        "y": 23
      },
      {
        "x": "June 2020",
        "y": 33
      }
    ]
  }
]

const teamWork = [
  {
    "id": "overall Engagemment",
    "color": colors.harmoniPurple,
    "data": [
      {
        "x": "Aug 2019",
        "y": 68
      },
      {
        "x": "Sep 2019",
        "y": 76
      },
      {
        "x": "Oct 2019",
        "y": 71
      },
      {
        "x": "Nov 2019",
        "y": 65
      },
      {
        "x": "Dec 2019",
        "y": 78
      },
      {
        "x": "Jan 2020",
        "y": 82
      },
      {
        "x": "Feb 2020",
        "y": 86
      },
      {
        "x": "Mar 2020",
        "y": 69
      },
      {
        "x": "Apr 2020",
        "y": 91
      },
      {
        "x": "May 2020",
        "y": 85
      },
      {
        "x": "June 2020",
        "y": 88
      }
    ]
  }
]

const divandinc = [
  {
    "id": "overall Engagemment",
    "color": colors.harmoniYellow,
    "data": [
      {
        "x": "Aug 2019",
        "y": 50
      },
      {
        "x": "Sep 2019",
        "y": 54
      },
      {
        "x": "Oct 2019",
        "y": 64
      },
      {
        "x": "Nov 2019",
        "y": 78
      },
      {
        "x": "Dec 2019",
        "y": 81
      },
      {
        "x": "Jan 2020",
        "y": 65
      },
      {
        "x": "Feb 2020",
        "y": 69
      },
      {
        "x": "Mar 2020",
        "y": 75
      },
      {
        "x": "Apr 2020",
        "y": 78
      },
      {
        "x": "May 2020",
        "y": 81
      },
      {
        "x": "June 2020",
        "y": 88
      }
    ]
  }
]
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.data || "home",
    }
    this.data = global;
    this.color = this.data.color;
  }
  render() {
    console.log("in graph", this.state.display)
    switch (this.state.display) {
      case "main":
        this.data = global;
        break;
      case "Leadership":
        this.data = leadership;
        break;
      case "Teamwork":
        this.data = teamWork;
        break;
      case "Communication":
        this.data = communication;
        break;
      case "Diversity & Inclusion":
        this.data = divandinc;
        break;

      default:
        this.data = global;
        break;
    }
    this.color = this.data[0].color;
    const theme = {
      background: "#ffffff",
      axis: {
        fontSize: "14px",
        tickColor: "#eee",
        ticks: {
          line: {
            stroke: "#555555"
          },
          text: {
            fill: "#748AA1"
          }
        },
      },
      grid: {
        line: {
          stroke: "#EBEDF4"
        }
      }
    };

    return (
      <div className="graph" style={css.graph}>
        <ResponsiveLine
          data={this.data}
          theme={theme}
          margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: 100, stacked: false, reverse: false }}
          curve="cardinal"
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 12,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          gridYValues={[0, 20, 40, 60, 80, 100]}
          axisLeft={{
            format: v => `${v}%`,
            orient: 'left',
            tickSize: 0,
            tickPadding: 20,
            tickValues: 5,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          colors={this.color}
          pointSize={10}
          pointLabel="y"
          enableSlices="x"
          isInteractive={true}
          enableCrosshair={false}
          sliceTooltip={({ slice }) => (
            <div className={"sliceTool"}>
              {slice.points.map((point) => (
                <div> {point.data.y + "%" /* or `point.data.xFormatted` */}</div>
              ))}
            </div>
          )}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={3}
          motionStiffness={200}
          pointBorderColor={{ from: 'serieColor' }}
          enableGridX={false}
          pointLabelYOffset={-12}

        />
      </div>
    );
  }
}
export default Graph;
