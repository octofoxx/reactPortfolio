import React from "react";
import Project from "./Project";
import 'bootstrap/dist/css/bootstrap.min.css';

import MemoryCard from "../../images/memoryCardGame.png";
import BRCdemo from "../../images/BRCdemo.png";
import horseCreate from "../../images/horseCreate.png";

const projects = [
    { image: MemoryCard, altText: "memory card game display", description: "A simple memory card game made with Javascript featuring my OCs.", webLink: "https://octofoxx.github.io/memoryCardGame/", repoLink: "https://github.com/octofoxx/memoryCardGame" },

    { image: BRCdemo, altText: "display for battle horse game", description: "1st group project, a random generated horse battle game.", webLink: "https://tannerrhines.github.io/BerkeleyRacingClub/", repoLink: "https://github.com/TannerRhines/BerkeleyRacingClub" },

    { image: horseCreate, altText: "horse character page display", description: "2nd group project, a DnD style horse character creator.", webLink: "https://horse-creator-app-9839a5a7a948.herokuapp.com/", repoLink: "https://github.com/Veladare/Horse_creator" }
];

export default function Portfolio() {
    return (
        <div>
            <section className="gallery">
                <div className="container-xxl">
                    <div className="row gy-4">
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
                </div>
            </section>
        </div>
    );
}
