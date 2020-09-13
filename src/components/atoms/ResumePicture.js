import React from 'react';

export default class ResumePicture extends React.Component{
    render(){
        return(
            <div className="resumePicture">            
                <a href={this.props.picture.website} target="_blank">
                    <img
                        className="hoverImg shadow"                
                        alt={this.props.picture.picTitle}
                        src= {require("../../assets/"+this.props.picture.picRef)}
                    />
                </a>
            </div>
        );
    }
    
}