import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineProject from '../atoms/TimelineProject';

const items = require("../../assets/projectsContent");

const projectItems = items.projectItems.map((item, index) => 
    <div key={index}>
        <TimelineProject item={item} index={index}/>
    </div>
);

export default function ThomasTimeline() {
    return(
        <Timeline align="alternate" className="timelineContainer">
            {projectItems}
        </Timeline>
    );
}