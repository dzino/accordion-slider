import React, { useState } from "react"
import "./styles.scss"
import Slides from "./slides"
import Slider from "./components/accordion-slider"

export default function App() {
  return (
    <div id="App">
      <Slider slides={Slides} />
    </div>
  )
}
