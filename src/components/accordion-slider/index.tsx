import React from "react"
import "./styles.scss"

interface Slide {
  id: string
  header: string
  description: string
  image: string
}

interface MyProps {
  slides: Slide[]
}

export default function Slider(props: MyProps) {
  const getSlide = (slide: Slide) => (
    <li key={slide.id} style={{ backgroundImage: `url(${slide.image})` }}>
      <div className="sliderLink">
        <h2>{slide.header}</h2>
        <p>{slide.description}</p>
      </div>
    </li>
  )

  return (
    <div className="accordion">
      <ul>{props.slides.map((v) => getSlide(v))}</ul>
    </div>
  )
}
