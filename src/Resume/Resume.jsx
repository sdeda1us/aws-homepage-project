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
        </Container>
        

    )
}