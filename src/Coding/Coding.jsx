import React from 'react';
import {Container} from '@material-ui/core';

export default function Coding() {

    return(
        <Container>
            <h2>Prime Academy Capstone Projects</h2>
            <h3>Group Capstone Project - Results Foundation Grant Applicaiton Portal</h3>
            <p>
            Check out my teams presentation of our final project: The Result Foundation Grant Applicaiton Portal. I'm on at the 26:28 mark introducing our group project.
            </p>
            <p>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fprimedigitalacademy%2Fvideos%2F133700585281697%2F&show_text=false&width=560" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </p>
            <h3>Solo Capstone Project - Shakespeare Party</h3>
            <p>
                Shakespeare Party is deployed at <a href="https://protected-oasis-12943.herokuapp.com/"/>. There are some slight deployment issues with Heroku that need ironing out with responsiveness and formatting, but on the whole you can register for an account and play around with the app for yourself.
            </p>
        </Container>
    )
}