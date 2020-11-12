import React, { useState } from 'react';
import Draggable from '../Draggable/CustomDraggable';
import logo from './../../public/appLogo.png';
import { BootSequence, BootText } from './BootSequence';
import './BootSequence.scss';
import Dropdown from './Dropdown/Dropdown';
import './MainOS.scss';
import DesktopFiles from './Pages/Pages';

export default function MainOS (props: any) {
    let dropDownStatics = [{
                label: 'File',
                options: [{
                    option: 'lol xd'
                    }]
                },
                {
                    label: 'Edit',
                    options: [{
                        option: 'lol xd'
                    }]
                },
                {
                    label: 'View',
                    options: [{
                        option: 'lol xd'
                    }]
                },
                {
                    label: 'Special',
                    options: [{
                        option: 'lol xd'
                    }]
                }
            ]
    let dropdowns = dropDownStatics.map((el, index)=>{
            return {...el, id: index, options: 
                el.options.map((op, index)=>({...op, id: index})
            )}
        })
    

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
                <Dropdown labels={dropdowns}
                ></Dropdown>
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

