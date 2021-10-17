import React from 'react';

import { Tag } from 'antd';
import AboutImg2 from '../../images/about.svg';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container wrapper">
                <h3 className="about-container__title short-underline section-title" id="about-container__title">ABOUT ME</h3>
                <div className="about-container__content" id="about-container__content">
                    <div className="about-container__content-bio">
                        <div className="about-container__content-bio__img center-content">
                            <img src={AboutImg2} className="top-in-shake" alt="My profile"/>
                        </div>
                        <div className="about-container__content-bio__summary center-content">
                            <p>I am Ugochukwu Ezenwankwo or better still Devugo, a software developer
                                with three years of professional experience, pretty good with developing, building,
                                and designing web pages, applications across various platforms.
                            </p>
                            <div className="skills-icons">
                                {/* <Tag className="tag-me" color="purple">HTML</Tag>
                                <Tag className="tag-me" color="blue">CSS</Tag> */}
                                <Tag className="tag-me" color="magenta">Javascript</Tag>
                                <Tag className="tag-me" color="blue">Typescript</Tag>
                                <Tag className="tag-me" color="red">React Js</Tag>
                                <Tag className="tag-me" color="volcano">React Native</Tag>
                                <Tag className="tag-me" color="green">Nest Js</Tag>
                                {/* <Tag className="tag-me" color="orange">PHP</Tag> */}
                                <Tag className="tag-me" color="gold">Symfony</Tag>
                            </div>
                        </div>
                    </div>
                    <div className="about-container__content-resume">
                        <div className="resume-title">
                            <h3>WORK EXPERIENCE</h3>
                        </div>
                        <div className="work-history">
                            <div className="single-work">
                                <div className="single-work__title">
                                    <div className="position-organization">
                                        <h4 className="position">Software Developer</h4>
                                        <h5 className="organization">Octosoft Technologies</h5>
                                    </div>
                                    <div className="date-period-container">
                                        <p className="date-period">Feb 2021 - Till date</p>
                                    </div>
                                </div>
                                <div className="job-description">
                                    <div className="responsiblities">
                                        <h5>Responsibilities</h5>
                                        <ul>
                                            <li>Responsible for developing cross platform applications using React Native.</li>
                                            <li>Responsible for converting UI designs templates to code.</li>
                                            <li>Responsible for building and development of web solutions and applications.</li>
                                        </ul>
                                    </div>
                                    <div className="accomplishemnts">
                                        <h5>Achievements</h5>
                                        <ul>
                                            <li>Built an expense mobile app (both android and ios compatible) for the parent group to manage expenses within the organization.</li>
                                            <li>Migrated existing static site to a dynamic site, making it a full CMS by utilizing StrapiJS as a backend service.</li>
                                        </ul>
                                    </div>
                                    <div className="tools">
                                        <h5>Tools</h5>
                                        <ul>
                                            <li>Javascript, Typescript, React JS, React Native, Strapi JS, Nest JS, and Docker.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-work">
                                <div className="single-work__title">
                                    <div className="position-organization">
                                        <h4 className="position">Fullstack Developer</h4>
                                        <h5 className="organization">Emplug Ltd.</h5>
                                    </div>
                                    <div className="date-period-container">
                                        <p className="date-period">Jun 2019 - Dec 2020</p>
                                    </div>
                                </div>
                                <div className="job-description">
                                    <div className="responsiblities">
                                        <h5>Responsibilities</h5>
                                        <ul>
                                            <li>Responsible for designing the overall architecture of applications.</li>
                                            <li>Responsible for building UIs and Client's side of an application.</li>
                                            <li>Responsible for developing restful and graphql APIs.</li>
                                            <li>Responsible for testing, troubleshooting and debugging of applications.</li>
                                        </ul>
                                    </div>
                                    <div className="accomplishemnts">
                                        <h5>Achievements</h5>
                                        <ul>
                                            <li>I was involved in the development of a Computer Based Test (CBT) application which we used all over 
the nation in conducting large scale recruitment exercises like that of the NDLEA.</li>
                                            <li> I was also involved in the development of a 
job application portal; for the management of recruitment processes (the jobs and applications). Being a full stack developer
got me involved in both tiers of development i.e. Front end and Back end.</li>
                                        </ul>
                                    </div>
                                    <div className="tools">
                                        <h5>Tools</h5>
                                        <ul>
                                            <li>Javascript, React JS, PHP, Symfony, and Firebase.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="single-work">
                                <div className="single-work__title">
                                    <div className="position-organization">
                                        <h4 className="position">Web Developer (Freelance)</h4>
                                        <h5 className="organization">Upwork and Fiverr.</h5>
                                    </div>
                                    <div className="date-period-container">
                                        <p className="date-period">Feb 2018 - Jun 2019</p>
                                    </div>
                                </div>
                                <div className="job-description">
                                    <div className="responsiblities">
                                        <h5>Responsibilities</h5>
                                        <ul>
                                            <li>Responsible for designing, coding and modifying websites, from layout to function according to a client's specifications.</li>
                                            <li>Responsible for creating visually appealing sites that feature user-friendly design and clear navigation.
</li>
                                            <li>Responsible for fixing problems within existing applications.</li>
                                        </ul>
                                    </div>
                                    <div className="accomplishemnts">
                                        <h5>Achievements</h5>
                                        <ul>
                                            <li>Developed a multi school <a href="https://www.resultdirect.org/" target="_blank" rel="noreferrer">result checker</a> application for managing results in schools.</li>
                                            <li>Built a <a href="https://brawtavacations.com/" target="_blank" rel="noreferrer">sales commission managment </a> application for managing sales and commission of affiliates.</li>
                                        </ul>
                                    </div>
                                    <div className="tools">
                                        <h5>Tools</h5>
                                        <ul>
                                            <li>Javascript, React JS, PHP, and Laravel.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="download">
                            <a className="btn" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1vMHHTqo0BCbs6_om1-olSorcDqwq1dkL/view?usp=sharing">VIEW CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;