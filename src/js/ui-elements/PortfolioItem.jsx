import React from 'react';

export const PortfolioItem = ({ Image, action, className, children }) => {
    return (
        <div className={`portfolio-container-content${className}`}>
            <img src={Image} alt="project" />
            <div className="portfolio-container-content__show center-content">
                <div className="title">
                    {children}
                </div>
                <div className="button">
                    <button onClick={() => action(true)}>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}