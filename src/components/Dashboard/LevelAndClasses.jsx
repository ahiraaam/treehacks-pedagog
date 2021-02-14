import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardClass from './Cards/Card';
import Card2 from './Cards/Card2';
import firebase from '../Firebase'
import { AuthContext } from '../Auth';
import CardOfClass from './Cards/CardOfClass'

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
const LevelAndClasses = () => {
    const classes = useStyles();
    const [actualUser, setActualUser] = useState({ fullname: "", sessions: [] })
    const [actualClasses, setActualClasses] = useState([])
    const { currentUser } = useContext(AuthContext);

    async function getUser() {
        const coll = await firebase.firestore().collection("users")
        const tempUser = await coll.where("email", "==", currentUser.email).get()
        tempUser.forEach(doc => {
            setActualUser(doc.data())
            console.log("User", doc.data())
        })
    }
    async function getClasses() {
        const coll = await firebase.firestore().collection("classes")
        const quizDoc = await coll.where("class", "==", "History").get()
        let arrayClasses = []
        await quizDoc.forEach(doc => {
            arrayClasses.push(doc.data())

            console.log(arrayClasses)
        })
        setActualClasses(arrayClasses)
    }
    useEffect(() => {
        if (currentUser) {
            getUser()
            getClasses()
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
                        <button className={classes.button}>More</button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3} style={{ height: '120px' }}>
                    <div className={classes.rightHeader}>
                        <p className={classes.titlesHeaders}>Time to Graduation:</p>
                        <h3 className={classes.subtitleHeader}>365 days</h3>
                        <button className={classes.button}>Schedule a meeting</button>
                    </div>
                </Grid>
                <Grid className={classes.dashboard} item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} style={{ marginLeft: 20 }}>
                            <h1 style={{ textAlign: 'center', fontSize: '2em' }}>You are ready to teach:</h1>
                            <h2 style={{ textAlign: 'center', fontSize: '1.5em' }}>History Level 4</h2>
                        </Grid>
                        {actualClasses.map((item, index) => {
                            return <Grid item xs={3}>
                                <CardOfClass item={item}></CardOfClass>
                            </Grid>
                        })}
                    </Grid>

                </Grid>
            </Grid>
        </div >)
}

export default LevelAndClasses
