import React, { useState, useCallback } from 'react';

const Icon = ({ toggle, light }) => {
    return (
        <div onClick={toggle} className="icons-icon rotate-season">
            <i className={`fa ${light ? 'fa-sun-o' : 'fa-moon-o'}`} style={{color: light ? 'orange' : 'lightBlue'}}></i>
        </div> 
    )
}

const Icons = props => {
    // light or dark mode
    const [light, setLight] = useState(true);

    const toggleTheme = useCallback(() => {
        //  Toggle theme
        setLight(prevState => !prevState);

        if(light){
            document.documentElement.setAttribute('data-theme', 'dark')
        }else{
            document.documentElement.removeAttribute('data-theme')
        }
    }, [setLight, light]);

    return (
        <div className="icons" id="icons">
            <Icon
                light={light}
                toggle={toggleTheme}
            />
        </div>
    )
}

export default Icons;