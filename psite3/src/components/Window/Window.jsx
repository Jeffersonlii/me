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
    >
        <div className="window" style={{width: props?.width ?? '40rem', height: props?.height ?? '20rem'}}>
            <div className="header">Mac System Software</div>
            <div className="infoHeader"></div>
            <div className="contents"></div>
        </div>
    </Draggable>);
    
}
