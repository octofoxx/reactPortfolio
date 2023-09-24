import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

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
}