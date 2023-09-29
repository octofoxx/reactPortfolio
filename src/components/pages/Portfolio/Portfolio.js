import React from "react";
import Project from "../Project";
import "./portfolio.css"

import MemoryCard from "../../../images/memoryCardGame.png";
import BRCdemo from "../../../images/BRCdemo.png";
import horseCreate from "../../../images/horseCreate.png";
import blogSite from "../../../images/blogSite.png";
import multiQuiz from "../../../images/multiQuiz.png";
import weatherApp from "../../../images/weatherApp.png";


const projects = [
    { image: MemoryCard, altText: "memory card game display", description: "A simple memory card game made with Javascript featuring my OCs.", webLink: "https://octofoxx.github.io/memoryCardGame/", repoLink: "https://github.com/octofoxx/memoryCardGame" },

    { image: BRCdemo, altText: "display for battle horse game", description: "1st group project, a random generated horse battle game.", webLink: "https://tannerrhines.github.io/BerkeleyRacingClub/", repoLink: "https://github.com/TannerRhines/BerkeleyRacingClub" },

    { image: horseCreate, altText: "horse character page display", description: "2nd group project, a DnD style horse character creator.", webLink: "https://horse-creator-app-9839a5a7a948.herokuapp.com/", repoLink: "https://github.com/Veladare/Horse_creator" },
    
    { image: blogSite, altText: "homepage for the blog site", description: "A blog site using Sequelize, Express sessions and Handlebars.", webLink: "https://octofoxx-blog-site-bcbdc70fafc2.herokuapp.com/", repoLink: "https://github.com/octofoxx/blog_site" },

    { image: weatherApp, altText: "homepage of the weather app", description: "A weatherApp calling the openWeather API.", webLink: "https://octofoxx.github.io/weatherApp_challenge6/", repoLink: "https://github.com/octofoxx/weatherApp_challenge6" },

    { image: multiQuiz, altText: "display for a question with answers", description: "A JavaScript multiple choice quiz.", webLink: "https://github.com/octofoxx/multichoice_quiz_challenge4", repoLink: "https://github.com/octofoxx/multichoice_quiz_challenge4" }
];

export default function Portfolio() {
    return (
        <section style={{ textAlign: 'center', paddingBottom:'50px' }}>
            <h1 id="pageMain">Portfolio</h1>
            <div id="grid">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        image={project.image}
                        altText={project.altText}
                        description={project.description}
                        webLink={project.webLink}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        </section>
    );
}
