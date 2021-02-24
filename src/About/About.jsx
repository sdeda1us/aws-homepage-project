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
            <p>
                Check out my teams presentation of our final project: The Result Foundation Grant Applicaiton Portal. I'm on at the 26:28 mark introducing our group project.
            </p>
            <p>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprimedigitalacademy%2Fvideos%2F133700585281697%2F&show_text=false&width=560" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </p>
        </Container>
    )
}