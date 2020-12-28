import React from 'react';
import json from '../../../public/strings';
import './ExperiencePage.scss';

export default function ExperiencePage(props: any){

    const openExperience = (experienceName: string, experienceInfo: any) => {
        console.log(experienceInfo)
        props.openWindow(<ExperienceDetail name={experienceInfo} info={experienceInfo}></ExperienceDetail>, {
            header:`${experienceName.replace(/ /g, '_')}.HTML`,
            width: '60rem', height: '30rem'});
    }


    const projectsInnertext = []
    for (const [projectName, info] of Object.entries(json.projects)) {
        const innergroup = `
                ${projectName} : ${info.time}
                ` 
                projectsInnertext.push(
            <div id="link" onClick={()=>{openExperience(projectName, info)}}
            dangerouslySetInnerHTML={{ __html: innergroup }}/>
        )
    }
    const workInnertext = []
    for (const [workName, info] of Object.entries(json["work exp"])) {
        const innergroup = `
                ${workName} : ${info.time}
                ` 
                workInnertext.push(
            <div id="link" onClick={()=>{openExperience(workName, info)}}
            dangerouslySetInnerHTML={{ __html: innergroup }}/>
        )
    }

    
    return <>
        <div id="exp-title">
            <b>Work Experience</b>
        </div>
        <div id="exp-body">{workInnertext}</div>

        <div id="exp-title">
            <b>Projects</b>
        </div>
        <div id="exp-body">{projectsInnertext}</div>
    </>
}

function ExperienceDetail(props: {name: string, info: any}){
    return <>WIP</>
}