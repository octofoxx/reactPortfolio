import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

export default function Project ({ currentPage, setCurrentPage}) {
    if (currentPage ==='About') {
        return <About />;
    }
    if (currentPage ==='Contact') {
        return <Contact />;
    }
    if (currentPage ==='Portfolio') {
        return <Portfolio />;
    }
    if (currentPage==='Resume') {
        return <Resume />;
    }
}