import React from "react";
import json from '../../../public/strings';
import './Pages.scss';
import ExperiencePage from "./ExperiencePage";

export default function DesktopFiles(props: any){
    let openWindow = (key: string) => {
        switch(key) {
            case 'Me':
              return props.openWindow(<Me></Me>, {
                  header:"JEFFERSON_LI_INTRO.TXT",
                  width: '38rem', height: '18rem'});
            case 'Exp':
                    return props.openWindow(<ExperiencePage openWindow={props.openWindow}></ExperiencePage>, {
                    header:"EXPERIENCES.TXT",
                    width: '38rem', height: '18rem'});
            case 'Rand':
                return props.openWindow(<Rand></Rand>, {
                    header:"MILK.GIF",
                    width: '30rem', height: '20rem'});
            case 'Skills':
                return props.openWindow(<Skills></Skills>, {
                    header:"SKILLS.HTML",
                    width: '50rem', height: '40rem'});
            case 'Resume':
                return props.openWindow(<Resume></Resume>, {
                    header:"RESUME.PDF",
                    width: '38rem', height: '30rem'});
            case 'Socials':
                return props.openWindow(<Socials></Socials>, {
                    header:"SOCIALS.TXT",
                    width: '25rem', height: '25rem'});
            default:
              return 'foo';
          }
    }

    return (
        <div className="desktop-files">
            <div className="file" id="me" onClick={()=>openWindow("Me")}>
                JEFFERSON_LI<br></br>_INTRO.TXT
            </div>
            <div className="file" id="exp" onClick={()=>openWindow("Exp")}>
                EXPERIENCES<br></br>.TXT
            </div>
            <div className="file" id="rand" onClick={()=>openWindow("Rand")}>
                MILK.GIF
            </div>
            <div className="file" id="skl" onClick={()=>openWindow("Skills")}>
                SKILLS.HTML
            </div>
            <div className="file" id="res" onClick={()=>openWindow("Resume")}>
                RESUME.PDF
            </div>
            <div className="file" id="creds" onClick={()=>openWindow("Socials")}>
                SOCIALS.TXT
            </div>
        </div>
    )
}

function Me(){
    return (
    <div dangerouslySetInnerHTML={{ __html: json.paragraph.join('') }}/>)
}
function Rand(){
    return (<img src="gifs/funny_cow.gif" id="rand-gif" alt="funny cow gif" /> )
}
function Resume(){
    return <>
    <embed src= "pdfs/resume.pdf" type="application/pdf" width="100%"height="800"></embed>
      </>
}
function Skills(){
    const skillsInnertext = []
    for (const [skillGroup, skills] of Object.entries(json.qualifications["Technical Skills"])) {
        const innerskills = []
        for(const [skill, desc] of Object.entries(skills)){
            innerskills.push(
            ` 
            <div id="skill-name">${skill}</div>
            <div id="skill-desc">${desc}</div>
            <br>
            `)
        }
        const innergroup = `
                <b>${skillGroup}</b>
                <br>
                ${innerskills.join('')}
                <br>` 

        skillsInnertext.push(
            <div dangerouslySetInnerHTML={{ __html: innergroup }}/>
        )
    }

    const educationInnerText = []
    for (const [point, desc] of Object.entries(json.qualifications.Education)) {
        const inner = `
                <b>${point}</b>
                <br>
                ${desc}
                <br>` 

        educationInnerText.push(
            <div dangerouslySetInnerHTML={{ __html: inner }}/>
        )
    }

    const hobbies = []
    for (const [hobby, desc] of Object.entries(json.qualifications["Interests and Hobbies"])) {
        const inner = `
                <br>
                <b>${hobby}</b>
                <br>
                ${desc}` 

        hobbies.push(
            <div dangerouslySetInnerHTML={{ __html: inner }}/>
        )
    }


    return (<>
        <div id="quals-wrap">
            <div id="skills-wrap">
                {skillsInnertext}
            </div>
            <div id="other-quals-wrap">
                {educationInnerText}
                <div id="hobbies-wrap">
                    <b>Hobbies and Interests</b>
                    <br/>
                    <div id="hobbies">{hobbies}</div>
                </div>
            </div>
        </div>
    </>)
}
function Socials(){
    const socialsInnertext = []

    for (const [key, value] of Object.entries(json.socials)) {
        const inner = `
        <pre><b>${key}</b>
    <a href='${value.link}' target='_blank'><b>${value.desc}</b></a>
        </pre>`
        socialsInnertext.push(
            <div dangerouslySetInnerHTML={{ __html: inner }}/>
        )
    }
    return (<>
    {socialsInnertext}
    <div dangerouslySetInnerHTML={{ __html: json.credits.join('') }}/>
    </>)
}