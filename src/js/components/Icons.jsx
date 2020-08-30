import React, { useState, useEffect } from 'react';

let tan = '#161f2e';
let darkTan = '#0c111a';

let secColor = 'rgb(33, 3, 109)';

const Icons = props => {

    let { light, setLight } = props;

    useEffect(() => {

        if(!light){
            //  About style in dark mode
            document.getElementById('about').style.backgroundColor = tan;
            document.getElementById('about-container__content').style.backgroundColor = darkTan;
            document.getElementById('about-container__content').style.color = 'white';
            document.getElementById('about-container__title').style.color = 'white';

            //  Services style in dark mode
            document.getElementById('services').style.backgroundColor = darkTan;
            document.getElementById('services').style.color = 'white';
            document.getElementsByClassName('services-card')[0].style.backgroundColor = tan;
            document.getElementsByClassName('services-card')[1].style.backgroundColor = tan;
            document.getElementsByClassName('services-card')[2].style.backgroundColor = tan;
            document.getElementById('services-container__title').style.color = 'white';
            document.getElementsByClassName('service-title')[0].style.color = 'white';
            document.getElementsByClassName('service-title')[1].style.color = 'white';
            document.getElementsByClassName('service-title')[2].style.color = 'white';

            //  Portfolio style in dark mode
            document.getElementById('portfolio').style.backgroundColor = tan;
            document.getElementById('portfolio-title').style.color = 'white';
            document.getElementById('portfolio-sub__title').style.color = 'white';

            //  Contact style in dark mode
            document.getElementById('contact').style.backgroundColor = darkTan;
            document.getElementById('contact').style.color = 'white';

            // Navbar on mobile
            document.getElementById('profile-info').style.backgroundColor = darkTan;
            document.getElementById('nav-menu').style.backgroundColor = darkTan;
            document.getElementById('nav-mobile').style.backgroundColor = tan;
            document.getElementById('nav-mobile').style.color = 'white';
            
        }else{
            //  About style in light mode
            document.getElementById('about-container__content').style.color = 'grey';
            document.getElementById('about').style.backgroundColor = 'white';
            document.getElementById('about-container__content').style.backgroundColor = '#fff9ef';
            document.getElementById('about-container__title').style.color = secColor;

            // //  Services style in dark mode
            document.getElementById('services').style.backgroundColor = '#f0eefd';
            document.getElementById('services').style.color = 'grey';
            document.getElementsByClassName('services-card')[0].style.backgroundColor = 'white';
            document.getElementsByClassName('services-card')[1].style.backgroundColor = 'white';
            document.getElementsByClassName('services-card')[2].style.backgroundColor = 'white';
            document.getElementById('services-container__title').style.color = secColor;
            document.getElementsByClassName('service-title')[0].style.color = secColor;
            document.getElementsByClassName('service-title')[1].style.color = secColor;
            document.getElementsByClassName('service-title')[2].style.color = secColor;

            // //  Portfolio style in dark mode
            document.getElementById('portfolio').style.backgroundColor = 'white';
            document.getElementById('portfolio-title').style.color = secColor;
            document.getElementById('portfolio-sub__title').style.color = 'black';

            // //  Contact style in dark mode
            document.getElementById('contact').style.backgroundColor = '#fff9ef';
            document.getElementById('contact').style.color = 'grey';

            // Navbar on mobile
            document.getElementById('profile-info').style.backgroundColor = secColor;
            document.getElementById('nav-menu').style.backgroundColor = secColor;
            document.getElementById('nav-mobile').style.backgroundColor = 'white';
            document.getElementById('nav-mobile').style.color = 'grey';

            // Portfolio modal
            let modals = document.getElementsByClassName('ant-modal-body');
            if(modals && modals.length >= 1){
                console.log('got here');
                modals[0].style.backgroundColor = 'tan';
            }   
        }
        
    }, [light]);

    return (
        <div className="icons" id="icons">
            {
                light ?
                <div onClick={()=>setLight(prevState => !prevState)} className="icons-icon rotate-season">
                    <i className="fa fa-sun-o" style={{color: 'orange'}}></i>
                </div> :
                <div onClick={()=>setLight(prevState => !prevState)} className="icons-icon rotate-season">
                    <i className="fa fa-moon-o" style={{color: 'lightBlue'}}></i>
                </div>
            }
        </div>
    )
}

export default Icons;