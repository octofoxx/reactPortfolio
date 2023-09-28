import React from "react";
import "./contact.css";

export default function Contact() {
    return(
        <div style={{ textAlign: 'center', paddingBottom:'150px' }}>
            <h1 id="pageMain">Contact Form</h1>
            <h4>!work in progress, not connected please use links in footer to contact me 😊</h4>
            <form>
                <label>Name:</label>
                <input
                type="text"
                placeholder="Please input your name"
                name="name"
                required>
                </input>
                <br></br>
                <label>Email:</label>
                <input
                type="email"
                placeholder="Email"
                name="email"
                required>
                </input>
                <br></br>
                <label>Message:</label>
                <br></br>
                <textarea
                placeholder="keep your message brief please"
                name="message"
                style={{height:'100px',width:'250px'}}
                required>
                </textarea>
                <div>
                    <button
                    type="submit">
                        Send</button>
                </div>
            </form>
        
        </div>
    );
}

