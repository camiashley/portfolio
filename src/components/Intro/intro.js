import React from 'react';
import "./intro.css";
import { Link } from 'react-scroll';
const Intro = () =>{
    return(
        <section id="intro">
            <div className ="introContent">
                <span className="hello"> Hello</span>
                <span className="introText">I'm <span className ="introName">Cami Hawkins</span><br />Software Engineer</span>
                
               <Link><button className="btn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}><img src="" alt=""/>Hire Me</button></Link>
            </div>
            <img src="./profile.png" alt="profile" className='pro' />
        </section>
    );
}
export default Intro