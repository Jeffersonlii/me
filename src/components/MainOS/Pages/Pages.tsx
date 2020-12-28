import React from "react";
import json from '../../../public/strings';
import './Pages.scss';

export default  function DesktopFiles(props: any){
    let openWindow = (key: string) => {
        switch(key) {
            case 'Me':
              return props.openWindow(<Me></Me>, {
                  header:"JEFFERSON_LI_INTRO.TXT",
                  width: '38rem', height: '18rem'});
            case 'Rand':
                return props.openWindow(<Rand></Rand>, {
                    header:"MILK.GIF",
                    width: '30rem', height: '20rem'});
            case 'Skills':
                return props.openWindow(<Skills></Skills>, {
                    header:"SKILLS.TXT",
                    width: '50rem', height: '40rem'});
            case 'Resume':
                return props.openWindow(<Resume></Resume>, {
                    header:"RESUME.PDF",
                    width: '38rem', height: '52.5rem'});
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
            <div className="file" id="exp">
                EXPERIENCES<br></br>.TXT
            </div>
            <div className="file" id="rand" onClick={()=>openWindow("Rand")}>
                MILK.GIF
            </div>
            <div className="file" id="skl" onClick={()=>openWindow("Skills")}>
                SKILLS.TXT
            </div>
            <div className="file" id="gme">
                TODO_<br></br>GAME.exe
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
        const innergroup = `<div id="skills-wrap">
            <b>${skillGroup}</b>
            <br>
            ${innerskills.join('')}
            <br>
        </div>` 

        skillsInnertext.push(
            <div dangerouslySetInnerHTML={{ __html: innergroup }}/>
        )
    }
    return (<>
    {skillsInnertext}
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