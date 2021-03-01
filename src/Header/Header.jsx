import React from 'react';
import {Container, Box, Typography} from '@material-ui/core';

export default function Header() {

    return (
        <Container>
            <Box display="flex" justifyContent="center">
                <Typography variant='h2' style={{marginTop: '20px'}}>Steven Maloney</Typography>
            </Box>
        </Container>
    )
}