import React from 'react';
import {Container, Grid} from '@material-ui/core';

export default function Biography(){

    return(
        <Container justify="center">
            <Grid container justify="center">
            <h2>Biography</h2>
            </Grid>
            <Grid container justify="center" spacing={140}>
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


 