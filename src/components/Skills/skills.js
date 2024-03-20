import React from 'react';
import "./skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <span className="Skilltitle"> About Me 
            </span>
                <span className="Skilldesc"> I am a recent graduate, I am currently seeking entry level software engineering roles, 
                front-end developer roles, back-end roles, and UI/UX design roles. In my free time I like to hang out with family and friends, travel, play video games, go for walks and hikes 
                in nature, and I also enjoy music. I recently graduated from San Jose State University with a bachelors degree in Software Engineering. I have a skill set
                that includes front end work and web development and design using HTML, Java Swing, React JS, and CSS. I have experienced using SQL and MongoDB. This portfolio was
                created using React JS.</span>
            <div className="worksImgs">
                <img src="./javap.png" alt="" className="worksImg" />
                <img src="./cssp.png" alt="" className="worksImg" />
                <img src="./htmlp.png" alt="" className="worksImg" />
                <img src="./jsp.png" alt="" className="worksImg" />
                <img src="./reactp.png" alt="" className="worksImg" />
                <img src="./sqlp.png" alt="" className="worksImg" />
                <img src="./mm.png"  alt="" className="worksImg" />
                <img src="./py.jpeg" alt="" className="worksImg" />
            </div>
           
           
            
        </section>
    )
}

export default Skills