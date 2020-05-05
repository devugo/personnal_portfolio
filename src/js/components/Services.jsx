import React, { useRef, useEffect, useState } from 'react';

import Card from '../ui-elements/Card';
import MobileImg from '../../images/mobile.png';
import WebImg from '../../images/services_images/web.png';
import MaintenanceImg from '../../images/services_images/maintenance.png';


const Services = () => {
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

    return (
        <section ref={newRef} className="services" id="services">
            <div className="services-container">
                <h3 className="services-container__title short-underline section-title" id="services-container__title">SERVICES</h3>
                <div className="services-container__do center-content">
                    <p id="what-i-do">What i do...</p>
                </div>
                <div className="services-container__body">
                    <div className={`services-container__content`}>
                        <Card className={`services-card${firstIn ? ' show-content' : ''}`} id="services-card">
                            <div className="image center-content">
                                <img src={WebImg} alt="mobile" />
                            </div>
                            <h5>Web Development</h5>
                            <p>
                                I offer full stack web development using up-to date web technologies 
                                and frameworks in achieving the desired result. Super attractive and 
                                fully responsive on all devices and platforms. Got a great idea of a 
                                project, say hello to me, lets bring your idea to reality.
                            </p>
                            {/* <p>
                                Web development services encompasses the folloeing;
                            </p> */}
                            {/* <ul>
                                <li>Corporate website design</li>
                                <li>Product Landing page design</li>
                                <li>Personnal portfolio website</li>
                                <li>Custom web development</li>
                                <li>Blog development</li>
                                <li>Education solution</li>
                                <li>Management Systems</li>
                            </ul> */}
                        </Card>
                        <Card className={`services-card${firstIn ? ' show-content' : ''}`} id="services-card">
                            <div className="image center-content">
                                <img src={MobileImg} alt="mobile" />
                            </div>
                            <h5>Mobile Development</h5>
                            <p>
                               I build robust mobile apps using React Native with a clean user 
                               interface and experience. 
                            </p>
                        </Card>
                        <Card className={`services-card${firstIn ? ' show-content' : ''}`}>
                            <div className="image center-content">
                                <img src={MaintenanceImg} alt="mobile" />
                            </div>
                            <h5>Sotware and Website Maintenance</h5>
                            <p>
                                I offer websites and applications debugging, search engine optimization, 
                                improving performance of applications, updating of contents on websites, 
                                changing of behaviour and general editing.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;