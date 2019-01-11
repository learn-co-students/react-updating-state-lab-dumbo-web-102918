// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component {

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  bitClickHandler = () => {
    let newBitrate = this.state.settings.bitrate
    newBitrate = 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: newBitrate
      }
    })
  }

  resClickHandler = () => {
    let newRes = this.state.settings.video.resolution
    newRes = '720p'
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: newRes
        }
      }
    })
  }

  render() {
    console.log(this.state.settings.video)
    return(
      <div>
      <button
        className="bitrate"
        onClick={this.bitClickHandler}>{this.state.settings.bitrate}
      </button>
      <button
        className="resolution"
        onClick={this.resClickHandler}>{this.state.settings.video.resolution}
      </button>
      </div>
    )
  }
}
export default YouTubeDebugger;
