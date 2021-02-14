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
        color: 'white',
        textAlign: 'center',
        fontSize: '0.7em',
        backgroundColor: '#3B0059'
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
const Card2 = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent>
                <img alt="addImage" src={require('../../../images/add.png').default} style={{ height: '100px' }}></img>
                <h2>Schedule Classes</h2>
            </CardContent>
        </Card>
    )
}

export default Card2