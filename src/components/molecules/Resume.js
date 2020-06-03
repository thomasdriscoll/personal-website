import React from 'react';
import ResumeItem from '../atoms/ResumeItem';

const items = require("../../assets/resumeContent.json");
const resumeItems = items.item.map((item) =>
    <ResumeItem
        key={item.title} 
        item={item}/>
);
const resumePics = items.picture.map((picture) =>
    <img 
        key={picture.title}
        alt={picture.title}
        src= {require("../../assets/"+picture.ref)}
    />
);

export default class Resume extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="resumeContainer">
                <div className="content">
                    {resumeItems}
                </div>
                <div className="picture">
                    {resumePics} 
                </div>
            </div>
        );
    }
}