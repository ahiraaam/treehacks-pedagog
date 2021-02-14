import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        boxShadow: '15px 15px 6px #2C2A2A29;',
        borderRadius: 61,
        width: '90%',
        marginLeft: '1vh',
        color: '#3B0059',
        textAlign: 'center',
        fontSize: '0.7em'
    },
    button: {
        backgroundColor: '#572571',
        borderRadius: 41,
        border: 'none',
        color: 'white',
        fontSize: '1em',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
    }

});
const CardWorkshop = ({ data }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <img alt="courseImage" src={data ? data.image : null} style={{ height: '80px' }} />
                <p>Date: {data ? new Date(data.date.seconds * 1000).toLocaleDateString("en-US") : null}</p>
                <h4>{data ? data.class : null}</h4>
                <p>{data ? "Mentor: " + data.mentor : null}</p>
                <button className={classes.button}>See More</button>
            </CardContent>
        </Card>
    )
}

export default CardWorkshop