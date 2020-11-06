import React from 'react';
import Window from '../Window/Window';
import './Parent.scss';

export default class Parent extends React.Component {
    render() {
      return (
      <div className="background">
        <Window></Window>
      </div>);
    }
}
