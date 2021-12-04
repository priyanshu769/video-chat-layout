import React from 'react'
import './participants.css'

export const Participants = (props) => {
  return (
    <div className="">
        <p className="participantName">
          <span>{props.participantName}</span>
          <span>
            <button onClick={props.muteHandle}>{props.participantMicOn ? 'Mute' : 'Unmute'}</button>
          </span>
        </p>
    </div>
  )
}
