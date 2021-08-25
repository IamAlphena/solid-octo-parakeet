import React from 'react';
import quiz from '../../images/quiz1.png';

function Projects() {
    return (
        <>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={quiz} alt="img"/>

                </div>
                <div className="flip-card-back">
                    <h1> Test </h1>
                    <p> Much Test</p>
                    <p> Much Wow</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Projects;