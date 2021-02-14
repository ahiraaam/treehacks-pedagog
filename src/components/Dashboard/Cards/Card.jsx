import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        boxShadow: '15px 15px 6px #2C2A2A29;',
        borderRadius: 61,
        width: '90%',
        marginLeft: '1vh',
        marginBottom: '2vh',
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
const CardClass = ({ data }) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    return (
        <Card className={classes.card}>
            <CardContent>
                <img alt="courseImage" src={data ? data.image : null} style={{ height: '80px' }} />
                <p>Date: {data ? new Date(data.date.seconds * 1000).toLocaleDateString("en-US") : null}</p>
                <h4>{data ? data.class : null}</h4>
                <p>{data ? "Student: " + data.student : null}</p>
                <p>{data ? "Location: " + data.location : null}</p>
                <button className={classes.button} onClick={handleShow}>See More</button>
            </CardContent>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Details of your class</Modal.Title>
                </Modal.Header>
                <Modal.Body>When it's time enter the zoom meeting: <br /> ID: 473 842 9350 <br /> Password: 8465739</Modal.Body>
                <Modal.Footer>
                    <button className={classes.button} variant="secondary" onClick={handleClose}>
                        Cancel the class
                    </button>
                    <Link to='/dashboard'>
                        <button className={classes.button} variant="primary" onClick={handleClose}>
                            I've finished the class
                    </button>
                    </Link>

                </Modal.Footer>
            </Modal>
        </Card>

    )
}

export default CardClass