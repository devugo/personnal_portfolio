import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Modal, Tag } from 'antd';

import useWindowWidth from '../helpers/hooks/useWindowWidth';
import { PortfolioItem } from '../ui-elements/PortfolioItem';

import CBT1 from '../../images/cbt_images/image1.png';
import CBT3 from '../../images/cbt_images/image3.png';
import CBT4 from '../../images/cbt_images/image4.png';
import CBT5 from '../../images/cbt_images/image5.png';

import ResultDirect1 from '../../images/result_direct_images/image1.png';
import ResultDirect2 from '../../images/result_direct_images/image2.png';
import ResultDirect3 from '../../images/result_direct_images/image3.png';
import ResultDirect4 from '../../images/result_direct_images/image4.png';
import ResultDirect5 from '../../images/result_direct_images/image5.png';

import Sale1 from '../../images/sales_comission_management/image1.jpg';
import Sale2 from '../../images/sales_comission_management/image2.jpg';
import Sale3 from '../../images/sales_comission_management/image3.jpg';

import Storexplore1 from '../../images/storexplore_images/image1.png';
import Storexplore2 from '../../images/storexplore_images/image2.png';
import Storexplore3 from '../../images/storexplore_images/image3.png';
import Storexplore4 from '../../images/storexplore_images/image4.png';

import TaskManagement1 from '../../images/task_management_images/image1.png';
import TaskManagement2 from '../../images/task_management_images/image2.png';
import TaskManagement3 from '../../images/task_management_images/image3.png';


import GithubPage from '../../images/github_images/github.jpg';

// Websites images
import CreoImage from '../../images/websites/creo.jpg';
import ArtistImage from '../../images/websites/artist-portfolio.jpg';
import DesignerImage from '../../images/websites/design-portfolio.jpg';
import OneBurnerImage from '../../images/websites/oneburner.jpg';

let currSlide = 1;

