import React, { forwardRef } from 'react';

import ProfileAvatar from '../../images/profile_avatar.png';

const Header = forwardRef((props, ref) => {

   let { open, setOpen, floatingNav } = props;

    return (
        <header ref={ref}>
            <div className={`navbar ${floatingNav}`}>
                <div className={`navbar-title ${floatingNav} center-content hide-desktop`}>Devugo</div>
                <img className="show-desktop" src={ProfileAvatar} alt="devugo" />
                {/* Desktop Nav */}
                <nav className="show-desktop">
                    <ul>
                        <li>
                            <a className="link_tag" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="link_tag" href="#about">About</a>
                        </li>
                        <li>
                            <a className="link_tag" href="#services">Services</a>
                        </li>
                        <li>
                            <a className="link_tag" href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="link_tag" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`hamburger ${open && 'open'} hide-desktop`} onClick={() => {setOpen(prevState => !prevState)}}>
               <span className={`hamburger__stick ${open && 'open'}`}></span>
            </div>
            <div className={`nav-menu ${open && 'open'} hide-desktop`} id="nav-menu">
                <div className="nav-menu__container">
                    <div className="nav-menu__container-top">
                        <div className={`profile-info ${open && 'open'}`} id="profile-info">
                            <img src={ProfileAvatar} alt="devugo" />
                            <h5>Ezenwankwo Ugochukwu</h5>
                            <p>PHP and Javascript developer</p>
                        </div>
                        <nav id="nav-mobile">
                            <ul>
                                <li className={`nav-mobile ${open && 'open'}`}>
                                    <a className="link_tag" href="#home">Home</a>
                                </li>
                                <li className={`nav-mobile ${open && 'open'}`}>
                                    <a className="link_tag" href="#about">About</a>
                                </li>
                                <li className={`nav-mobile ${open && 'open'}`}>
                                    <a className="link_tag" href="#services">Services</a>
                                </li>
                                <li className={`nav-mobile ${open && 'open'}`}>
                                    <a className="link_tag" href="#portfolio">Portfolio</a>
                                </li>
                                <li className={`nav-mobile ${open && 'open'}`}>
                                    <a className="link_tag" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="social-icons" style={{position: 'fixed', bottom: 0, left: 0}}>
                        <a className={`social-icon ${open && 'open'}`} href="https://twitter.com/devugo1" target="_blank"><i className={`fa fa-twitter-square fa-2x ${open && 'open'}`}></i></a>
                        <a className={`social-icon ${open && 'open'}`} href="https://www.linkedin.com/in/ugochukwu-ezenwankwo-559a88161/" target="_blank"><i className={`fa fa-linkedin-square fa-2x ${open && 'open'}`}></i></a>
                        <a className={`social-icon ${open && 'open'}`} href="https://github.com/devugo" target="_blank"><i className={`fa fa-github fa-2x ${open && 'open'}`}></i></a>
                        <a className={`social-icon ${open && 'open'}`} href="https://web.facebook.com/ugonna.eze.96" target="_blank"><i className={`fa fa-facebook-square fa-2x ${open && 'open'}`}></i></a>
                        
                    </div>
                </div>
            </div>
        </header>
    );
})

export default Header;