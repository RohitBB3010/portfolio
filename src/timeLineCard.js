import React from 'react';
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import { Typography } from '@mui/material';

const TimeLineCard = ({timeLine, institute, cgpa, icon, cgpaPosition}) => {
      
    return (
            <TimelineItem>
                <TimelineOppositeContent 
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="white"
                    fontSize={"1rem"}
                >
                    {timeLine}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{minHeight:"5vh"}}/>
                    <TimelineDot> {icon} </TimelineDot>
                    <TimelineConnector sx={{minHeight:"5vh"}}/>
                </TimelineSeparator>
                <TimelineContent sx={{display : "flex", alignItems : {cgpaPosition}, flexDirection : "column", justifyContent : "center"}}>
                    <Typography color="white" fontSize={"1.5rem"}> {institute} </Typography>
                    <Typography color="white" fontSize={"1rem"}> {cgpa} </Typography>
                </TimelineContent>
            </TimelineItem>
            
            
    );
}

export default TimeLineCard;
