import React from 'react'

const items = require("../../assets/resumeContent");

const li_items = items.tech_skills.map((item, index) =>
    <li className="skillItem">{item}</li>
);


export default class Skills extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="skillContainer">
                <ul className="skillList">
                {li_items}
                </ul>
            </div>
        )
    }
}