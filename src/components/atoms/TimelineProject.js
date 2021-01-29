import React from 'react';
import {TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent} from '@material-ui/lab';
import {Card, CardContent} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const color_array = ["primary"]

export default class TimelineProject extends React.Component {
    constructor(props){
        super(props);
        this.item = this.props.item;
    }
    
    render(){
        let dotColor = color_array[this.props.index % color_array.length];
        return(
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography color='textSecondary'>
                        {this.item.startDate}
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color={dotColor}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="h6">
                                {this.item.title}
                            </Typography>
                            <Typography>
                                <a href={this.item.wiki} target="_blank">Documentation</a>
                            </Typography>
                            <Typography>
                                <p>Status: {this.item.status}</p>
                            </Typography>
                            <Typography>
                                <p>{this.item.description}</p>
                            </Typography>
                        </CardContent>
                    </Card>
                    </TimelineContent>
            </TimelineItem>
        )
    }
}