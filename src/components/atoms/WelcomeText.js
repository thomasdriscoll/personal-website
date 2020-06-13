import React from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
// import { wait } from '@testing-library/react';


const duration = 5000;
const greek = "χαίρετέ, εἰμι Θωμᾶς";
const english = "Hey, I'm Thomas";

export default class WelcomeText extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {in: false};
        this.change = this.change.bind(this);
        this.greek = greek;
        this.english = english;
        this.wrapper = React.createRef();
    }

    componentDidMount() {
        this.setState({in: !this.state.in});
    }

    change(){
        this.setState({in: !this.state.in});
                
    }

    render() {
        //The timeout line is crucial, i
        return(
            <div className='welcomeTextContainer'>
                <SwitchTransition>
                <CSSTransition
                    key={this.state.in ? english: greek}
                    timeout={{
                        appear: 1000,
                        enter: duration,
                        exit: 1000
                    }}
                    onEntered= {this.change}
                    classNames="welcomeText"
                >
                    <h1 ref={this.wrapper}>{this.state.in ? this.english: this.greek}</h1>
                </CSSTransition>
                </SwitchTransition>                    
            </div>
        );
    }
}