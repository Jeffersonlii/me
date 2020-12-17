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
            case 'Resume':
                return props.openWindow(<Resume></Resume>, {
                    header:"RESUME.PDF",
                    width: '38rem', height: '18rem'});
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
            <div className="file" id="me" onClick ={()=>openWindow("Me")}>
                JEFFERSON_LI<br></br>_INTRO.TXT
            </div>
            <div className="file" id="exp">
                EXPERIENCES<br></br>.TXT
            </div>
            <div className="file" id="dog">
                DOGGY.GIF
            </div>
            <div className="file" id="skl">
                SKILLS.TXT
            </div>
            <div className="file" id="gme">
                TODO_<br></br>GAME.exe
            </div>
            <div className="file" id="res" onClick ={()=>openWindow("Resume")}>
                RESUME.PDF
            </div>
            <div className="file" id="creds" onClick ={()=>openWindow("Socials")}>
                SOCIALS.TXT
            </div>
        </div>
    )
}

function Me(){
    return (
    <div dangerouslySetInnerHTML={{ __html: json.paragraph.join('') }}/>)
}
function Resume(){
    return <>
    <embed src= "pdfs/resume.pdf" type="application/pdf" width="100%"height="800"></embed>
      </>
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