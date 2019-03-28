import React, {Component} from 'react'
import { Chart } from "react-google-charts";
import moment from "moment";

class BDC extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timeSprint: 0,
        totalTeam: 1,
        dataChart:[
            ['x', 'Ideal Tasks Remaining', 'Actual Tasks Remaining'],
            [this.props.totalLabel,0,0]
        ],
        totalLabel: 0,
        totalLabelDone: 0,
        startProject: 0
    }
  }
  
  componentDidMount(){
      this.setState({totalLabel: this.props.totalLabel})
      this.setState({totalLabelDone: this.props.totalLabelDone})
      this.setState({startProject: this.props.startProject})
  }

  render() {
    const data = this.state.dataChart
    return(
        <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{

              isStacked: true,
              hAxis: {
                title: 'Time',
              },
              vAxis: {
                title: 'Popularity',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
    );
  }
}

export default BDC;