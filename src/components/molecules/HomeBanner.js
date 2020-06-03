import React from 'react';
import WelcomeText from '../atoms/WelcomeText';

export default class HomeBanner extends React.Component{
    render(){
        return(
            <div className="bannerContainer">
                <WelcomeText />
                <div className='profilePic'>
                    <img className='profilePic' src={require('../../assets/profile.jpg')} alt='Thomas Driscoll 2019'/>
                </div>
            </div>
        );
    }
}