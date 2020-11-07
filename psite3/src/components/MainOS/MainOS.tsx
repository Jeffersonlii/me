import React from 'react';
import Draggable from 'react-draggable';
import Window from '../Window/Window';
import logo from './../../media/appLogo.png';
import './MainOS.scss';
export default class MainOS extends React.Component {
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
            <div className="brounds">
                <Window width="20rem"></Window>
                <Window width="35rem"></Window>
            </div>
          </div>
        </Draggable>);
    }
}
