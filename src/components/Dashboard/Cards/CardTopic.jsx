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
        '&:hover': {
            backgroundColor: '#3B0059',
            color: 'white',
            textDecoration: 'none'
        },
        '&:focus': {
            backgroundColor: '#3B0059',
            color: 'white'
        }
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
const CardTopic = ({ image, name }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} onClick={() => { console.log("CARD") }}>
            <CardContent>
                <img alt="courseImage" src={image} style={{ height: '80px' }} />
                <h1>{name}</h1>
            </CardContent>
        </Card>
    )
}

export default CardTopic