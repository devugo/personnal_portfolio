import React from 'react';

import Card from '../ui-elements/Card';

const Experience = () => {
    return (
        <section>
            <div>
                <div>
                    <h4>Education</h4>
                    <Card>
                        <div>
                            <p>REACT NATIVE (UDEMY) 2020</p>
                            <p>Aenean euismod elementum nisi quis eleifend quam adipiscing. 
                                Dictum fusce ut placerat orci. Semper eget duis at tellus at urna 
                                condimentum.
                            </p>
                        </div>
                    </Card>
                </div>
                <div>
                    <h4>Experience</h4>
                    <Card>
                        <div>
                            <p>FRELLANCER</p>
                            <p>2017 till date</p>
                            <div>
                                <h5>Responsibility</h5>
                                <ul>
                                    <li>
                                        Aenean euismod elementum nisi quis eleifend quam adipiscing. 
                                    </li>
                                    <li>
                                        Dictum fusce ut placerat orci. Semper eget duis at tellus
                                    </li>
                                </ul>
                            </div>
                            <p>Aenean euismod elementum nisi quis eleifend quam adipiscing. 
                                Dictum fusce ut placerat orci. Semper eget duis at tellus at urna 
                                condimentum.
                            </p>
                        </div>
                    </Card>
                </div>
                
            </div>
        </section>
    )
}

export default Experience;