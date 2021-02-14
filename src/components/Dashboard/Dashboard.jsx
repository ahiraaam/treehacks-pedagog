import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CardClass from './Cards/Card';
import Card2 from './Cards/Card2';
import firebase from '../Firebase'
import { AuthContext } from '../Auth';
import CardWorkshop from './Cards/CardWorkshop'
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import OpenAI from "openai-api";
import homeButton from "../../elements/images/home-button.png";

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
const Dashboard = () => {
    const handleNewUserMessage = (newMessage) => {
        let query =
            'Generate a super simple synthesis of the topic "' +
            newMessage +
            '" so an elementary school kid can understand it:"""';

        var openaiclient = new OpenAI(
            "sk-rDRox47yaPXgkhs0sZZXw1bGqfPXxr4FaiDcQf0v"
        );

        (async () => {
            const gptResponse = await openaiclient.complete({
                engine: "davinci",
                prompt: query,
                maxTokens: 100,
                temperature: 0.6,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0.36,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['"""', "."],
            });
            addResponseMessage(gptResponse.data.choices[0].text);
        })();

        // Now send the message throught the backend API
    };
    const classes = useStyles();
    const [actualUser, setActualUser] = useState({ fullname: "", sessions: [], edupoints: 0 })
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
                <Grid item xs={12} lg={3} style={{ height: '120px' }}>
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
                <Grid item xs={12} lg={1}>
                    <Link to="/dashboard">
                        <img alt="home" src={homeButton} className="home-button"></img>
                    </Link>
                </Grid>
                <Grid className={classes.dashboard} item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} style={{ marginLeft: 20 }}>
                            <h1>Sessions to teach</h1>
                        </Grid>
                        {actualUser.sessions ?
                            actualUser.sessions.map((session, index) => {
                                return <Grid item xs={12} lg={3} key={index}>
                                    <CardClass data={session}></CardClass>
                                </Grid>
                            })
                            : <Grid item xs={12} lg={12}>
                                <h3>You don't have any session yet :(</h3>
                            </Grid>}
                        <Grid item xs={12} lg={3}>
                            <Link to={'/sessions'}><Card2></Card2></Link>
                        </Grid>

                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} style={{ marginLeft: 20 }}>
                            <h1>Workshops for you</h1>
                        </Grid>
                        {actualUser.workshops ?
                            actualUser.workshops.map((ws, index) => {
                                return <Grid item xs={12} lg={3} key={index}>
                                    <CardWorkshop data={ws}></CardWorkshop>
                                </Grid>
                            })
                            : <Grid item xs={12} lg={12}>
                                <h3>You don't have any session yet :(</h3>
                            </Grid>}
                        <Grid item xs={12} lg={3}>
                            <Card2></Card2>
                        </Grid>
                    </Grid>
                </Grid>
                <Widget
                    handleNewUserMessage={handleNewUserMessage}
                    title="Quick learn"
                    subtitle="¡Ask about any topic and you'll get an AI personally generated synthesis about it!"
                />
            </Grid>
        </div >)
}

export default Dashboard
