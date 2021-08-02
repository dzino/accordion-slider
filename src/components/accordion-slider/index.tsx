import React from "react"
import "./styles.scss"
import * as Dec from "../../declaration"

interface MyProps {
  slides: Dec.General.Slide[]
}

export default function Slider(props: MyProps) {
  const getSlide = (slide: Dec.General.Slide) => (
    <li
      key={slide.id}
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      <div className="sliderLink">
        <div className="icon">{slide.icon}</div>
        <div className="information">
          <h2>{slide.header}</h2>
          <p>{slide.description}</p>
        </div>
        {slide.link ? (
          <button
            className="button"
            onClick={() => window.open(slide.link || "")}
          >
            Look
          </button>
        ) : undefined}
      </div>
    </li>
  )

  return (
    <div className="accordion">
      <ul>{props.slides.map((v) => getSlide(v))}</ul>
      <p className="signature">https://codesandbox.io/u/dzino</p>
    </div>
  )
}
