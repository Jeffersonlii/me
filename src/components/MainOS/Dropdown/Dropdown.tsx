import React, { useEffect, useRef, useState } from 'react';
import '../MainOS.scss';
import './Dropdown.scss';
export default function Dropdown(props: {labels: {label: string, id: number, options: {option: string, id: number}[]}[]}){
    const [group, setGroup] = useState(props.labels.map((a)=>({...a, opened: false})))

    let dropdown = (id: number)=>{
        setGroup(group.map((a)=>{
            if(a.id === id) return {...a, opened: !a.opened};
            return {...a, opened: false}
        }));
    }  
    return (
        <>
        {group.map((label) => {
        return <div className="link" key={label.id} onClick={(e)=>dropdown(label.id)}>
                    {label.label}
                    {(()=>{
                        if(label.opened) 
                            return <DropPanel deselect={(id: number)=>dropdown(id)} label={label} ></DropPanel>
                    })()}
            </div>
        })}
        </>)
}

function DropPanel(props: {deselect: (a: number)=>any, label: {label: string, id: number}}){  
    const ref = useRef(null);

    const handleClickOutside = (event: any) => {
        if (ref.current && !(ref as any).current.contains(event.target)) {
            console.log("asdf")
            props.deselect(props.label.id)
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });
    return <div ref={ref} className="panel">asdfasdf</div>
}
