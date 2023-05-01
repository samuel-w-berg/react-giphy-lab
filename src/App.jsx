import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./Form/Form"
import Gif from "./Gif/Gif"

function App() {
  const [gifName, setGifName] = useState('')
  const [gif, setGif] = useState({})

  useEffect(() => {
    // const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=Gy4G0gQruXTZKpbfB0Bzon0kT75fvi6p&q=${gifName}&limit=1&offset=0&rating=pg-13&lang=en`
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=Gy4G0gQruXTZKpbfB0Bzon0kT75fvi6p&tag=${gifName}&rating=pg-13`

    async function getGif() {
      try{
        const response = await fetch(gifUrl);
        const data = await response.json();
        console.log(data)
        setGif(data.data.images.downsized_large)


      } catch (err) {
        console.log(err);
      }
    }
    getGif();
  }, [gifName])

  function liftGifName(gifName){
    setGifName(gifName)
  }

  return (
    <>
      <h1>Welcome to Random Gif Generator</h1>
      <Form liftGifName={liftGifName}/>
      <Gif gif={gif}/>
    </>
  )
}

export default App
