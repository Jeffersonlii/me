import React from 'react';
import Draggable from 'react-draggable';
import Window from '../Window/Window';
import './MainOS.scss';
export default class MainOS extends React.Component {
    render() {
      return (
      <div>
        <Draggable handle=".OSheader" >
          <div  className="OSbackground">
            <div className="OSheader">
                <div className="link">
                    File
                </div>
                <div className="link">
                    Edit
                </div>
                <div className="link">
                    View
                </div>
                <div className="link">
                    Special
                </div>
                <div style={{flexGrow: 9}}></div>
            </div>

            <Window width="20rem"></Window>
            <Window width="40rem"></Window>
          </div>
        </Draggable>
      </div>);
    }
}
