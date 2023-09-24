import React from "react";
import "./footer.css"

export default function footer () {
    return (
        <footer className="is-size-5 has-text-weight-bold">
        <ul class="contact">
            <li>
                <i class="fa-solid fa-phone"></i>
                Phone# :1(408)218-2479
            </li>
            <li>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:devilmaycry87x@gmail.com">Email:devilmaycry87x@gmail.com</a>
            </li>
            <li>
                <i class="fa-brands fa-discord"></i>
                <a href="https://discordapp.com/users/134112641466630144">Discord:Jazz</a>
            </li>
            <li>
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/octofoxx">Github:octofoxx</a>
            </li>
            <li>
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/jazz-dominguez-228825289/">LinkedIn Profile</a>
            </li>
        </ul></footer>
    );
}