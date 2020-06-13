import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default class LegacyProject extends React.Component{
    constructor(props){
        super(props);
        this.state = {hover: false};
    }

    render(){
        return(
            <div 
                className="legacyContainer"
                onMouseEnter={() => this.setState({hover: true})}
                onMouseEnter={() => this.setState({hover: false})}>
                <CSSTransition
                    in={this.state.hover}
                    timeout>
                    <img src={require("../../assets/"+ this.props.project.picRef)} />

                </CSSTransition>
            </div>
        );
    }
}