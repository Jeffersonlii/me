import React from "react";
import json from '../../../public/strings';
import './Pages.scss';

export default  function DesktopFiles(props: any){
    let openWindow = (key: string) => {
        switch(key) {
            case 'Me':
              return props.openWindow(<Me></Me>, {header:"JEFFERSON_LI_INTRO.TXT"});
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
            <div className="file" id="res">
                RESUME.PDF
            </div>
        </div>
    )
}

function Me(){
    return (
    <div dangerouslySetInnerHTML={{ __html: json.paragraph.join('') }}/>)
}