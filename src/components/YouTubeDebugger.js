// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state ={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
    bitrateBtnHandler=()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          })
    }

    resolutionBtnHandler=()=>{
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                resolution: '720p'
              }
            }
          })
    }

    render(){
        return(
                <div>
                    <button onClick={this.bitrateBtnHandler} className="bitrate">bitrate</button>
                    <button onClick={this.resolutionBtnHandler} className="resolution">resolution</button>
                </div>
        )
    }

}