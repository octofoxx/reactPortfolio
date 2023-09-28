import React from "react";
import "./header.css"
import NavBar from "../navBar";

export default function header ({ currentPage, setCurrentPage}) {
    return (
        <div className="headContainer" style={{ padding:'0px 0px 15px 45px'}}>
            <h1 id="titleMain" style={{fontFamily:'Audiowide'}}>Jacob "Jazz" Dominguez</h1>
            <NavBar currentPage ={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
}