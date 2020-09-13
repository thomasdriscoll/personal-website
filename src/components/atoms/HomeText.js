import React from 'react';

export default class HomeText extends React.Component {
    render(){ 
        return(
            <div className="homeTextContainer">
                <h1>Welcome!</h1>
                <br />
                <p className="introText">I'm a dedicated fullstack engineer that loves to explore new frameworks and pick up new skills! 
                <br /> <br />
                Please feel free to reach out to me at any time at thomasdriscoll98@gmail.com
                </p>
            </div>
        )
    }
}