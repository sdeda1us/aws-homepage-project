import React from 'react';
import {Grid, Container} from '@material-ui/core';
import Skills from './Sections/Skills.jsx';
import Biography from './Sections/Biography.jsx';
import Experience from './Sections/Experience.jsx';
import Education from './Sections/Education.jsx';

export default function Resume() {
    
    const degrees = [
        {school: 'Prime Digital Academy', degree: 'Full Stack Software Engineer Certification', awardDate: 'February 2021'},
        {school: 'University of Maryland', degree: 'PhD in Political Science', awardDate: 'May 2008'},
        {school: 'Prime Digital Academy', degree: 'Bachelor of Arts in Political Science', awardDate: 'May 2000'}
    ]
    return (
        <Container> 
            <Biography/>
            <Skills/>
            <Experience/>
            <h2>Education</h2>
                {degrees.map((deg)=>(<Education deg={deg}/>))}
        </Container>
    )
}