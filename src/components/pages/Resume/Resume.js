import resume from '../../../assets/resume.pdf';
import './resume.css'

export default function Resume() {
    return (
        <div>
            <section>
            <button className='button'>
            <a href={resume} download='resume.pdf'>Download Resume</a>
            </button>
        </section>
        <section style={{textAlign:'center',fontSize:'25px'}}>
            <h1>Front End Skills</h1>
            <br></br>
            <ul>
                <li> HTML</li>
                <li> CSS</li>
                <li> JavaScript</li>
                <li> React</li>
                <li> Bootstrap</li>
                <li> Bulma</li>
            <br></br>    
            </ul>
        </section>
        <section style={{textAlign:'center', fontSize:'25px'}}>
            <h1>Back End Skills</h1>
            <br></br>
            <ul>
                <li> Node.js</li>
                <li> Express</li>
                <li> MySQL</li>
                <li> MongoDB</li>
                <li> HTML</li>
            </ul>
        </section>
        </div>
        

    );
}
