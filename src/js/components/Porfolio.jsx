import React, { useState, useEffect, useRef } from 'react';
import { Modal, Tag } from 'antd';

import useWindowWidth from '../helpers/hooks/useWindowWidth';

import CBT1 from '../../images/cbt_images/image1.png';
import CBT2 from '../../images/cbt_images/image2.png';
import CBT3 from '../../images/cbt_images/image3.png';
import CBT4 from '../../images/cbt_images/image4.png';
import CBT5 from '../../images/cbt_images/image5.png';

import Result1 from '../../images/result_images/image1.png';
import Result2 from '../../images/result_images/image2.png';
import Result3 from '../../images/result_images/image3.png';
import Result4 from '../../images/result_images/image4.png';
import Result5 from '../../images/result_images/image5.png';

import Fee1 from '../../images/fees_images/image1.png';
import Fee2 from '../../images/fees_images/image2.png';
import Fee3 from '../../images/fees_images/image3.png';
import Fee4 from '../../images/fees_images/image4.png';
import Fee5 from '../../images/fees_images/image5.png';

import Landing1 from '../../images/landing_page_images/image1.png';
import Landing2 from '../../images/landing_page_images/image2.png';
import Landing3 from '../../images/landing_page_images/image3.png';
import Landing4 from '../../images/landing_page_images/image4.png';
import Landing5 from '../../images/landing_page_images/image5.png';

import ResultDirect1 from '../../images/result_direct_images/image1.png';
import ResultDirect2 from '../../images/result_direct_images/image2.png';
import ResultDirect3 from '../../images/result_direct_images/image3.png';
import ResultDirect4 from '../../images/result_direct_images/image4.png';
import ResultDirect5 from '../../images/result_direct_images/image5.png';

import ReactPag1 from '../../images/react_pagination_images/image1.png';
import ReactPag2 from '../../images/react_pagination_images/image2.png';
import ReactPag3 from '../../images/react_pagination_images/image3.png';
import ReactPag4 from '../../images/react_pagination_images/image4.png';
import ReactPag5 from '../../images/react_pagination_images/image5.png';

