import React from 'react';
import ThomasTimeline from '../molecules/ThomasTimeline';
import ProjectIntro from '../atoms/ProjectIntro';
import '../../stylesheets/Projects.scss';

export default class Projects extends React.Component{
    componentDidMount(){
        document.title = "Projects - Thomas Driscoll";
    }
    
    render(){
        return(
            <div className="projectContainer">
                <ProjectIntro />
                <ThomasTimeline />
            </div>
        );
    }
}
