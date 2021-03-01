import React from 'react';
import {Grid, GridList, GridListTile} from '@material-ui/core';

export default function Education({deg}){

    return (
        <GridList cols={3}>
            <GridListTile><p>{deg.school}</p></GridListTile>
            <GridListTile><p>{deg.degree}</p></GridListTile>
            <GridListTile><p>{deg.awardDate}</p></GridListTile>
        </GridList>
    )
}