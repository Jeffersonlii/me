import React from 'react';
import Draggable from 'react-draggable';
import './Window.scss';

export default function Window(props) {

    let onStart = (e) => {
        let elems = document.getElementsByClassName('window');
        console.log(elems, e)
        for(let i = 0; i < elems.length; i++) {
          elems[i].style.zIndex = 1;
          e.currentTarget.style.zIndex = 9;
        }
      }
    
    const dragHandlers = {};
    return (
    <Draggable 
    handle=".header" 
    {...dragHandlers}
    onMouseDown={onStart} 
    bounds="parent"
    >
        <div className="window" style={{width: props?.width ?? '30rem', height: props?.height ?? '15rem'}}>
            <div className="header">{props?.header ?? 'UNDEFINED_HEADER'}</div>
            <div className="infoHeader"></div>
            <div className="contents"></div>
        </div>
    </Draggable>);
    
}
