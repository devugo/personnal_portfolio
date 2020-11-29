import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container wrapper">
                <h5 className="contact-container-title">Get in touch with me</h5>
                <div className="center-content">
                    <p style={{fontSize: 15, fontWeight: 500}}>
                        Do get in touch for more information
                    </p>
                </div>
                <div className="contact-container-content center-content">
                    <a href="tel:08065674312">
                        <div className="contact-content__type">
                            <i className="fa fa-phone"></i>
                            <p>+2348133491134</p>
                        </div>
                    </a>
                    <a href="mailto: info@devugo.com">
                        <div className="contact-content__type">
                            <i className="fa fa-envelope"></i>
                            <p>info@devugo.com</p>
                        </div>
                    </a>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        <div className="contact-content__type">
                            <i className="fa fa-map-marker"></i>
                            <p>Lagos, Nigeria</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;