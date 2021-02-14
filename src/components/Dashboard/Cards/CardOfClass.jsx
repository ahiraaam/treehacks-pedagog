import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        boxShadow: '15px 15px 6px #2C2A2A29;',
        borderRadius: 61,
        width: '90%',
        marginLeft: '1vh',
        marginBottom: '2vh',
        color: '#3B0059',
        textAlign: 'center',
        fontSize: '0.7em',
        textDecoration: 'none',

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
const CardOfClass = ({ item, image }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} >
            <CardContent>
                <img alt="courseImage" src={item.image} style={{ height: '80px' }} />
                <h3>{item.class} Level {item.level}</h3>
                <p>Date: {item.date ? new Date(item.date.seconds * 1000).toLocaleDateString("en-US") : null}</p>
                <h4>Student: {item.student}</h4>
                <h4>Location: {item.location}</h4>
                <p>{item.description}</p>
                <button className={classes.button}>Shedule</button>

            </CardContent>
        </Card>
    )
}

export default CardOfClass