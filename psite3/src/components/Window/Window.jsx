import React from 'react';
import Draggable from 'react-draggable';
import './Window.scss';
export default class Window extends React.Component {

    render() {
      return (
      <div>
        <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        grid={[25, 25]}
        scale={1}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
      </div>);
    }
}
