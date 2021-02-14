import React, { useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../../Firebase'
import { AuthContext } from '../../Auth';
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
    const [show, setShow] = useState(false);
    const [actualUser, setActualUser] = useState({ fullname: "", sessions: [] })
    const { currentUser } = useContext(AuthContext);
    const handleSubmit = async () => {

        await firebase.firestore()
            .collection('users').where("email", '==', currentUser.email).get().then(response => {
                let batch = firebase.firestore().batch()
                response.docs.forEach((doc) => {
                    const docRef = firebase.firestore().collection("users").doc(doc.id)
                    docRef.update(
                        { sessions: firebase.firestore.FieldValue.arrayUnion({ class: item.class, location: item.location, image: item.image, level: item.level, student: item.student, description: item.description, date: item.date }) },
                    )
                })
                batch.commit().then(() => {
                    console.log(`updated all documents inside ${"users"}`)
                })
            })
    };
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);
    return (
        <Card className={classes.card} >
            <CardContent>
                <img alt="courseImage" src={item.image} style={{ height: '80px' }} />
                <h3>{item.class.toUpperCase()} Level {item.level}</h3>
                <p>Date: {item.date ? new Date(item.date.seconds * 1000).toLocaleDateString("en-US") : null}</p>
                <h4>Student: {item.student}</h4>
                <h4>Location: {item.location}</h4>
                <p>{item.description}</p>
                <button className={classes.button} onClick={handleShow}>Shedule</button>
            </CardContent>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to schedule this class?</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can earn up to 300 edupoints</Modal.Body>
                <Modal.Footer>
                    <button className={classes.button} variant="secondary" onClick={handleClose}>
                        Cancel
                    </button>
                    <Link to='/dashboard'>
                        <button className={classes.button} variant="primary" onClick={handleSubmit}>
                            I Accept
                    </button>
                    </Link>

                </Modal.Footer>
            </Modal>
        </Card>
    )
}

export default CardOfClass