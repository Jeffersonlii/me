import React from 'react';
import Draggable from 'react-draggable';
import Window from '../Window/Window';
import logo from './../../media/appLogo.png';
import './MainOS.scss';
export default class MainOS extends React.Component<{},{activeWindows: any[], windowID: number}> {
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
        <Draggable handle=".OSheader" bounds="parent">
          <div  className="OSbackground">
            <div className="OSheader">
                <div className="link img" >
                    <div className="img">
                        <img src={logo} alt="apple logo"/>
                    </div>  
                </div>
                <div className="link" onClick={this.openWindow}>
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
