import React from 'react';
import {Grid, GridList, GridListTile} from '@material-ui/core';


export default function Skills() {
    const skillList = [['HTML', 'CSS', 'Javascript', 'React'], ['Nodejs', 'Express', 'postgreSQL', 'npm'], ['Material-UI', 'Bootstrap', 'Git', 'AWS']];

    return (
        <>
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
        </>
    )
}
