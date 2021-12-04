import React from 'react'
import './userVideo.css'
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs'

export const UserVideo = (props) => {
  
  return (
    <div className="userVideoLayout">
      <p className="nameAndBtn">
        <span className="userName">{props.participantName}</span>
        <button onClick={props.muteHandler} className="muteBtn">
          {props.participantMicOn ? <BsMicFill /> : <BsMicMuteFill color="red" />}
        </button>
      </p>
      <img
        class="userVideo"
        src={props.participantVideo}
      />
    </div>
  )
}
