import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class EducationCard extends React.Component {
    constructor(props){
        super(props)
        this.item = this.props.item;
        this.state= {
            isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render(){
        return(
            <div className="educationCard">
                <ReactCardFlip 
                isFlipped={this.state.isFlipped}>    
                    <img 
                        alt={this.item.picTitle}
                        src={require("../../assets/"+this.item.picture)} 
                        className = "educationCardImg"
                        onClick= {this.handleClick}
                    />
                    <Card 
                        onClick={this.handleClick}
                        className= "educationCardContent"
                        variant="outlined"
                    > 
                        <CardContent
                            height = '300px'>
                            <Typography className="title">
                                {this.item.school}
                            </Typography>
                            <Typography variant="body2" component="p">
                                GPA: {this.item.GPA}
                                <br />
                                Degree: {this.item.degree}
                                <br />
                                Honors: {this.item.honors}
                            </Typography>
                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </div>
        );
    }
}