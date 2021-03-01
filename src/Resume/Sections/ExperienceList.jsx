import React from 'react';
import {Grid} from '@material-ui/core';

export default function ExperienceList({place, dateRange, jobTitle, workSpotlight}) {

    return(
        <Grid container justify = "center">
            <Grid item justify="center">
                <h3>{place}</h3>
                <p>{dateRange}</p>
                <p>{jobTitle}</p>
            </Grid>
            
            <ul>{workSpotlight.map((worksp)=>(
                <>
                    <li>{worksp.title}</li>
                    <ul>
                        {worksp.description.map((d)=>(<li>{d}</li>))}
                    </ul>
                </>
                ))}
            </ul>
        </Grid>
    )
}