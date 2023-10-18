import React from "react";
import ReactPlayer from "react-player";
import MainOS from "../MainOS/MainOS";
import Window from "../Window/Window";
import "./Parent.scss";
import * as service from "./ParentService";
import { Subscription } from "rxjs";

export default class Parent extends React.Component<
  {},
  {
    activeWindows: any[];
    windowID: number;
    openOS: boolean;
    openVideo: boolean;
    audioOptions: { init: boolean; vol: number };
  }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      activeWindows: [],
      windowID: 0,
      openOS: true,
      openVideo: true,
      audioOptions: { init: false, vol: 0 },
    };
  }
  subs = new Subscription();
  componentDidMount() {
    //set up all subject listeners
    this.subs.add(
      service.$audioToggle.subscribe(() => {
        this.setState({
          ...this.state,
          audioOptions: {
            init: true,
            vol: this.state.audioOptions.vol === 0 ? 0.2 : 0,
          },
        });
      })
    );
    this.subs.add(
      service.$videoToggle.subscribe(() => {
        this.setState({ ...this.state, openVideo: !this.state.openVideo });
      })
    );
    this.subs.add(
      service.$removeAllWindows.subscribe(() => {
        this.setState({
          ...this.state,
          activeWindows: [],
          windowID: 1,
        });
      })
    );
    this.subs.add(
      service.$openWindow.subscribe(
        (_: { child: React.ReactNode; params?: { [key: string]: any } }) => {
          this.setState({
            ...this.state,
            activeWindows: [
              ...this.state.activeWindows,
              <Window
                {..._.params}
                key={this.state.windowID}
                windowID={this.state.windowID}
                onCloseWindow={this.onCloseWindow}
              >
                <div className="selectable">{_.child}</div>
              </Window>,
            ],
            windowID: this.state.windowID + 1,
          });
        }
      )
    );
    this.subs.add(
      service.$toggleOS.subscribe(() => {
        this.setState({ ...this.setState, openOS: !this.state.openOS });
      })
    );
  }
  componentWillUnmount() {
    // unsubscribe to ensure no memory leaks
    this.subs.unsubscribe();
  }

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
        {this.state.audioOptions.init && (
          <ReactPlayer
            className="bgaudio"
            url={[{ src: "wn2.mp3", type: "audio/mpeg" }]}
            loop={false}
            playing={true}
            playsinline
            volume={this.state.audioOptions.vol}
            config={{
              file: {
                forceAudio: true,
              },
            }}
          />
        )}
        {this.state.openVideo && (
          <ReactPlayer
            className="video"
            style={{ position: 'absolute', top: 0, left: 0 }}
            url={[{ src: "bg.mp4", type: "video/webm" }]}
            loop
            volume={0}
            muted
            playing
            playsinline
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                forceVideo: true,
              },
            }}
          />
        )}
        {this.state.openOS && <MainOS></MainOS>}
        {this.state.activeWindows}
      </div>
    );
  }
}
