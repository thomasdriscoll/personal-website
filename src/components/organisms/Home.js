import React from 'react';
import '../../stylesheets/Home.scss';
import HomeBanner from '../molecules/HomeBanner.js';
import HomeText from '../atoms/HomeText.js';


export default class Home extends React.Component {
    
    componentDidMount(){
        document.title = "Home - Thomas Driscoll"
    }

    render(){
        return(
            <div className="homeContainer">
                <HomeBanner />
                <HomeText />
            </div>
        );
    }
}