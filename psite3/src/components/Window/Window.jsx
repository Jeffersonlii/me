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
    
    return (
    <Draggable 
    handle=".header" 
    onMouseDown={onStart} 
    bounds="parent"
    // position={{x: '50%', y: '50%'}}
    >
        <div className="window" style={{width: props?.width ?? '30rem', height: props?.height ?? '15rem'}}>
            <div className="header">{props?.header ?? 'UNDEFINED_HEADER'}</div>
            <div className="infoHeader"></div>
            <div className="contents">{props.children}</div>
        </div>
    </Draggable>);
    
}
