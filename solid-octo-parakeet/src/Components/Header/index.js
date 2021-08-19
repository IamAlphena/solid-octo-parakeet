import React from 'react';
import selfie from '../../images/selfie.jpg'


function Header() {
    return (
     <div className="break tile">
            <div className="photo">
                <img src={selfie} alt="self" />
            </div>
            <div className="writer">
                <h1>Hello. </h1>
            </div>
        </div>
    )
}

export default Header;