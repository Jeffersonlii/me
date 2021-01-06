import React, { useState } from 'react';
import Draggable from '../Draggable/CustomDraggable';
import { BootSequence, BootText } from './BootSequence';
import './BootSequence.scss';
import './MainOS.scss';
import OSHeader from './OSHeader/OSHeader';
import DesktopFiles from './Pages/Pages';

export default function MainOS(props: any) {
  const onClickBoot = () => {
    setBodyComp(
      <>
        <div className="fadein">
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
      </>
    );
  };
  const [bodyComp, setBodyComp] = useState(
    <BootSequence onClickBoot={onClickBoot}></BootSequence>
  );
  return (
    <Draggable
      handle=".OSheader"
      defaultClassName="mainOS react-draggable"
      focusable={false}
    >
      <div className="OSbackground">{bodyComp}</div>
    </Draggable>
  );
}
