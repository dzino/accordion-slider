import * as Dec from "../declaration"
import { SVG } from "./svg"

import GitHub from "../images/github.webp"
import Play from "../images/play.webp"
import UpWork from "../images/upwork.webp"
import Email from "../images/email.webp"

const slides: Dec.General.Slide[] = [
  {
    id: "0",
    icon: SVG(100, "#000").gitHub,
    header: "GitHub",
    description:
      "Check out some of my work in the most popular code repository!",
    image: GitHub,
    link: "https://github.com/dzino",
    copy: null,
  },
  {
    id: "1",
    icon: SVG(100, "#f73914").play,
    header: "Google Play",
    description:
      "Check out some of my ready-made mobile projects on the google store!",
    image: Play,
    link: "https://play.google.com/store/apps/developer?id=dzino",
    copy: null,
  },
  {
    id: "2",
    icon: SVG(100, "#14a800").upWork,
    header: "Upwork",
    description: "Check out my skills and offerings in the freelance market!",
    image: UpWork,
    link: "https://www.upwork.com/freelancers/~0182a491d9b3506401",
    copy: null,
  },
  {
    id: "3",
    icon: SVG(100, "#f73914").mail,
    header: "Email",
    description: "Or write to me if you have any questions:",
    image: Email,
    link: null,
    copy: "maksoku@gmail.com",
  },
]

export default slides