const Portfolio = () => {
    const width = useWindowWidth();

    const [visibleOne, setVisibleOne] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);
    const [visibleThree, setVisibleThree] = useState(false);
    const [visibleFour, setVisibleFour] = useState(false);
    const [visibleFive, setVisibleFive] = useState(false);
    const [visibleSix, setVisibleSix] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);

    const [portfolioState, setPortfolioState] = useState('apps');

    let newRef = useRef(null);

    const [firstIn, setFirstIn] = useState(false);

    useEffect(() => {
        const scroller = () => {
            let fromTop = window.scrollY;

            if(newRef){
                if(newRef.current.offsetTop - window.innerHeight <= fromTop){
                    setFirstIn(true);
                }else{
                    setFirstIn(false);
                }
            }
        }
        window.addEventListener('scroll', scroller);
        return () => {
            window.removeEventListener('scroll', scroller);
        }
    })


    const changeSlide = useCallback(() => {
        currSlide++;
        let slide = currSlide;
        if(slide > 5){
            slide = 1;
            currSlide = 1;
        }

        setActiveSlide(slide);
    }, []);
    useEffect(() => {
        setInterval(changeSlide, 5000);
    }, [changeSlide]);

    return (
        <section className="portfolio" id="portfolio" ref={newRef}>
            <div className="portfolio-container wrapper">
                <h3 className="section-title short-underline" id="portfolio-title">PORTFOLIO</h3>
                <div className="portfolio-container__do center-content">
                    <p id="portfolio-sub__title">Some of the personnal works done in the past are as follows;</p>
                </div>
                <div className="portfolio-container-desktop__body">
                    <div className="buttons">
                        <button className={`btn${portfolioState === 'apps' ? ' active' : ''}`} onClick={() => setPortfolioState('apps')}>Apps</button>
                        <button className={`btn${portfolioState === 'websites' ? ' active' : ''}`} onClick={() => setPortfolioState('websites')} >Websites</button>
                    </div>
                    <div className="portfolio-container-body">
                        {
                            portfolioState === 'apps' ?
                            <>
                                <PortfolioItem
                                    Image={Storexplore2}
                                    action={setVisibleThree}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>STOREXPLORE</h5>
                                    <p>React JS / Express JS / Typescript</p>
                                </PortfolioItem>
                                <PortfolioItem
                                    Image={TaskManagement1}
                                    action={setVisibleSix}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>TASK MANAGEMENT APP</h5>
                                    <p>React JS / Nest JS / Typescript</p>
                                </PortfolioItem>
                                <PortfolioItem
                                    Image={CBT1}
                                    action={setVisibleOne}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>WEB BASED CBT APP</h5>
                                    <p>Symfony / React JS / Redux</p>
                                </PortfolioItem>
        
                                <PortfolioItem
                                    Image={Sale1}
                                    action={setVisibleTwo}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>SALES COMISSION MANAGEMENT SYSTEM</h5>
                                    <p>Laravel / Javascript</p>
                                </PortfolioItem>
        
                                <PortfolioItem
                                    Image={ResultDirect1}
                                    action={setVisibleFour}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>RESULT DIRECT</h5>
                                    <p>Javascript / PHP</p>
                                </PortfolioItem>

                                <PortfolioItem
                                    Image={GithubPage}
                                    action={setVisibleFive}
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>GITHUB PROFILE PAGE</h5>
                                    <p>Javascript / GRAPHQL</p>
                                </PortfolioItem>
                            </> : 
                            <>

                                <PortfolioItem
                                    Image={OneBurnerImage}
                                    liveURL="https://oneburner-by-devugo.netlify.app/"
                                    githubURL="https://github.com/devugo/oneburner"
                                    type="website"
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>SAAS WEBSITE </h5>
                                    <p>HTML / CSS / Javascript</p>
                                </PortfolioItem>

                                 <PortfolioItem
                                    Image={ArtistImage}
                                    liveURL="https://artist-portfolio-by-devugo.netlify.app/"
                                    githubURL="https://github.com/devugo/artist-portfolio/"
                                    type="website"
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>ARTIST PORTFOLIO </h5>
                                    <p>HTML / CSS / Javascript</p>
                                </PortfolioItem>

                                <PortfolioItem
                                    Image={DesignerImage}
                                    liveURL="https://designer-portfolio-by-devugo.netlify.app/"
                                    githubURL="https://github.com/devugo/designer-portfolio"
                                    type="website"
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>DESIGNER PORTFOLIO </h5>
                                    <p>HTML / CSS / Javascript</p>
                                </PortfolioItem>

                                <PortfolioItem
                                    Image={CreoImage}
                                    liveURL="https://codelyne-creo-template-by-devugo.netlify.app/"
                                    githubURL=""
                                    type="website"
                                    className={firstIn ? ' show-content' : ''}
                                >
                                    <h5>LANDING PAGE </h5>
                                    <p>HTML / CSS / Javascript</p>
                                </PortfolioItem>
                            </>
                        }
                       
                    </div>
                </div>
            </div>
            <Modal
                visible={visibleOne}
                onCancel={() => setVisibleOne(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">WEB BASED CBT APPLICATION</h3>
                        <p>
                            CBT Application to conduct exams, tests and quizzes in schools, jobs screening, 
                            conduct surveys and many more.
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            <span className="user-type">Admin </span> is able to create and manage users, user groups, 
                            subjects, levels, questions, exams, account types, etc.
                        </p>
                        <p>
                            The <span className="user-type">User </span> is takes exam from list of available exams.
                        </p>
                        <p>
                            CBT app supports six kinds of questions as follows; <span className="user-type">Multiple options - Single answer</span>,
                            <span className="user-type">Multiple options - Multiple answers</span>, <span className="user-type">Short answers</span>, 
                            <span className="user-type">Long answer</span>, <span className="user-type">Order Items</span> and <span className="user-type">Match items</span>
                        </p>
                        <div>
                            CBT app also support three kinds of exam types; 
                            <ul>
                                <li>Take anytime i.e. exams that can be taken any point in time</li>
                                <li>Take within a time frame i.e. exam that can only be taken within a period of time</li>
                                <li>Take real time i.e. exams that can the taken on a scheduled time only</li>
                            </ul>
                        </div>
                        <p>
                            Exams are taken within a time frame and once the time exceeds, exam is submitted and a result generated showing different information about the exam like;
                            time spent in exam, no of questions answered and unanswered, questions passed and failed, exam score, questions review etc.
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">Symfony</Tag>
                            <Tag color="orange">React</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a href="http://cbt.devugo.com" className="btn" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Live</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={CBT1} alt="cbt app" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={CBT5} alt="cbt app" />
                        <img className={activeSlide === 3 ? 'active-slide' : ''} src={CBT1} alt="cbt app" />
                        <img className={activeSlide === 4 ? 'active-slide' : ''} src={CBT4} alt="cbt app" />
                        <img className={activeSlide === 5 ? 'active-slide' : ''} src={CBT3} alt="cbt app" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleTwo}
                onCancel={() => setVisibleTwo(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">SALES COMMISSION MANAGEMENT SYSTEM</h3>
                        <p>
                            Sales commision managemnt system for managing sales of affiliates and commisions.
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            <span className="user-type">Amin </span> or 
                            <span className="user-type"> Affiliate</span> is able to submits sales and expect payments from the admin.

                        </p>
                        <p>
                            The <span className="user-type">Admin user </span> verifies an affilliate and awards payments.
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">Laravel</Tag>
                            <Tag color="orange">Javascript</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a href="http://brawtavacations.com/" target="_blank" rel="noopener noreferrer" className="btn"><i className="fa fa-eye"></i> Live</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={Sale1} alt="sales comission" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={Sale2} alt="sales comission" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={Sale3} alt="sales comission" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={Sale1} alt="sales comission" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={Sale2} alt="sales comission" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleThree}
                onCancel={() => setVisibleThree(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">STOREXPLORE</h3>
                        <p>
                            Storexplore is a store managmeent system for managing store and products. 
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            The<span className="user-type"> Store owner</span> is able to create and manage store and  products in the store. Also sale managers are created by the store owners for recording daily sales.
                            The<span className="user-type"> Sale managers</span> are responsible for recording sales made daily.
                        </p>
                        <p>
                            The <span className="user-type">Store owner </span>and <span className="user-type">Sale managers </span> are able to communicate using the real time chat feature for more detailed discussions on sales or as the case may be.
                        </p>
                        <p>
                            <span className="user-type">Test credentials: </span> 
                        </p>
                        <p>
                            <b>ADMIN</b> {' '}
                            <span className="user-type">Email: </span> test@gmail.com {' '}
                            <span className="user-type">Password: </span> Password1234
                        </p>
                        <p>
                            <b>SALE MANAGER</b> {' '}
                            <span className="user-type">Email: </span> michael@gmail.com {' '}
                            <span className="user-type">Password: </span> Password1234
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">Javascript</Tag>
                            <Tag color="orange">Express</Tag>
                            <Tag color="orange">Typescript</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                        <a className="btn" href="https://storexplore-by-devugo.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Live</a>
                            <a style={{marginLeft: 10}} className="btn code" href="https://github.com/devugo/storexplore-web-client" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Code</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 || activeSlide === 4 ? 'active-slide' : ''} src={Storexplore1} alt="storexplore" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={Storexplore2} alt="storexplore" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={Storexplore3} alt="storexplore" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={Storexplore4} alt="storexplore" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleFour}
                onCancel={() => setVisibleFour(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
                className="devugo-sample-modal"
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">RESULT DIRECT</h3>
                        <p>
                            Multi schools result solution to manage results in different schools on one platfomr; schools are able to upload 
                            results of students and the students are able to check the result online using designated scratch cards.
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            <span className="user-type">Super admin </span> is able to create and manage pins manually or 
                            automatically. And also, the<span className="user-type"> Super admin</span> is also able to 
                            create and manage classes, arms, sessions, terms and subjects

                        </p>
                        <p>
                            The <span className="user-type">School admin</span> is responsible for uplaoding and managing results of students.
                        </p>
                        <p>
                            The final user is the <span className="user-type">student user</span>. They are able to check their result using scratch cards.
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">Javascript</Tag>
                            <Tag color="orange">PHP</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a className="btn" href="http://resultdirect.org" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i>Live</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={ResultDirect1} alt="result direct" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={ResultDirect2} alt="result direct" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={ResultDirect3} alt="result direct" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={ResultDirect4} alt="result direct" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={ResultDirect5} alt="result direct" />
                    </div>
                </div>
            </Modal>
            
            <Modal
                visible={visibleFive}
                onCancel={() => setVisibleFive(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">GITHUB PROFILE PAGE</h3>
                        <p>
                        An app that displays the profile page of a github user using the GRAPHQL API.
                        </p>
                        <p>
                            Features of this application are as follows; 
                        </p>
                        <p>
                            List 20 public repositories and their details of an utheticated user using the personnal token as well as some basic user details.
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">SASS</Tag>
                            <Tag color="orange">Javascript</Tag>
                            <Tag color="orange">GraphQL</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a className="btn" href="https://github-profile-by-devugo.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Live</a>
                            <a style={{marginLeft: 10}} className="btn code" href="https://github.com/devugo/github-profile-page" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Code</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 || activeSlide === 2 || activeSlide === 3 || activeSlide === 4 || activeSlide === 5 ? 'active-slide' : ''} src={GithubPage} alt="github profile" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleSix}
                onCancel={() => setVisibleSix(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">TASK MANAGEMENT APP</h3>
                        <p>
                        This is an app use basically to maanage your day to day activities or tasks and everything in one place.
                        </p>
                        <p>
                            Features of this application are as follows; 
                        </p>
                        <p>
                            You have the ability to add tasks, mark tasks as complete, reschedule tasks, group tasks by projects and labels and many more.
                        </p>
                        <p>
                            <span className="user-type">Test credentials: </span> 
                        </p>
                        <p>
                            <span className="user-type">Email: </span> test@gmail.com {' '}
                            <span className="user-type">Password: </span> Password1234
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">Typescript</Tag>
                            <Tag color="orange">React</Tag>
                            <Tag color="orange">Nest JS</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a className="btn" href="https://task-management-by-devugo.netlify.app/" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Live</a>
                            <a style={{marginLeft: 10}} className="btn code" href="https://github.com/devugo/task-management-web-client" target="_blank" rel="noopener noreferrer"><i className="fa fa-eye"></i> Code</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img  className={activeSlide === 1 || activeSlide === 3 ? 'active-slide' : ''} src={TaskManagement1} alt="task management" />
                        <img  className={activeSlide === 2 || activeSlide === 5 ? 'active-slide' : ''} src={TaskManagement2} alt="task management" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={TaskManagement3} alt="task management" />
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Portfolio;