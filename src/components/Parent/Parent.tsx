import React from 'react';
import ReactPlayer from 'react-player';
import MainOS from '../MainOS/MainOS';
import Window from '../Window/Window';
import vid from './bg.mp4';
import './Parent.scss';
export default class  Parent extends React.Component<{},{activeWindows: any[], windowID: number}>{
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {activeWindows: [], windowID: 0};
  }

  openWindow = (params?: {[key:string]: any}) => {
      this.setState({
          activeWindows: [
              ...this.state.activeWindows,
              <Window 
              {...params} 
              key={this.state.windowID} 
              windowID={this.state.windowID} 
              onCloseWindow={this.onCloseWindow} >
                  <div className="selectable">
                    asdfasdfasfasdf
                  </div>

              </Window>
          ],
          windowID: this.state.windowID + 1
      })
  }

  onCloseWindow = (id: any) => { 
      this.setState({
          activeWindows: this.state.activeWindows.filter((a)=>a.props.windowID !== id),
      })
  }
  render() {
    return (
      <div className="background" >
        <ReactPlayer 
        className="video"
          url={vid} 
          loop 
          volume={0}
          muted
          playing
          width='100%'
          height='100%'
          config={{
          file: {
            forceVideo: true
          }
        }}/>
        <MainOS openWindow={this.openWindow}></MainOS>
        {this.state.activeWindows}
      </div>
      )
  };
}
