import * as Dec from "../declaration"
import { SVG } from "./svg"

import GitHub from "../images/github.jpg"
import Play from "../images/play.jpeg"
import UpWork from "../images/upwork.jpg"
import Email from "../images/email.webp"

const slides: Dec.General.Slide[] = [
  {
    id: "0",
    icon: SVG(100, "#000").gitHub,
    header: "GitHub",
    description:
      "Check out some of my work in the most popular code repository!\n\nhttps://github.com/dzino",
    image: GitHub,
  },
  {
    id: "1",
    icon: SVG(100, "#f73914").play,
    header: "Google Play",
    description:
      "Check out some of my ready-made\nmobile projects on the google store!\n\nhttps://play.google.com\n/store/apps/developer?id=dzino",
    image: Play,
  },
  {
    id: "2",
    icon: SVG(100, "#14a800").upWork,
    header: "Upwork",
    description:
      "Check out my skills and offerings in the freelance market!\n\nhttps://www.upwork.com\n/freelancers/~0182a491d9b3506401",
    image: UpWork,
  },
  {
    id: "3",
    icon: SVG(100, "#f73914").mail,
    header: "Email",
    description:
      "Or write to me if you have any questions:\n\nmaksoku@gmail.com",
    image: Email,
  },
]

export default slides
