import React from 'react';
import ReactPlayer from 'react-player';
import MainOS from '../MainOS/MainOS';
import vid from './bg.mp4';
import './Parent.scss';
export default function Parent(){

      return (
      <div className="background" >

        <ReactPlayer 
        className="video"
         url={vid} 
         loop 
         volume={0}
         muted
         playing
         width='100%'
         height='100%'
         config={{
          file: {
            forceVideo: true
          }
        }}/>
        <MainOS></MainOS>
      </div>
      );
  
}
