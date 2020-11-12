/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Draggable from '../Draggable/CustomDraggable';
import './Window.scss';
export default function Window(props: any) {

    const width = props?.width ?? '30rem';
    const height = props?.height ?? '15rem';

    let onCloseWindow = ()=>{
        props.onCloseWindow(props.windowID)
    }
    const expand = keyframes`
        from {
            height: 1rem;
            min-height: 1rem;
        }
        to {
            width: ${width};
            height: ${height};
        }
    `;
    const Contents = styled.div`
        width: ${width};
        min-width:  20rem;
        height: ${height};
        min-height: 5rem; 
        animation: 0.3s ${expand} ease-out;
    `;
    
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
            <Contents className="contents">
                <div>
                    {props.children}    
                </div>
            </Contents>
        </div>
    </Draggable>);
    
}
function HeaderLines(){
    let numLines = 4;
    let arr = Array(numLines).fill(0);
    arr = arr.map((_, index)=><div className="line" key={index} ></div>);
    return <div className="lineWrap">{arr}</div>;
}


function getRandomNumberBetween(min: number,max: number){
    return Math.floor(Math.random()*(max-min+1)+min);
}