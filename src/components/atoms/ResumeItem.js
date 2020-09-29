import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class ResumeItem extends React.Component{
    constructor(props){
        super(props);
        this.paragraph = this.props.item.description.map((paragraph, index) =>
            <div key={index}>
                <p>{paragraph}</p>
            </div>
        )
    }

    render(){
        return(
            <Card className="resumeItem">
                <CardContent>
                    <Typography variant="h5" component="h5">
                        {this.props.item.title}
                    </Typography>
                    <Typography color='textSecondary'>
                        {this.props.item.time}
                    </Typography>
                    <Typography variant='body2' component='div'>
                        {this.paragraph}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}