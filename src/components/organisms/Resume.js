import React from 'react';
import ResumeItem from '../atoms/ResumeItem';
import ResumePicture from '../atoms/ResumePicture';
import '../../stylesheets/Resume.scss';
import Education from '../molecules/Education';

const items = require("../../assets/resumeContent.json");
const resumeItems = items.workItem.map((item, index) =>
    <div key={index} className="content">
        <ResumeItem 
            item={item}
        />
        <ResumePicture  
            picture={item}
            src= {require("../../assets/"+item.picRef)}
        />
    </div>
);
const funItems = items.funItem.map((item, index) =>
<div key={index} className="content">
    <ResumeItem
        key={item.title} 
        item={item}
    />
    <ResumePicture  
        key={item.picTitle}
        picture={item}
        src= {require("../../assets/"+item.picRef)}
    />        
</div>
);

export default class Resume extends React.Component{
    render(){
        return(
            <div className = "resumeContainer">
                <h2>Work</h2>
                <div className="jobContainer">
                    {resumeItems}
                </div>
                <h2>Roles</h2>
                <div className="jobContainer">
                    {funItems}
                </div>
                <h2>Education</h2>
                <Education />
            </div>
        );
    }
}