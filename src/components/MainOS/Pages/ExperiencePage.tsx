import React from "react";
import json from "../../../public/strings";
import "./ExperiencePage.scss";

export default function ExperiencePage(props: any) {
  const openExperience = (experienceName: string, experienceInfo: any) => {
    props.openWindow(
      <ExperienceDetail
        name={experienceName}
        info={experienceInfo}
        openWindow={props.openWindow}
      ></ExperienceDetail>,
      {
        header: `${experienceName.replace(/ /g, "_")}.HTML`,
        width: "60rem",
        height: "30rem",
      }
    );
  };

  const experienceTypes: { key: "work exp" | "projects"; name: string }[] = [
    { key: "work exp", name: "Work Experience" },
    { key: "projects", name: "Personal Projects" },
  ];
  return (
    <>
      {experienceTypes.map(({ key, name }) => {
        return (
          <>
            {name}
            <ul>
              {Object.entries(json[key]).map(([name, info]) => {
                return (
                  <li
                    onClick={() => {
                      openExperience(name, info);
                    }}
                  >
                    <div id="link">
                      {name} : {info.time}
                    </div>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}

function ExperienceDetail(props: { name: string; info: any; openWindow: any }) {
  const openImage = (imgDetail: { url: string; desc: string }) => {
    props.openWindow(
      <img
        src={process.env.PUBLIC_URL + imgDetail.url}
        id="expanded-img"
        alt=""
      />,
      {
        header: (imgDetail.url.split("/").pop() as string).toUpperCase(),
        width: "30rem",
        height: "100%",
      }
    );
  };

  return (
    <>
      <h1>
        {props.name} - {props.info.time}
      </h1>
      <section>{props.info.desc}</section>
      {Object.keys(props.info["modal_details"]).map((section) => {
        return (
          <ul>
            <li>
              {section}
              <ul>
                {props.info["modal_details"][section].map((point: string) => (
                  <li dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </li>
          </ul>
        );
      })}
      <section>Relevant Images</section>
      <div className="img-grid">
        {props.info["images"].map((img: { url: string; desc: string }) => {
          return (
            <div>
              <ul>
                <img
                  src={process.env.PUBLIC_URL + img.url}
                  alt=""
                  className="img-btn"
                  onClick={() => {
                    openImage(img);
                  }}
                />
                <li style={{ width: "15rem" }}>{img.desc}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
