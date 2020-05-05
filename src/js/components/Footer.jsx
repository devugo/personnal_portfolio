import React from 'react';

const Footer = () => {
    return (
        <section className="footer" id="footer">
            <a href="#home"><div className="footer-up__icon center-content box-shadow">
                <span className="icon-one"></span>
                <span className="icon-two"></span>
            </div></a>
            <div className="footer-curve">
                <div className="footer-curve__right"></div>
                <div className="footer-curve__left"></div>
            </div>
            {/* <div></div> */}
            <div className="footer-info">
                <div className="footer-info-social__icons">
                    <a href="http://www.twitter.com/devugo1" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/ugochukwu-ezenwankwo-559a88161/" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/devugo" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="https://web.facebook.com/ugonna.eze.96" target="_blank"><i className="fa fa-facebook"></i></a>
                </div>
                <div className="footer-info__name center-content">
                    <p>Ezenwankwo Ugochukwu &#169; {new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;