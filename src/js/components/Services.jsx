import React, { useRef, useEffect, useState } from 'react';

import Card from '../ui-elements/Card';
import WebImg from '../../images/services_images/web_2.svg';
import MaintenanceImg from '../../images/services_images/maintenance.svg';
import ServiceMobile2 from '../../images/services_images/service_mobile_2.svg';


const Services = () => {
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

    return (
        <section ref={newRef} className="services" id="services">
            <div className="services-container wrapper">
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
                            <h5 className="service-title">Web Development</h5>
                            <p>
                                I offer full stack web development using up-to date web technologies 
                                and frameworks in achieving the desired result. Super attractive and 
                                fully responsive on all devices and platforms. Got a great idea of a 
                                project, say hello to me, lets bring your idea to reality.
                            </p>
                        </Card>
                        <Card className={`services-card${firstIn ? ' show-content' : ''}`} id="services-card">
                            <div className="image center-content">
                                <img src={ServiceMobile2} alt="mobile" />
                            </div>
                            <h5 className="service-title">Mobile Development</h5>
                            <p>
                               I build robust mobile apps using React Native with a clean user 
                               interface and experience. Scalable apps that works across both platforms i.e android and ios.
                            </p>
                        </Card>
                        <Card className={`services-card${firstIn ? ' show-content' : ''}`}>
                            <div className="image center-content">
                                <img src={MaintenanceImg} alt="mobile" />
                            </div>
                            <h5 className="service-title">Sotware and Website Maintenance</h5>
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