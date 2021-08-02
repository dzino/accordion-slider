import React, { useState } from "react";
import "./styles.css";
import Slider from "./accordion-slider";

const slides = [
  {
    id: "0",
    header: "Slide 1",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/the-beautiful-place-ha-long-bay_181624-19966.jpg"
  },
  {
    id: "1",
    header: "Slide 2",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/morning-sun-light-rays-piercing-through-the-trees_97378-54.jpg"
  },
  {
    id: "2",
    header: "Slide 3",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/the-shore-or-fallen-leaf-lake-and-its-still-water-with-beautiful-reflection-in-the-water_181624-423.jpg"
  },
  {
    id: "3",
    header: "Slide 4",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/harbor-freight-blue-toned-images_1127-2863.jpg"
  },
  {
    id: "4",
    header: "Slide 5",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-vector/realistic-lightning-bolts-flashes-composition-with-images-of-clouds-in-night-sky-and-radiant-glowing-lightning-strokes_1284-28572.jpg"
  },
  {
    id: "5",
    header: "Slide 6",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-vector/realistic-lightning-bolts-flashes-composition-with-view-of-night-city-sky-with-clouds-and-thunderbolt-images_1284-28574.jpg"
  }
];

export default function App() {
  const [id, setID] = useState<null | string>("0");
  return (
    <div className="App">
      <h1>Accordion-slider</h1>
      <h2>(Adaptive layout)</h2>
      <Slider slides={slides} active={id} callback={setID} />
      <p>ID: {id}</p>
    </div>
  );
}
