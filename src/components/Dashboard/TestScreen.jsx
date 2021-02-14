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
import { Card } from '@material-ui/core';
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
    button2: {
        backgroundColor: '#572571',
        borderRadius: 41,
        border: 'none',
        color: 'white',
        fontSize: '2em',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        marginBottom: 20
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
    },
    question: {
        backgroundColor: '#572571',
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 20
    },
    answer: {
        backgroundColor: 'white',
        color: 'black',
        padding: 10,
        borderRadius: 30,
        margin: 5,

    },
    selected: {
        backgroundColor: 'red'
    }
}));
const TestScreen = ({ match }) => {
    console.log("TEST SCREEN", match.params.topic)
    const topic = match.params.topic.toUpperCase()
    const classes = useStyles();
    const [actualUser, setActualUser] = useState({ fullname: "", sessions: [] })
    const [actualQuiz, setActualQuiz] = useState({ question1: [] })
    const [answer1, setAnswer1] = useState('none')
    const [answer2, setAnswer2] = useState('none')
    const [answer3, setAnswer3] = useState('none')

    const { currentUser } = useContext(AuthContext);
    async function getUser() {
        const coll = await firebase.firestore().collection("users")
        const tempUser = await coll.where("email", "==", currentUser.email).get()
        tempUser.forEach(doc => {
            setActualUser(doc.data())
            console.log("User", doc.data())
        })
    }

    async function getTest() {
        const coll = await firebase.firestore().collection("quiz")
        const quizDoc = await coll.doc(match.params.topic).get()
        setActualQuiz(quizDoc.data())
        console.log("User", quizDoc.data())
    }
    useEffect(() => {
        if (currentUser) {
            getUser()
            getTest()
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
                            <h1 style={{ textAlign: 'center', fontSize: '2em' }}>TAKE OUR {topic} QUIZ TO SET YOUR LEVEL</h1>
                        </Grid>
                        <Grid item xs={12} lg={12} style={{ textAlign: 'center' }}>
                            <img alt="imageHistory" style={{ height: 300 }} src={actualQuiz.image}></img>
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            {actualQuiz.question1.map((item, index) => {
                                return <Grid container className={classes.question} >
                                    <Grid item xs={12}>
                                        <h1>{item.question}</h1>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={classes.answer} value={1} >{item.correct_answer}</div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className={classes.answer} value={0}>{item.incorrect_answer}</div>
                                    </Grid>
                                </Grid>
                            })}
                            <Link to={`/level/${match.params.topic}`}>
                                <button className={classes.button2}>Send it</button>
                            </Link>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </div >)
}

export default TestScreen
