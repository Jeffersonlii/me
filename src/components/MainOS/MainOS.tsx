import React from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import Window from '../Window/Window';
import logo from './../../public/appLogo.png';
import './Files.scss';
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
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos, ut, eos odio
                     voluptas necessitatibus quod odit libero eum adipisci culpa cumque d
                     icta qui corrupti voluptatibus minus fugit. Eum, dolorum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mole
                    stiae distinctio animi magni libero, dolore quas enim laudantium ut
                     vero consequatur? Ex sed hic placeat velit, doloribus dolorem iste fugiat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                     quos, ut, eos odio voluptas necessitatibus quod odit libero eum ad
                     ipisci culpa cumque dicta qui corrupti voluptatibus minus fugit. Eum, dolorum?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mol
                    estiae distinctio animi magni libero, dolore quas enim laudantium 
                    ut vero consequatur? Ex sed hic placeat velit, doloribus dolorem iste fugiat?
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
    preventOutofScreenDrag = (e: MouseEvent) => {
        if(
            e.clientY <= 0 ||
            e.clientX <= 0 ||
            e.clientX >= window.innerWidth||
            e.clientY >= window.innerHeight){
            return false  
        }
      };
    render() {
      return (
        <Draggable handle=".OSheader" onDrag={this.preventOutofScreenDrag as DraggableEventHandler} >
        <div className="host">
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
            <div className="desktop">
                {this.state.activeWindows}
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
                DOG.GIF
            </div>
            <div className="file" id="skl">
                SKILLS.TXT
            </div>
            <div className="file" id="gme">
                TODO_<br></br>GAME.exe
            </div>
        </div>
    )
}