import React from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import './Window.scss';



export default function Window(props: any) {
    //todo move out of MainOS into parent
    let onStart = (e: MouseEvent) => {
        let elems: any = document.getElementsByClassName('window');
        for(let i = 0; i < elems.length; i++) {
          elems[i].style.zIndex = 1;
          (e as any).currentTarget.style.zIndex = 9;
        }
      }
    let onCloseWindow = ()=>{
        props.onCloseWindow(props.windowID)
    }
    let preventOutofScreenDrag = (e: MouseEvent) => {
        if(
            e.clientY <= 0 ||
            e.clientX <= 0 ||
            e.clientX >= window.innerWidth||
            e.clientY >= window.innerHeight){
            return false  
        }
      };
    let randomPos = Math.floor(Math.random() * (40)) -20;
    return (
    <Draggable 
    handle=".header" 
    onMouseDown={onStart} 
    defaultPosition= {{x: randomPos, y: randomPos}}
    onDrag={preventOutofScreenDrag as DraggableEventHandler} 
    >
        <div className="window" style={{width: props?.width ?? '30rem', height: props?.height ?? '15rem'}}>
            <div className="header">
                <HeaderLines></HeaderLines>
                <div className="title">
                {props?.header ?? 'UNDEFINED_HEADER'}
                </div>
                <div className="close" onClick={onCloseWindow}></div>
                <HeaderLines></HeaderLines>
            </div>
            <div className="infoHeader"></div>
            <div className="contents">{props.children}</div>
        </div>
    </Draggable>);
    
}
function HeaderLines(){
    let numLines = 6;
    return <div className="lineWrap">{Array(numLines).fill(<div className="line"></div>)}</div>
}