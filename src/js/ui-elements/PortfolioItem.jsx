import React from 'react';

export const PortfolioItem = ({ Image, action, className, type, liveURL, githubURL, children }) => {

    if(!type){
        type = 'app';
    }
    return (
        <div className={`portfolio-container-content${className}`}>
            <img src={Image} alt="project" />
            <div className="portfolio-container-content__show center-content">
                <div className="title">
                    {children}
                </div>
                <div className="button">
                    {
                        type === 'app' ? 
                            <button onClick={() => action(true)}>LEARN MORE</button> 
                            :
                            <>
                            <a className="github" href={githubURL} target="_blank">GITHUB</a>
                            <a className="live" href={liveURL} target="_blank">LIVE</a>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}