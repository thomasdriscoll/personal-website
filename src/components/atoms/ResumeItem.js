import React from 'react';

export default class ResumeItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="resumeItem">
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
            </div>
        );
    }
}