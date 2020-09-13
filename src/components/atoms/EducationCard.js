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
                    <div>
                        <img 
                            alt={this.item.picTitle}
                            src={require("../../assets/"+this.item.picture)} 
                            className = "educationCardImg"
                            onClick= {this.handleClick}
                        />
                    </div>
                    <Card 
                        onClick={this.handleClick}
                        className= "educationCardContent shadow"
                        variant="outlined"
                    > 
                        <CardContent>
                            <Typography variant='h6' component='h6' className="title" gutterBottom>
                                {this.item.school}
                            </Typography>
                            <Typography variant="body2" component="p">
                                <b>GPA</b>: {this.item.GPA}
                                <br />
                                <b>Date</b>: {this.item.date}
                                <br />
                                <b>Degree</b>: {this.item.degree}
                                <br />
                                <b>Honors</b>: {this.item.honors}
                            </Typography>
                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </div>
        );
    }
}