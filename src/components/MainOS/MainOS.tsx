import React, { useEffect, useState } from "react";
import Draggable from "../Draggable/CustomDraggable";
import { BootSequence, BootText } from "./BootSequence";
import "./BootSequence.scss";
import "./MainOS.scss";
import OSHeader from "./OSHeader/OSHeader";
import DesktopFiles from "./Pages/Pages";
import * as service from "../Parent/ParentService";

export default function MainOS(props: any) {
  const [clicked, setClicked] = useState(false);

  const onClickBoot = () => {
    setClicked(true)
  };

  useEffect(() => {
    service.$audioToggle.next();
    document.addEventListener('keydown', onClickBoot);
  }, [])



  return (
    <Draggable
      handle=".OSheader"
      defaultClassName="mainOS react-draggable"
      focusable={false}
    >
      <div className="OSbackground">
        <div className={'fadeOut ' + (clicked ? 'toFade' : '')} onClick={onClickBoot}>
          <div className="initText">
            <BootText></BootText>
          </div>
        </div>
        <div className="OSheader">
          <OSHeader></OSHeader>
          <div style={{ flexGrow: 9 }}></div>
        </div>
        <div id="desktop">
          <DesktopFiles></DesktopFiles>
        </div>
      </div>
    </Draggable>
  );
}
