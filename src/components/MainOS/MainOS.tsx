import React from 'react';
import Draggable from '../Draggable/CustomDraggable';
import logo from './../../public/appLogo.png';
import './MainOS.scss';
import DesktopFiles from './Pages/Pages';
export default class MainOS extends React.Component<any> {
    render() {
      return (
        <Draggable 
         handle=".OSheader"
         focusable={false}
          >
        <div className="fadein"></div>
        <div className="OSbackground">
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
            <div id="desktop">
                <DesktopFiles openWindow={this.props.openWindow}></DesktopFiles>
            </div>
        </div>  
        </Draggable>);
    }
}