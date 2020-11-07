import React from 'react';
import Draggable from 'react-draggable';
import Window from '../Window/Window';
import logo from './../../media/appLogo.png';
import './MainOS.scss';
export default class MainOS extends React.Component<{},{activeWindows: any[]}> {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {activeWindows: [
            <Window></Window>,
        ]};
        setTimeout(() => {
            this.setState({
                activeWindows: [<Window></Window>, ...this.state.activeWindows]
              });
              setTimeout(() => {
                this.setState({
                    activeWindows: [...this.state.activeWindows, <Window></Window>]
                  });
            }, 2000);
        }, 2000);
    }

    render() {

      return (
        <Draggable handle=".OSheader" bounds="parent">
          <div  className="OSbackground">
            <div className="OSheader">
                <div className="link img" >
                    <div className="img">
                        <img src={logo} alt="apple logo"/>
                    </div>  
                </div>
                <div className="link">
                    File
                </div>
                <div className="link">
                    Edit
                </div>
                <div className="link">
                    View
                </div>
                <div className="link">
                    Special
                </div>
                <div style={{flexGrow: 9}}></div>
            </div>
            <div className="bounds">
                {this.state.activeWindows}
            </div>
          </div>
        </Draggable>);
    }
}
