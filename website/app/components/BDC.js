import React, {Component} from 'react'
import { Chart } from "react-google-charts";
import moment from "moment";
import { S_IFIFO } from 'constants';

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
        startProject: 0,
        update: false
    }
  }


  componentDidMount(){
      this.setState({totalLabel: this.props.totalLabel})
      this.setState({totalLabelDone: this.props.totalLabelDone})
      this.setState({startProject: this.props.startProject})
      this.setState({timeSprint: this.props.timeSprint})
      this.setState({totalTeam: this.props.totalTeam})
  }

  componentWillReceiveProps(nextProps){
     
      console.log(nextProps)
    if(nextProps.count!==this.props.count){
        this.setState({totalLabel: nextProps.totalLabel})
        this.setState({totalLabelDone: nextProps.totalLabelDone})
        this.setState({startProject: nextProps.startProject})
        this.setState({timeSprint: nextProps.timeSprint})
        this.setState({totalTeam: nextProps.totalTeam})
      this.aaa();

    }
  }

  aaa( ) {
    const data = this.state.dataChart
    var miseAJour = new moment();
    var duration = moment.duration(miseAJour.diff(this.state.startProject));
    console.log("drfygtubhinjo")
    console.log(data[data.length-2][1])
    console.log((this.state.totalTeam*this.state.timeSprint*60) - (this.state.totalTeam * this.state.timeSprint * 60 *(((duration.get('hours')*60)+duration.get('minutes'))/60))/this.state.timeSprint)
    console.log(data)
    if(parseInt(data[data.length-2][1]) === parseInt((this.state.totalTeam*this.state.timeSprint*60) - (this.state.totalTeam * this.state.timeSprint * 60 *(((duration.get('hours')*60)+duration.get('minutes'))/60))/this.state.timeSprint)){
      data.pop()
      console.log("xiyfclugvjhk")
    }
    data.pop()
    console.log("tucvg")
    console.log(data)
    data.push(
        [((duration.get('hours')*60)+duration.get('minutes'))/60,(this.state.totalTeam*this.state.timeSprint*60) - (this.state.totalTeam * this.state.timeSprint * 60 *(((duration.get('hours')*60)+duration.get('minutes'))/60))/this.state.timeSprint,(this.state.totalLabel*this.state.totalTeam)-(this.state.totalLabelDone*this.state.totalTeam)],
        [this.state.timeSprint,0,0]
    )
    this.setState({dataChart: data});
  }

  render() {
    const data = this.state.dataChart
    if(this.state.totalTeam !== 0 && this.state.timeSprint !== 0 && this.state.dataChart.length === 2){
        data.pop()
        data.push(
            [0, this.state.totalTeam*this.state.timeSprint*60, this.state.totalLabel*this.state.totalTeam],
            [this.state.timeSprint, 0, 0]
        )
    }
    console.log(data)
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
                title: 'Remaining Effort',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
    );
  }
}

export default BDC;
