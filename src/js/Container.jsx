import React, { useState, useEffect, useRef } from 'react';
// import LazyLoad from 'react-lazyload';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Porfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Icons from './components/Icons';

// const Services = lazy(() => import('./components/Services'));

const Container = () => {
    const loadedRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [floatingNav, setFloatingNav] = useState('');

    // Floating NAV; Adding shadow to the bottom nav on scroll down
    useEffect(() => {
        const scroller = () => {
            if(window.scrollY > 20){
                setFloatingNav('floatingNav')
            }else{
                setFloatingNav('');
            }
        }
        window.addEventListener('scroll', scroller);
        return () => {
            window.removeEventListener('scroll', scroller);
        }
      
       
    })

   
    // Adding a current class name to active page based on the scroll position
    useEffect(() => {
        if(loadedRef){
            let mainNavs = document.querySelectorAll(".link_tag");

            window.addEventListener("scroll", event => {
                let fromTop = window.scrollY;

                mainNavs.forEach(link => {
                    let section = document.querySelector(link.hash);
                    // console.log(section)

                    let ctrl = 0;
                    
                    //  Note i introduced r=the values 70 and 124 to counter the skewed  background on the web page
                    
                    if(section){
                        if(
                            section.offsetTop - ctrl <= fromTop + 70 &&
                            section.offsetTop + section.offsetHeight > fromTop + 124
                        ) {
                            link.classList.add("current");
                        }else{
                            link.classList.remove("current");
                        }
                    }
                   
                });
            });
        }
    
    })

    return (
        <>
            <Header ref={loadedRef} open={open} setOpen={setOpen} floatingNav={floatingNav} />
            <Home />
            <About />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                {/* <LazyLoad placeholder={<div>Loading...</div>}> */}
                    <Services />
                {/* </LazyLoad> */}
            {/* </Suspense> */}
            <Portfolio />
            {/* <Experience /> */}
            <Contact />
            <Footer />
            <Icons />
        </>
    )
}

export default Container;