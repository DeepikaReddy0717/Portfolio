import React from 'react';
import './About.css';
import Image from '../../assets/about-profile.jpg';
import Resume from '../../assets/Deepu resume.pdf'; 
const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    };

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="Deepika Reddy" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hi! I'm <strong>Deepika Reddy</strong>, a Computer Science student at <strong>Koneru Lakshmaiah University</strong>.
                            I love learning new things, especially about software and how websites and apps are built.
                        </p>
                        <p className="about__description">
                            Right now, I’m learning <strong>Java, C, C++, Web Development,</strong> and <strong>Databases</strong>. 
                            I enjoy solving problems and building real projects that work in the real world.
                        </p>
                        <p className="about__description">
                            I like writing simple and clean code, and I always try to make things that are easy to use.
                            I also practice coding by doing challenges, working on projects, and learning from open-source work.
                        </p>
                        <p className="about__description">
                            I’m excited to learn more, do internships, work on team projects, and grow in the field of software development.
                        </p>

                        <button className="btn download-resume" onClick={downloadResume}>
                            📄 Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
