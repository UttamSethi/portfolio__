// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Uttam Sethi",
  tagline: "I am a Full Stack Web Developer",
  img: profile,
  about: ` 
   `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/uttam-sethi-826975223/",
  github: "https://github.com/UttamSethi",
  twitter: " https://x.com/uttamsethi15?s=11",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer Intern",
    Company: `Bharat Intern`,
    Location: "Remote",
    Type: "Internship",
    Duration: "June 2024 - Jul 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Technology(B.Tech) in Computer Science & Engineering",
    Company: `Maulana Azad National Institute of Technology,Bhopal`,
    Location: "Bhopal, Madhya Pradesh, India",
    Duration: "December 2021 - June 2025",
  },

  {
    Position: "XII-(State board)",
    Company: `S M P Public School`,
    Location: "Prayagraj, Uttar Pradesh",
    Duration: "March 2019 - March 2020",
  },
  {
    Position: "X-(State Board)",
    Company: `S M P Public School`,
    Location: "Prayagraj, Uttar Pradesh",
    Duration: "March 2017 - March 2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ChatApp",
    image: projectImage1,
    description: `ChatApp is a real-time chat application that allows users to communicate with each other instantly. This project is built using JavaScript technologies to provide a seamless and interactive chatting experience.`,
    techstack: "HTML, CSS, JavaScript , ReactJs, NodeJs, ExpressJs, MongoDB, Websocket",
    githubLink: "https://github.com/UttamSethi/ChatApp",
  },
  {
    title: "Game Monkey And Dinosaur",
    image: projectImage2,
    description: `"Monkey vs. Dinosaur" is an action-packed, browser-based game that brings together two unlikely rivals in an unforgettable battle. Created using HTML, CSS, and JavaScript, this thrilling game promises hours of fun and excitement for players of all ages.`,
    techstack: "HTML, CSS, JavaScript ",
    githubLink: "https://github.com/UttamSethi/Game-Monkey-Dianosaur-",
  },
  {
    title: "Volume Control with Hand Detection",
    image: projectImage3,
    description: `This is a Python project that uses computer vision to control the system volume with hand gestures. By leveraging OpenCV and MediaPipe, the application detects hand movements and adjusts the volume in real-time.`,
    techstack: "Python, OpenCV, MediaPipe",
    githubLink: "https://github.com/UttamSethi/Volume-Control-with-Hand-Detection",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "uttams15oct@gmail.com",
};
