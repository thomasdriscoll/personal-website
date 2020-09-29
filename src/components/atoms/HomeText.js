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
                <br /> <br />
                This website is actively supported on Windows for Google Chrome, Mozilla Firefox, Microsoft Edge and IE 11. Apple Safari is supported periodically (basically whenever I can steal my Mom's Mac for a weekend).
            </div>
        )
    }
}