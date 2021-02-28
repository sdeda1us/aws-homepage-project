import React from 'react';
import {Container, Grid, makeStyles, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, maroon, red)',
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

export default function CodeNavBar() {

    return(
        <Container>
            <Grid container spacing={10} justify="center"> 
                <Grid item><Link to ="/coding/js"><ButtonStyled buttonText='Javascript'/></Link></Grid>
                <Grid item><Link to="/coding/styling"><ButtonStyled buttonText='Styling'/></Link></Grid>
                <Grid item><Link to="/coding/react"><ButtonStyled buttonText='React'/></Link></Grid>
                <Grid item><Link to="/coding/relational"><ButtonStyled buttonText='Relational Databases'/></Link></Grid>
                <Grid item><Link to="/coding/node"><ButtonStyled buttonText='Node.js'/></Link></Grid>
                <Grid item><Link to="/coding/aws"><ButtonStyled buttonText='Amazon Web Services'/></Link></Grid>
            </Grid>
        </Container>
    )
}