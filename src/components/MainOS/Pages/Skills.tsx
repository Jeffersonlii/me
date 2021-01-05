import React from "react";
import json from "../../../public/strings";
import "./Skills.scss";

export default function Skills() {
  return (
    <div className="host">
      <section id="skills">
        {Object.entries(json.qualifications["Technical Skills"]).map(
          ([section, examples], _) => {
            return (
              <>
                <b>{section}</b>
                <ul>
                  {Object.entries(examples).map(([name, snippet], _) => {
                    return (
                      <li>
                        {name}
                        {snippet !== "" && (
                          <ul>
                            <li>
                              <div
                                dangerouslySetInnerHTML={{ __html: snippet }}
                              />
                            </li>
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          }
        )}
      </section>
      <section id="edu">
        <b>Education</b>
        <ul>
          {Object.entries(json.qualifications.Education).map(
            ([main, sub], _) => {
              console.log({ main, sub });
              return (
                <li>
                  <b>{main}</b>
                  <ul>
                    <li>{sub}</li>
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      </section>
      <section id="interests">
        <b>Hobbies and Interests</b>
        <ul>
          {json.qualifications["Interests and Hobbies"].map((intr) => (
            <li>
              <div dangerouslySetInnerHTML={{ __html: intr }} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