const Portfolio = props => {
    const width = useWindowWidth();

    const [visibleOne, setVisibleOne] = useState(false);
    const [visibleTwo, setVisibleTwo] = useState(false);
    const [visibleThree, setVisibleThree] = useState(false);
    const [visibleFour, setVisibleFour] = useState(false);
    const [visibleFive, setVisibleFive] = useState(false);
    const [visibleSix, setVisibleSix] = useState(false);
    const [activeSlide, setActiveSlide] = useState(1);

    let newRef = useRef(null);

    const [firstIn, setFirstIn] = useState(false);

    useEffect(() => {
        const scroller = () => {
            let fromTop = window.scrollY;

            if(newRef){
                // console.log(newRef.current.offsetTop);
                // console.log(window.innerHeight);
                if(newRef.current.offsetTop - window.innerHeight <= fromTop){
                    setFirstIn(true);
                    // document.getElementById('about').classList.add('slide-in');
                }else{
                    setFirstIn(false);
                }
              
                // console.log(newRef.current.offsetTop);
                // console.log(newRef.current.offsetHeight);
            }
        }
        window.addEventListener('scroll', scroller);
        return () => {
            window.removeEventListener('scroll', scroller);
        }
    })

    let { light } = props;

    let currSlide = 1;

    const changeSlide = () => {
        currSlide++;
        let slide = currSlide;
        if(slide > 5){
            slide = 1;
            currSlide = 1;
        }

        setActiveSlide(slide);
    }
    useEffect(() => {
        setInterval(changeSlide, 5000);
    }, []);

    return (
        <section className="portfolio" id="portfolio" ref={newRef}>
            <h3 className="section-title short-underline" id="portfolio-title">PORTFOLIO</h3>
            <div className="portfolio__do center-content">
                <p id="portfolio-sub__title">Some of the works done in the past are as follows;</p>
            </div>
            <div className="portfolio-desktop__body">
                <div className="portfolio-body">
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={CBT2} alt="project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                                <h5>WEB BASED CBT APP</h5>
                                <p>Symfony / React / Redux</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleOne(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={Result2} alt="result_project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                                <h5>SCHOOL RESULT SOLUTION</h5>
                                <p>Symfony / React</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleTwo(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={Fee1} alt="fees_project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                                <h5>FEES MANAGEMENT SYSTEM</h5>
                                <p>PHP MVC / Javascript</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleThree(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={ResultDirect1} alt="project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                            <h5>RESULT DIRECT</h5>
                                <p>HTML / CSS / Javascript</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleFour(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={Landing1} alt="project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                            <h5>LANDING PAGE</h5>
                                <p>HTML / CSS / Javascript</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleFive(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                    <div className={`portfolio-content${firstIn ? ' show-content' : ''}`}>
                        <img src={ReactPag1} alt="project" />
                        <div className="portfolio-content__show center-content">
                            <div className="title">
                            <h5>REACT JS PAGINATION</h5>
                                <p>React</p>
                            </div>
                            <div className="button">
                                <button onClick={() => setVisibleSix(true)}>LEARN MORE</button>
                            </div>
                        </div>
                    </div><br />
                </div>
            </div>
            <Modal
                visible={visibleOne}
                onCancel={() => setVisibleOne(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
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
                        <p>
                            CBT app also support three kinds of exam types; 
                            <ul>
                                <li>Take anytime i.e. exams that can be taken any point in time</li>
                                <li>Take within a time frame i.e. exam that can only be taken within a period of time</li>
                                <li>Take real time i.e. exams that can the taken on a scheduled time only</li>
                            </ul>
                        </p>
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
                            <a href="http://cbt.devugo.com" className="btn" rel="opener" target="_blank"><i className="fa fa-eye"></i> Live Demo</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={CBT1} alt="cbt app" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={CBT2} alt="cbt app" />
                        <img className={activeSlide === 3 ? 'active-slide' : ''} src={CBT3} alt="cbt app" />
                        <img className={activeSlide === 4 ? 'active-slide' : ''} src={CBT4} alt="cbt app" />
                        <img className={activeSlide === 5 ? 'active-slide' : ''} src={CBT5} alt="cbt app" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleTwo}
                onCancel={() => setVisibleTwo(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">SCHOOL RESULT SOLUTION</h3>
                        <p>
                            Result solution to manage results in schools; teachers are able to upload 
                            results of students and the students are able to check the result online using designated pins.
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            <span className="user-type">Super admin </span> or 
                            <span className="user-type"> school owner</span> is able to create and manage pins manually or 
                            automatically by specifying the number required to generate. School owner is also able to 
                            create and manage classes, arms, sessions, terms and subjects

                        </p>
                        <p>
                            The <span className="user-type">Admin user </span> is creates and amnages the teachers, the students, subjects, 
                            assign teachers to subjects classes etc.
                        </p>
                        <p>
                            The <span className="user-type">Teacher user</span> is only responsible for uplaoding results of students 
                            based on the subject classes assigned by the <span className="user-type">admin</span>.
                        </p>
                        <p>
                            The final user is the <span className="user-type">student user</span>. They are able to check their result using 
                            a pin generated by the super admin. 
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">Symfony</Tag>
                            <Tag color="orange">React</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a href="http://resultsolution.devugo.com/details" rel="opener" target="_blank" className="btn"><i className="fa fa-eye"></i> Live Demo</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={Result1} alt="result solution" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={Result2} alt="result solution" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={Result3} alt="result solution" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={Result4} alt="result solution" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={Result5} alt="result solution" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleThree}
                onCancel={() => setVisibleThree(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">FEES MANAGEMENT SYSTEM</h3>
                        <p>
                            Fees management system to manage all expenses and incomes in schools espcially the fees in a school; 
                            School admin is able to create fees and messages dispatched to guardians it may concern
                        </p>
                        <p>
                            Features of this application are as follows; The application have different levels of 
                            users as explained below;
                        </p>
                        <p>
                            The<span className="user-type"> School admin</span> is able to create and manage students and guardians and 
                            also assigning students to their respective guardians. Also creates school structure i.e classes, arm, and terms. 
                            The<span className="user-type"> School admin</span> is also able to create different school fees and various expenses i.e 
                            fees created are dispatched to guardians it concerns via sms, emails and notification. The <span className="user-type">Admin</span> can also broadcast maessages 
                            to guardians also generate report of activities on the portal.
                        </p>
                        <p>
                            The <span className="user-type">Guardian user </span> is able to view students registered in his name and also fees available ( fees yet to be paid ), able to upload proof of fees payment or rather, pay fees online.
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">PHP MVC</Tag>
                            <Tag color="orange">Javascript</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a href="http://fees.devugo.com" rel="opener" target="_blank" className="btn"><i className="fa fa-eye"></i> Live Demo</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={Fee1} alt="fees management" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={Fee2} alt="fees management" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={Fee3} alt="fees management" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={Fee4} alt="fees management" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={Fee5} alt="fees management" />
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
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
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
                            <a className="btn" rel="opener" href="http://resultdirect.org" target="_blank"><i className="fa fa-eye"></i>View Live</a>
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
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">LANDING PAGE</h3>
                        <p>
                           A single landing page designed that shows information about a firm and its products.
                        </p>
                        <p>
                            Features of this application are as follows; 
                        </p>
                        <p>
                            A home page that shows a brief description of the compnay's works, an about page that 
                            shows information about the company, what they do and how they do it, service section 
                            that list the various services which the company offers, a projects section; shows a
                            list of various projects the compnay has successfully carried out, a contact section where 
                            a potential customer can quickly reach out to them via the contact form. 
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                            <Tag color="orange">Javascript</Tag>
                            <Tag color="orange">Bootstrap</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a className="btn" rel="opener" href="https://devugo.com" target="_blank"><i className="fa fa-eye"></i> View Live</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={Landing1} alt="lading page" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={Landing2} alt="lading page" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={Landing3} alt="lading page" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={Landing4} alt="lading page" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={Landing5} alt="lading page" />
                    </div>
                </div>
            </Modal>

            <Modal
                visible={visibleSix}
                onCancel={() => setVisibleSix(false)}
                centered={true}
                footer={null}
                width={width > 1024 ? '80%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
                bodyStyle={{ backgroundColor: !light ? '#161f2e' : 'white', color: !light ? 'white' : 'grey'}}
            >
                <div className="modal-body">
                    <div className="modal-body__content">
                        <h3 className="portfolio-modal-title">REACT JS PAGINATION</h3>
                        <p>
                            React Js pagination for react applications
                        </p>
                        <div className="modal-body__content-stacks">
                            <Tag color="orange">React</Tag>
                            <Tag color="orange">HTML</Tag>
                            <Tag color="orange">CSS</Tag>
                        </div><br />
                        <div className="modal-body__content-buttons">
                            <a className="btn" rel="opener" target="_blank" href="https://github.com/devugo/reactjs-pagination"><i className="fa fa-code"></i> View Code</a>
                        </div><br />
                    </div>
                    <div className="modal-body__images">
                        <img className={activeSlide === 1 ? 'active-slide' : ''} src={ReactPag1} alt="rweact-pagination" />
                        <img className={activeSlide === 2 ? 'active-slide' : ''} src={ReactPag2} alt="rweact-pagination" />
                        <img  className={activeSlide === 3 ? 'active-slide' : ''} src={ReactPag3} alt="rweact-pagination" />
                        <img  className={activeSlide === 4 ? 'active-slide' : ''} src={ReactPag4} alt="rweact-pagination" />
                        <img  className={activeSlide === 5 ? 'active-slide' : ''} src={ReactPag5} alt="rweact-pagination" />
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Portfolio;