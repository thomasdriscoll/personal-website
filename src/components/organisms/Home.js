import React from 'react';
import '../../stylesheets/Home.scss';
import HomeBanner from '../molecules/HomeBanner.js';
import Resume from '../molecules/Resume.js';


export default class Home extends React.Component {
    render(){
        return(
            <div className="homeContainer">
                <HomeBanner />
                <Resume />
            </div>
        );
    }
}