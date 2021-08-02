import React from "react"
import "./components/styles.scss"
import Slides from "./components/slides"
import Slider from "./components/accordion-slider"

export default function App() {
  return (
    <div id="App">
      <Slider slides={Slides} />
    </div>
  )
}
