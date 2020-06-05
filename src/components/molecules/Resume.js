import React from 'react';
import ResumeItem from '../atoms/ResumeItem';
import ResumePicture from '../atoms/ResumePicture';

const items = require("../../assets/resumeContent.json");
const resumeItems = items.workItem.map((item) =>
    <ResumeItem
        key={item.title} 
        item={item}
    />
);
const resumePics = items.workPicture.map((picture) =>
    <ResumePicture  
        key={picture.title}
        picture={picture}
        src= {require("../../assets/"+picture.ref)}
    />
);

export default class Resume extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "resumeContainer">
                <h2>Where I've Worked</h2>
                <div className="jobContainer">
                    <div className="content">
                        {resumeItems}
                    </div>
                    <div className="picture">
                        {resumePics} 
                    </div>
                </div>
            </div>
        );
    }
}