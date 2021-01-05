// import vid from 'bg.mp4';
import React from "react";
import ReactPlayer from "react-player";
import MainOS from "../MainOS/MainOS";
import Window from "../Window/Window";
import "./Parent.scss";
export default class Parent extends React.Component<
  {},
  { activeWindows: any[]; windowID: number }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { activeWindows: [], windowID: 0 };
  }
  audio = new Audio("wn.mp3");

  toggleAudio = () => {
    this.audio.play();
    this.audio.volume = 0.1;
  };
  openWindow = (child: React.ReactNode, params?: { [key: string]: any }) => {
    this.setState({
      activeWindows: [
        ...this.state.activeWindows,
        <Window
          {...params}
          key={this.state.windowID}
          windowID={this.state.windowID}
          onCloseWindow={this.onCloseWindow}
        >
          <div className="selectable">{child}</div>
        </Window>,
      ],
      windowID: this.state.windowID + 1,
    });
  };

  onCloseWindow = (id: any) => {
    this.setState({
      activeWindows: this.state.activeWindows.filter(
        (a) => a.props.windowID !== id
      ),
    });
  };
  render() {
    return (
      <div className="background">
        <ReactPlayer
          className="video"
          url={[{ src: "bg.mp4", type: "video/webm" }]}
          loop
          volume={0}
          muted
          playing
          width="100%"
          height="100%"
          config={{
            file: {
              forceVideo: true,
            },
          }}
        />
        <MainOS
          openWindow={this.openWindow}
          toggleAudio={this.toggleAudio}
        ></MainOS>
        {this.state.activeWindows}
      </div>
    );
  }
}
