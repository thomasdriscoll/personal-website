import React from 'react';


export default class ResumeItem extends React.Component{
    constructor(props){
        super(props);
        this.paragraph = this.props.item.description.map((paragraph, index) =>
            <p key={index}>{paragraph}</p>
        )
    }

    render(){
        return(
            <div className="resumeItem">
                <h4>{this.props.item.title}</h4>
                <h6>{this.props.item.time}</h6>
                {this.paragraph}
            </div>
        );
    }
}