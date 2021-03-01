import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ExperienceList from './ExperienceList.jsx';



export default function Experience() {
    const experiences = [
        {
            place: 'Prime Digital Academy', 
            dateRange: 'September 2020 – February 2021', 
            jobTitle: 'Student - Full Stack Developer', 
            workSpotlight: [
                {
                    title: 'Shakespeare Party!', 
                    description: [
                        'A full stack CRUD application with a SQL, Express, React, Node stack', 
                        'The application lets groups select any play from the Complete Works of William Shakespeare, assign roles and read and perform the play.'
                    ]
                }, 
                {
                    title: 'Results Foundation', 
                    description: [
                        'A full stack CRUD application with a SQL, Express, React, Node stack', 
                        'Built a portal that allows the RE/MAX Results Foundation to collect evaluate and respond to grant applications', 'Worked on a four-person remote team on design, project scoping, database creation, coding, and testing', 'Served as point of contact for the team with our client'
                    ]
                }
            ]
        },
        {
            place: 'The University of Minnesota Department of Political Science', 
            dateRange: 'August 2017 – August 2020',
            jobTitle: 'Adjunct Professor',
            workSpotlight: [{
                title: 'Lecturer for Political Theory Courses',
                description: [
                    'Responsible for courses ranging in size from 40 to 90 students',
                    'Designed the course curriculum, managed and gave lectures, grading and course workflow',
                    'Oversaw the professional development of graduate student teaching assistants working under my supervision',
                    'Promoted student support that embraced accessibility, diversity and inclusion guidelines on the professional, university, State and Federal levels',
                    'Managed courses completely online in response to the COVID-19 global emergency for Spring Semester and Summer Session in 2020'
                ]
            }]   
        },
        {
            place: 'The University of Saint Thomas Department of Political Science',
            dateRange: 'August 2008 – May 2012 & January 2016 – December 2018',
            jobTitle: 'Adjunct Professor',
            workSpotlight: [
                {
                    title: 'Lecturer for Political Science Courses',
                    description: [
                        'Assisted the department by teaching courses outside my area of specialization when the department was short staffed',
                        'Oversaw student devlopment of writing, critical thinking, and probabilty analysis skills',
                        'Assisted in curriculum devlopment and departmental design'
                    ]
                },
                {
                    title: 'Coach - University of Saint Thomas Mock Trial Team',
                    description: [
                        'Assisted students in learining legal conspets, trial prep, and persuasive speaking',
                    ]
                },
                {
                    title: 'Senior Editor - The Good Society',
                    description: [
                        'Reached out to prospective authors for contributions',
                        'Organized issues around ideas',
                        'Edited proofs before sending them to the publisher'
                    ]
                }  
            ]  
        }
    ];

    return (
        <Grid container justify="center">
            <Grid item>
                <h2>Work Experience</h2>
            </Grid>
            <Grid item justify="center">
                {experiences.map((xp)=>(<ExperienceList place = {xp.place} dateRange={xp.dateRange} jobTitle={xp.jobTitle} workSpotlight = {xp.workSpotlight}/>))}
            </Grid>
        </Grid>
    )
}
            