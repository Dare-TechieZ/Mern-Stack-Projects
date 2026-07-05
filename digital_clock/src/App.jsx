import React from 'react'
import './App.css'
import DigitalClock from './DigitalClock'
import {useState} from 'react'
import Quote from './Quote'

function App() {
  const [theme,setTheme]=useState('dark');
  const toggleTheme=()=>{
    setTheme(theme==='light'?'dark':'light')
  }

  const [selectedTrack, setSelectedTrack] = useState('/music1.mp3');
  const audioTracks = [
    { name: "Girl Like You", src: "/music1.mp3" },
    { name: "Havana", src: "/music2.mp3" },
    { name: "Guitar Melody", src: "/music3.mp3" }
  ];
  return (
    <>
    <div className={`app ${theme}`}>
        <button className='theme-toggle' onClick={toggleTheme}>
          Toggle Theme
        </button>

        <div className="audio-control">
            <select onChange={(e) => setSelectedTrack(e.target.value)} value={selectedTrack} className="track-select">
              {audioTracks.map((track) => (
                <option className="audio-option" key={track.src} value={track.src}>
                  {track.name}
                </option>
              ))}
            </select>
            
            <audio loop className="custom-audio" key={selectedTrack} controls autoPlay>
              <source src={selectedTrack} type="audio/mpeg" />
            </audio>
        </div>
        <DigitalClock />

        <Quote />
    </div>
    </>
  )
}

export default App
