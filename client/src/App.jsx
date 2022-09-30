import React, { useState, useEffect } from 'react';


function App() {
  const [musics, setMusics] = useState([])

  useEffect(() => {
    fetch("/api/musics")
      .then(response => response.json())
      .then(data => setMusics(data))
  }, [])


  return (
    <>
      {musics.map(music => {
        return (
          <>
            <p>Música: {music}</p>
          </>
        )
      })}
    </>
  )
}

export default App
