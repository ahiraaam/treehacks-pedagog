import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardClass from './Cards/Card';
import Card2 from './Cards/Card2';
import firebase from '../Firebase'
import { AuthContext } from '../Auth';
import CardWorkshop from './Cards/CardWorkshop'
import CardTopic from './Cards/CardTopic';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    dashboard: {
        minHeight: '90vh',
        backgroundColor: '#D8D7E6',
        color: '#3B0059;'
    },
    leftHeader: {
        backgroundColor: '#3B0059',
        height: 120,
        color: 'white'
    },
    rightHeader: {
        height: 120,
        paddingLeft: 10,
    },
    titlesHeaders: {
        fontSize: '1.5em',
        color: '#3B0059',
        marginTop: 10,
        marginBottom: 5
    },
    subtitleHeader: {
        fontSize: '1.5em',
        color: '#3B0059',
        fontWeight: 'bold',
        margin: 0
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
    },
    imageProfile: {
        width: '20%',
        margin: 5
    }
}));
const Classes = () => {
    const classes = useStyles();
    const [actualUser, setActualUser] = useState({ fullname: "", sessions: [] })
    const { currentUser } = useContext(AuthContext);
    async function getUser() {
        const coll = await firebase.firestore().collection("users")
        const tempUser = await coll.where("email", "==", currentUser.email).get()
        tempUser.forEach(doc => {
            setActualUser(doc.data())
            console.log("User", doc.data())
        })
    }
    useEffect(() => {
        if (currentUser) {
            getUser()
        }
    }, [])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} lg={5} style={{ height: '120px' }}>
                    <Grid container className={classes.leftHeader}>
                        <img className={classes.imageProfile} alt="profile" src={require('../../images/profileImage.png').default} />
                        <h1 style={{ marginTop: 40 }}>Welcome {actualUser.fullname}</h1>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4} style={{ height: '120px' }}>
                    <div className={classes.rightHeader}>
                        <p className={classes.titlesHeaders}>Edupoints Balance:</p>
                        <h3 className={classes.subtitleHeader}>{actualUser.edupoints}</h3>
                        <Link to='/edupoints'>
                            <button className={classes.button}>More</button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} style={{ height: '120px' }}>
                    <div className={classes.rightHeader}>
                        <p className={classes.titlesHeaders}>Time to Graduation:</p>
                        <h3 className={classes.subtitleHeader}>365 days</h3>
                        <button className={classes.button} onClick={() => firebase.auth().signOut()}>Sign out</button>
                    </div>
                </Grid>
                <Grid className={classes.dashboard} item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} style={{ marginLeft: 20 }}>
                            <h1 style={{ textAlign: 'center', fontSize: '2em' }}>What do you want to teach?</h1>
                        </Grid>

                        <Grid item xs={3}>
                            <Link to="/test-history/history" >
                                <CardTopic name="History" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/sword.png?alt=media&token=a44fefcd-4c1d-4f95-aefc-755da0c6bdaf"></CardTopic>
                            </Link>
                        </Grid>

                        <Grid item xs={3}>
                            <Link to="/test-history/mathematics" >
                                <CardTopic name="Math" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/calculating.png?alt=media&token=350bba2d-546e-4ef5-83e1-e1896535b906"></CardTopic>
                            </Link>

                        </Grid>
                        <Grid item xs={3}>
                            <CardTopic name="English" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/Imagen%2015.png?alt=media&token=a861fab9-8dcc-44b0-987d-a6ca51e44543"></CardTopic>
                        </Grid>
                        <Grid item xs={3}>
                            <CardTopic name="Chemistry" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/chemistry.png?alt=media&token=1b429a5d-5016-4805-9f32-d234a6a0bb56"></CardTopic>
                        </Grid>
                        <Grid item xs={3}>
                            <CardTopic name="Computer Science" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/computer-science.png?alt=media&token=edfe1f68-1c5c-4706-9142-19c6dad7f27d"></CardTopic>
                        </Grid>
                        <Grid item xs={3}>
                            <CardTopic name="Physics" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/atom.png?alt=media&token=ca37aa41-4553-4621-9489-ca1f9045af40"></CardTopic>
                        </Grid>
                        <Grid item xs={3}>
                            <CardTopic name="See More" image="https://firebasestorage.googleapis.com/v0/b/pedagog-a5cda.appspot.com/o/Imagen%2014.png?alt=media&token=17476a1d-5b3a-484e-9af7-8076ceedf36a"></CardTopic>
                        </Grid>
                    </Grid>

                </Grid>
                <button onClick={() => firebase.auth().signOut()}>Sign out</button>

            </Grid>
        </div >)
}

export default Classes
