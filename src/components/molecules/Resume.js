import React from 'react';
import ResumeItem from '../atoms/ResumeItem';
import ResumePicture from '../atoms/ResumePicture';

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
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className = "resumeContainer">
                <h2>Where I've Worked</h2>
                <div className="jobContainer">
                    {resumeItems}
                </div>
                <h2>Who I've Been</h2>
                <div className="jobContainer">
                    {funItems}
                </div>
            </div>
        );
    }
}