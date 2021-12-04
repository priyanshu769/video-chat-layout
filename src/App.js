import { useState } from 'react'
import './App.css'
import { UserVideo, Participants } from './components'

function App() {
  const [participants, setParticipants] = useState([
    {
      _id: 'p01',
      name: 'Participant 1',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: false,
    },
    {
      _id: 'p02',
      name: 'Participant 2',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: false,
    },
    {
      _id: 'p03',
      name: 'Participant 3',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: true,
    },
    {
      _id: 'p04',
      name: 'Participant 4',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: false,
    },
    {
      _id: 'p05',
      name: 'Participant 5',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: true,
    },
    {
      _id: 'p06',
      name: 'Participant 6',
      videoLink: 'https://images.unsplash.com/photo-1614044252073-ba5158b4609a',
      videoOn: true,
      micOn: false,
    },
  ])

  const muteHandler = (userId, participants, setParticipants) => {
    const actionedUser = participants.find(
      (participant) => participant._id === userId,
    )
    if (actionedUser) {
      setParticipants(
        participants.map((participant) => {
          if (participant._id === userId) {
            return { ...participant, micOn: !participant.micOn }
          } else if (participant !== participant._id) return { ...participant }
        }),
      )
    }
  }

  return (
    <div className="App">
      <div className="twoPanels">
        <div className="participantsPanel">
          <h2>Participants</h2>
          {participants.map((participant) => (
            <Participants
              participantName={participant.name}
              participantMicOn={participant.micOn}
              muteHandle={() =>
                muteHandler(participant._id, participants, setParticipants)
              }
            />
          ))}
        </div>
        <div className="usersPanel">
          {participants.map((participant) => (
            <UserVideo
              participantName={participant.name}
              muteHandler={() =>
                muteHandler(participant._id, participants, setParticipants)
              }
              participantMicOn={participant.micOn}
              participantVideo={participant.videoLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
