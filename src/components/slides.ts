import * as Dec from "../declaration"
import { SVG } from "./svg"

const slides: Dec.General.Slide[] = [
  {
    id: "0",
    icon: SVG(100, "#f73914").temperature,
    header: "GitHub",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/the-beautiful-place-ha-long-bay_181624-19966.jpg",
  },
  {
    id: "1",
    icon: SVG(100, "#f73914").temperature,
    header: "Google Play",
    description:
      "Hello world\nHello world\nHello world\nHello world\n\nHello world",
    image:
      "https://image.freepik.com/free-photo/morning-sun-light-rays-piercing-through-the-trees_97378-54.jpg",
  },
  {
    id: "2",
    icon: SVG(100, "#f73914").temperature,
    header: "Upwork",
    description:
      "Hello world\nHello world\nHello world\nHello world\nHello world",
    image:
      "https://image.freepik.com/free-photo/the-shore-or-fallen-leaf-lake-and-its-still-water-with-beautiful-reflection-in-the-water_181624-423.jpg",
  },
  {
    id: "3",
    icon: SVG(100, "#f73914").temperature,
    header: "Email",
    description: "Hello world",
    image:
      "https://image.freepik.com/free-photo/the-shore-or-fallen-leaf-lake-and-its-still-water-with-beautiful-reflection-in-the-water_181624-423.jpg",
  },
]

export default slides
