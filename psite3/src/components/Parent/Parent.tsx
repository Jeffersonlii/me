import React from 'react';
import MainOS from '../MainOS/MainOS';
import './Parent.scss';
export default class Parent extends React.Component {
    render() {
      return (
      <div className="background">
        <MainOS></MainOS>
      </div>);
    }
}
