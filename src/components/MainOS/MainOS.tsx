import React, { useState } from 'react';
import Draggable from '../Draggable/CustomDraggable';
import logo from './../../public/appLogo.png';
import './BootSequence.scss';
import './MainOS.scss';
import DesktopFiles from './Pages/Pages';
export default function MainOS (props: any) {
    const onClickBoot = () =>{
        setBodyComp(
        <>
            <div className="fadein"></div>
            <div className="OSheader">
                <div className="link img">
                    <div className="img">
                        <img src={logo} alt="apple logo" />
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
                <div style={{ flexGrow: 9 }}></div>
            </div>
            <div id="desktop">
                <DesktopFiles openWindow={props.openWindow}></DesktopFiles>
            </div>
        </>
        
        )
        props.toggleAudio();
    }
    const [bodyComp, setBodyComp] = useState(
        <BootSequence onClickBoot={onClickBoot}></BootSequence>
    );
    return (
    <Draggable 
    handle=".OSheader"
    defaultClassName="mainOS react-draggable"
    focusable={false}
    >
        <div className="OSbackground">
            {bodyComp}
        </div>  
    </Draggable>);   
}

function BootSequence(props: {onClickBoot: ()=>any}){
    document.addEventListener('keydown', props.onClickBoot);

    return (
    <div className="bootWrap">
        <div className="initButton" onClick={props.onClickBoot}>PRESS ANY KEY TO BOOT FROM CD OR DVD....</div>
    </div>)
}