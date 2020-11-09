import React, { useState } from 'react';
import TypeIt from "typeit-react";
import Draggable from '../Draggable/CustomDraggable';
import logo from './../../public/appLogo.png';
import './BootSequence.scss';
import './MainOS.scss';
import DesktopFiles from './Pages/Pages';

export default function MainOS (props: any) {
    const onClickBoot = () =>{
        setBodyComp(
        <>
            <div className="fadein">
                <div className="initText">
                    <BootText></BootText>
                </div>
            </div>
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
    <div className="bootWrap"  onClick={props.onClickBoot}>
        <div className="initButton">PRESS ANY KEY TO BOOT FROM CD OR DVD....</div>
    </div>)
}

function BootText(){
    return <TypeIt
    options={{ speed: 1 }}
    getBeforeInit={(instance: any) => {
        instance
        .type("COMPBIO (C) 1991 MOTHERBOARD. INC.")
        .pause(50)
        .break()
        .type("BIOS DATE 09/29/91 15:43:29 VER: 08.00.15")
        .pause(50)
        .break()
        .type("CPU: INTEL(R) CPU 330 @40MHZ")
        .pause(50)
        .break()
        .type("SPEED: 40MHZ")
        .pause(50)
        .break()
        .type("THIS VGA/PCI BIOS IS RELEASED UNDER THE GNU LGPL")
        .pause(50)
        .break()
        .type("64-1001-100001010100-12995-1AE23EV003-Y30C")
        .pause(50)
        .break()
        .type("BOOTING FROM HARD DISK")
        .pause(50)
        .type(". . .", {speed: 400})
        return instance;
    }}
    />
}