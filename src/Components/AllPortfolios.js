import pomoDuck from "../img/portImages/pomoDuck.png";
import lookingRuff from "../img/portImages/lookingRuff2.png";
import birdBikeMap2 from "../img/portImages/birdBikeMap2.jpg";
import burgertime from "../img/portImages/burgertime.png";

const portfolios = [
  {
    id: 1,
    category: "React JS",
    link1: "https://pomoduck.com/",
    link2: "https://github.com/TomatoPals/PomoDuck",
    icon1: "Repo",
    icon2: "Deployed",
    image: pomoDuck,
    title: "Pomoduck"
  },
  {
    id: 2,
    category: "jQuery",
    link1: "https://lookin-ruff.herokuapp.com",
    link2: "https://github.com/TomatoPals/Lookin-Ruff",
    icon1: "Repo",
    icon2: "Deployed",
    image: lookingRuff,
    title: "Lookin Ruff Pet Grooming"
  },
  {
    id: 3,
    category: "Javascript",
    link1:
      "https://bartcusick.github.io/bootCamp_Project_1-_Outdoor-Adventure-Planner",
    link2:
      "https://github.com/bartcusick/bootCamp_Project_1-_Outdoor-Adventure-Planner",
    icon1: "Repo",
    icon2: "Deployed",
    image: birdBikeMap2,
    title: "Outdoor Adventure Planner"
  },
  {
    id: 4,
    category: "Node.js",
    link1: "https://its-burger-time2020.herokuapp.com/",
    link2: "https://github.com/g-strick/its-burger-time",
    icon1: "Repo",
    icon2: "deployed",
    image: burgertime,
    title: "Burger Time"
  }
  // {
  //   id: 5,
  //   category: "React Js",
  //   link1: "www.youtube.com",
  //   link2: "www.github.com",
  //   icon1: "G",
  //   icon2: "Y",
  //   image: port6,
  //   title: "Getting Started With React"
  // }
];

export default portfolios;
