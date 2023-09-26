import React from "react";

export default function Contact() {
    return(
        <div>
            <h1 id="pageMain">Contact Form</h1>
            <form style={{textAlign:'center', padding:'130px'}}>
                <input
                type="text"
                placeholder="Please input your name"
                name="name"
                required>
                </input>
                <input
                type="email"
                placeholder="Email"
                name="email"
                required>
                </input>
                <textarea
                placeholder="keep your message brief please"
                name="message"
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

