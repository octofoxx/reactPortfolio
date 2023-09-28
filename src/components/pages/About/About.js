import React from 'react';
import "./about.css";
import pfp from "../../../images/pfp2.jpg"

export default function About() {
  return (
    <div style={{ textAlign: 'center', paddingBottom:'50px' }}>
      <h1 id='pageMain'>About Page</h1>
      <img src={pfp} alt='the developer of this site' style={{ alignItems: 'center', maxWidth: '250px', maxHeight: '250px', padding: '25px' }}></img>
      <p>
        I am a soon to be graduate of the UC Berkeley full-stack coding boot camp course. Through this course I
        have started to gain experience working with JavaScript, node.js, MySQL, Sequelize, React, Express
        (including express-sessions, express-handlebars). <br></br> After graduation, I want to learn other
        languages; my focus is to start with Python, C#, Unity and Rust.
      </p>
      <br></br>
      <p>
        I've been working retail since I was 19 years old, and now at 36 it has become time for me to make a
        change. I have lots of experience when it comes to retail sales, building teamwork, training individuals
        and working with objective based sales goals.
      </p>
      <br></br>
      <p>
        In my personal time I love to play video games, try new foods and go out with friends for cocktails. I
        tend to lead a quiet life and enjoy just hanging out around my home.
      </p>

      <a href="../../images/resume.pdf" download>Download CV</a>
    </div>
  );
}