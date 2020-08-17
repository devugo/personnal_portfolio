import React from 'react';

import { Tag } from 'antd';
import AboutImg from '../../images/about2.png';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h3 className="about-container__title short-underline section-title" id="about-container__title">ABOUT ME</h3>
                <div className="about-container__content" id="about-container__content">
                    <div className="about-container__content-img center-content">
                        <img src={AboutImg} className="top-in-shake" />
                    </div>
                    <div className="about-container__content-description">
                        <div className="summary">
                            <p>I am Ezenwankwo Ugochukwu or better still Devugo, a software engineer
                                with three years of experience, pretty good with developing, building,
                                and designing web pages, applications across various platforms.
                            </p>
                            <p>
                                I'm great in the use of these technologies; HTML, CSS, PHP, Javascript, 
                                React, Symfony, Laravel and SQL. Ease of use and customer satisfaction
                                 are pretty much my primary goal in the entire development processes.
                            </p>
                            <p>
                                In my years of development, i have acquired and utilized these skill 
                                set in various project conducted; in both frontend and back end development, 
                                design of various web pages and application, building robust APIs and scalable applications.
                            </p>
                        </div>
                        <div className="skills-icons">
                            <Tag className="tag-me" color="purple">HTML</Tag>
                            <Tag className="tag-me" color="blue">CSS</Tag>
                            <Tag className="tag-me" color="magenta">Javascript</Tag>
                            <Tag className="tag-me" color="red">React Js</Tag>
                            <Tag className="tag-me" color="volcano">React Native</Tag>
                            <Tag className="tag-me" color="orange">PHP</Tag>
                            <Tag className="tag-me" color="gold">Symfony</Tag>
                            <Tag className="tag-me" color="green">Laravel</Tag>
                            <Tag className="tag-me" color="yellow">SQL</Tag>
                        </div>
                        <div className="download">
                            <a className="btn" target="_blank" href="https://drive.google.com/open?id=1V_V_Pv-xKss9cauOL_vwd3s2femTAXJk">VIEW CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;