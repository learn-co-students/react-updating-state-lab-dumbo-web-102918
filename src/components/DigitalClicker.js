// Code DigitalClicker Component Here
import React from 'react';


class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0,
  }

  clickHandler = () => {
    let newTime = this.state.timesClicked
    this.setState({
      timesClicked: newTime + 1
    })
    return newTime;
  }

  render() {
    return(
      <button
        onClick={this.clickHandler}>
        {this.state.timesClicked}
      </button>
    )
  }
}
export default DigitalClicker;
