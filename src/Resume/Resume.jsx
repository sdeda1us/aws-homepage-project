import React from 'react';
import {GridList, GridListTile, Grid, Container} from '@material-ui/core';

export default function Resume() {
    const skillList = [['HTML', 'CSS', 'Javascript', 'React'], ['Nodejs', 'Express', 'postgreSQL', 'npm'], ['Material-UI', 'Bootstrap', 'Git', 'AWS']];

    return (
        <Container> 
            <Grid container spacing={12} justify="center">
                <h1>Steven Maloney</h1>
            </Grid>
            <Grid container spacing={12} justify="center">
                <h2>Relevant Skills</h2>
            </Grid>
            <Grid container spacing={12} justify="center">
            <GridList cols={3}>
            {skillList.map((skillSet)=>(
                <GridListTile>
                    <ul>
                        {skillSet.map((skill)=>(<li>{skill}</li>))}
                    </ul>
                </GridListTile>
            ))}
            </GridList>
            </Grid>
            <Grid container spacing={12} justify="center">
                <h2>Biography</h2>
                <p>When I was a political scientist, I researched 
                    how systems of people learn. So, while it might not seem a normal transition, 
                    I personally see moving into software engineering as a natural move into a different 
                    field in information processing. I have always been interested in how information moves 
                    through systems, and now I want to help build systems instead of just studying them.
                </p>
            </Grid>
            
        </Container>
        

    )
}