import React from 'react';
import EducationCard from '../atoms/EducationCard';

const items = require("../../assets/educationContent.json");

const educationItems = items.educationItem.map((item, index) => 
    <EducationCard item={item}/>
);


export default class Education extends React.Component {
    render() {
        return(
            <div className="educationContainer">
                {educationItems}
            </div>
        );
    }
}