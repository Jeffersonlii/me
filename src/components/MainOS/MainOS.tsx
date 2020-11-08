import React from 'react';
import Draggable from '../Draggable/CustomDraggable';
import logo from './../../public/appLogo.png';
import './Files.scss';
import './MainOS.scss';
export default class MainOS extends React.Component<any> {
    render() {
      return (
        <Draggable 
         handle=".OSheader"
         onMouseDown={undefined} 
          >
        <div className="host">
            <div  className="OSbackground">
            <div className="OSheader">
                <div className="link img" >
                    <div className="img">
                        <img src={logo} alt="apple logo"/>
                    </div>  
                </div>
                <div className="link" onClick={this.props.openWindow}>
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
                <DesktopFiles></DesktopFiles>
            </div>
          </div>
        </div>  
        </Draggable>);
    }
}

function DesktopFiles(){
    return (
        <div className="desktop-files">
            <div className="file" id="me">
                JEFFERSON_LI<br></br>_INTRO.TXT
            </div>
            <div className="file" id="exp">
                EXPERIENCES<br></br>.TXT
            </div>
            <div className="file" id="dog">
                DOGGY.GIF
            </div>
            <div className="file" id="skl">
                SKILLS.TXT
            </div>
            <div className="file" id="gme">
                TODO_<br></br>GAME.exe
            </div>
            <div className="file" id="res">
                RESUME.PDF
            </div>
        </div>
    )
}