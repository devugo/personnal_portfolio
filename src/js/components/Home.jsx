import React, { useState, useEffect, useCallback, useRef } from 'react';

import ProfileImage from '../../images/profile_picture.jpeg';

const skills = ['SOFTWARE DEVELOPER.', 'JAVASCRIPT DEVELOPER.', 'REACT DEVELOPER.', 'PHP DEVELOPER.', 'LARAVEL DEVELOPER.', 'SYMFONY DEVELOPER.'];


const Home = props => {
    const homeRef = useRef(null);

    const [currentSkill, setCurrentSkill] = useState('');
    const [controller, setController] = useState(false);
    const [curr, setCurr] = useState(0);
    const [timOut, setTimOut] = useState(false);

    const [slideIn, setSLideIn] = useState(false);

    // let { open } = props;

    let i = 0;
    let speed = 30;
    let ryb = 0;

    const typeWriter = useCallback(() => {
        if(controller){
            let txt = skills[curr];
            if(ryb === 0 && timOut){
                setTimeout(() => {
                    if (i < txt.length) {
                        ryb = 1;
                        setTimOut(false);
                        setCurrentSkill(prevState => prevState.slice(0, -1));
                        i++;
                        // ryb = false;
                        setTimeout(typeWriter, speed);
                    }else{
                        if(skills.length > curr + 1){
                            let cur = curr + 1;
                            setCurr(cur);
                        }else{
                            setCurrentSkill('');
                            setCurr(0);
                        }
                        setController(false);
                    }
                }, 2000);
            }else{
                if (i < txt.length) {
                    setCurrentSkill(prevState => prevState.slice(0, -1));
                    i++;
                    
                    setTimeout(typeWriter, speed);
                }else{
                    if(skills.length > curr + 1){
                        let cur = curr + 1;
                        setCurr(cur);
                    }else{
                        setCurrentSkill('');
                        setCurr(0);
                    }
                    setController(false);
                }
            }
            
           
        }else{
            var txt = skills[curr];
            if (i < txt.length) {
                if(i === 0){
                    setCurrentSkill(txt.charAt(0));
                }else{
                    setCurrentSkill(prevState => prevState+txt.charAt(i));
                }
                
                i++;
                setTimeout(typeWriter, speed);
            }else{
                ryb = 1;
                setTimOut(true);
                
                setController(true);
            }
        }
       
    }, [controller, skills, curr, ryb, timOut, setTimOut, setCurrentSkill, speed, setCurr, setController]);
    
    useEffect(() => {
        typeWriter();
    }, [controller]);

    useEffect(() => {
        if(homeRef){
            if(homeRef.current.offsetTop === 0){
                setSLideIn(true);
            }
        }
        
    }, []);

    return (
        <section className="home" id="home" ref={homeRef}>
            <div className="home-column">
                <div className={`home-column__about${slideIn ? ' enter_from_left' : ''}`}>
                    <div className="home-column__about-hello">
                        <div className="hello">Hello!!</div>
                    </div>
                    <h4>Ezenwankwo Ugochukwu</h4>
                    <p className="skill">I'm a <span>{currentSkill}</span></p>
                    <p className="bio"> Problem solving, responsive designs, robust APIs and scalabale softwares, testing and maintenace of applications.</p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~011c8bdfb541a568e5?viewMode=1" className="btn">GET IN TOUCH</a>
                </div>
                <div className="home-column__profile">
                    <div className="home-column__profile-image">
                        <div className={`home-column__profile-image__one${slideIn ? ' enter_from_right_one' : ''}`}></div>
                        <div className={`home-column__profile-image__two${slideIn ? ' enter_from_right_two' : ''}`}></div>
                        <img src={ProfileImage} alt="profile" className={`${slideIn ? ' enter_from_right_image' : ''}`} />
                    </div>
                </div>
            </div><br />
            <div className="home__down-arrow center-content">
                <a href="#about"><i className="fa fa-arrow-down"></i></a>
            </div>
        </section>
    )
}

export default Home;