import React from 'react';
import {Container, Typography} from '@material-ui/core';

export default function About(){

    return(
        <Container>
            <Typography variant="h3">Hi, I'm Steven</Typography>
            <p>I was political scientist for 
                nearly twenty years before deciding to change careers and become a web developer. 
                I recently (February, 2021) finished a 20 week intensive, team project focused full 
                stack web development program at <a href="https://primeacademy.io/">Prime Digital Academy</a>. 
            </p>
            <p>I made a bunch of cool apps while at Prime 
                and I am excited to go on making great things!
            </p> 
        </Container>
    )
}