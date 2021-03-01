import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #999)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px'
    }
})

function ButtonStyled({buttonText}) {
    const classes = useStyles();
    return <Button className={classes.root}>{buttonText}</Button>
}

export default function NavBar() {
    return (
        <Grid container spacing={10} justify="center" style={{marginTop: '10px'}}> 
            <Grid item><Link to ="/"><ButtonStyled buttonText='Home'/></Link></Grid>
            <Grid item><Link to="/coding"><ButtonStyled buttonText='Coding'/></Link></Grid>
            <Grid item><Link to="/portfolio"><ButtonStyled buttonText='Portfolio'/></Link></Grid>
            <Grid item><Link to="/resume"><ButtonStyled buttonText='Resume'/></Link></Grid>
            <Grid item><a href="https://github.com/sdeda1us" target="_blank"><Button><GitHubIcon/></Button></a></Grid>
            <Grid item><a href="https://www.linkedin.com/in/steven-maloney-71a991106/" target="_blank"><Button><LinkedInIcon/></Button></a></Grid>
        </Grid>
    )
}