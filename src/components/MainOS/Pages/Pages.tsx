import React from "react";
import json from "../../../public/strings";
import "./Pages.scss";
import ExperiencePage from "./ExperiencePage";
import Skills from "./Skills";

export default function DesktopFiles(props: any) {
  let openWindow = (key: string) => {
    switch (key) {
      case "Me":
        return props.openWindow(<Me></Me>, {
          header: "JEFFERSON_LI_INTRO.TXT",
          width: "38rem",
          height: "18rem",
        });
      case "Exp":
        return props.openWindow(
          <ExperiencePage openWindow={props.openWindow}></ExperiencePage>,
          {
            header: "EXPERIENCES.HTML",
            width: "38rem",
            height: "18rem",
          }
        );
      case "Rand":
        return props.openWindow(<Rand></Rand>, {
          header: "MILK.GIF",
          width: "30rem",
          height: "20rem",
        });
      case "Skills":
        return props.openWindow(<Skills></Skills>, {
          header: "SKILLS.HTML",
          width: "50rem",
          height: "40rem",
        });
      case "Resume":
        return props.openWindow(<Resume></Resume>, {
          header: "RESUME.PDF",
          width: "38rem",
          height: "30rem",
        });
      case "Socials":
        return props.openWindow(<Socials></Socials>, {
          header: "SOCIALS.HTML",
          width: "25rem",
          height: "25rem",
        });
      default:
        return "foo";
    }
  };

  return (
    <div className="desktop-files">
      <div className="file" id="me" onClick={() => openWindow("Me")}>
        JEFFERSON_LI<br></br>_INTRO.TXT
      </div>
      <div className="file" id="exp" onClick={() => openWindow("Exp")}>
        EXPERIENCES<br></br>.HTML
      </div>
      <div className="file" id="rand" onClick={() => openWindow("Rand")}>
        MILK.GIF
      </div>
      <div className="file" id="skl" onClick={() => openWindow("Skills")}>
        SKILLS.HTML
      </div>
      <div className="file" id="res" onClick={() => openWindow("Resume")}>
        RESUME.PDF
      </div>
      <div className="file" id="creds" onClick={() => openWindow("Socials")}>
        SOCIALS.HTML
      </div>
    </div>
  );
}

function Me() {
  return <div dangerouslySetInnerHTML={{ __html: json.paragraph.join("") }} />;
}
function Rand() {
  return <img src="gifs/funny_cow.gif" id="rand-gif" alt="funny cow gif" />;
}
function Resume() {
  return (
    <>
      <embed
        src="pdfs/resume.pdf"
        type="application/pdf"
        width="100%"
        height="800"
      ></embed>
    </>
  );
}
function Socials() {
  /* eslint-disable react/jsx-no-target-blank */
  return (
    <>
      {json.socials.map((soc) => {
        return (
          <>
            {soc.name}
            <ul>
              <li>
                <a href={soc.link} target="_blank">
                  <b>{soc.desc}</b>
                </a>
              </li>
            </ul>
          </>
        );
      })}
      <div dangerouslySetInnerHTML={{ __html: json.credits.join("") }} />
    </>
  );
}
