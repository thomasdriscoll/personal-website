import React from 'react';
import projects from '../../assets/projectsContent.json';
import LegacyProject from '../molecules/LegacyProject.js';

const legacy = projects.legacyProject.map((project, index) => 
    <LegacyProject 
        key = {index} 
        project= {project}
    />
);
export default class Projects extends React.Component{
    render(){
        return(
            <div className="projectsContainer">
                {legacy}
            </div>
        );
    }
}