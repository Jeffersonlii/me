import React from 'react';
import Draggable from '../Draggable/CustomDraggable';
import './Window.scss';

export default function Window(props: any) {
    let onCloseWindow = ()=>{
        props.onCloseWindow(props.windowID)
    }

    let randomPos = getRandomNumberBetween(80, 100);
    let posPivots: any = document?.getElementById('desktop')?.getBoundingClientRect();
    return (
    <Draggable 
    handle=".header"
    defaultPosition= {{
        x: - window.innerWidth/2 + posPivots?.left + randomPos,
        y: - window.innerHeight/2 +  posPivots?.top + randomPos }}
    >
        <div className="window">
            <div className="header">
                <HeaderLines></HeaderLines>
                <div className="title">
                {props?.header ?? 'UNDEFINED_HEADER'}
                </div>
                <div className="close" onClick={onCloseWindow}></div>
                <HeaderLines></HeaderLines>
            </div>
            <div className="infoHeader"></div>
            <div className="contents"style={{
                width: props?.width ?? '30rem',
                minWidth: props?.minWidth ?? '30rem',
                height: props?.height ?? '15rem',
                minHeight: props?.minHeight ?? '15rem'}}
            >   
                {props.children}    
            </div>
        </div>
    </Draggable>);
    
}
function HeaderLines(){
    let numLines = 6;
    let arr = Array(numLines).fill(0);
    arr = arr.map((_, index)=><div className="line" key={index} ></div>);
    return <div className="lineWrap">{arr}</div>;
}


function getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}