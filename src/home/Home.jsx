import Grid from '@material-ui/core/Grid';
import React from 'react'
import { Link } from 'react-router-dom';

import './style.css'
const Home = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div class="header">
                <div class="bgimage">
                    <div class="leftmenu">
                        <img alt="image1" src={require("./images/logo.png").default} class="logo" />
                        <img alt="image2" src={require("./images/little-book.png").default} class="detail" />
                        <img alt="image3" src={require("./images/purple-thing.png").default} class="purple-thing" />
                        <img alt="image4" src={require("./images/sparkles.png").default} class="sparkles" />
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="cover">
                    <div class="slogan">
                        The platform that helps you to get to college while <a class="strong">paying forward</a>
                    </div>
                    <Link to="/dashboard">
                        <button class="generic-button"> LOG IN </button>
                    </Link>
                </div>
                <Grid container spacing={3} style={{ backgroundColor: '#d8d7e6', height: 500 }}>
                    <Grid item xs={12} className="header-desc">
                        How does it work?
                    </Grid>
                    <Grid item xs={12} lg={4} style={{ padding: 50 }}>
                        <div className="little-container">
                            <img alt="image3" src={require("./images/guy-clipart.png").default} class="icon-cont" /><br />
                        Everyone can become a member and you will be able to teach around the world while learning valuable skills
                        </div>

                    </Grid>
                    <Grid item xs={12} lg={4} style={{ padding: 50 }}>
                        <div className="little-container">
                            <img alt="image3" src={require("./images/award-clipart.png").default} class="icon-cont" /><br />
                                All your interactions with Pedagog will provide you edupoints that can be traded for books, tuition and housing fees once you go to college.
                                </div>

                    </Grid>
                    <Grid item xs={12} lg={4} style={{ padding: 50 }}>
                        <div className="little-container">
                            <img alt="image3" src={require("./images/girl-clipart.png").default} class="icon-cont" /><br />
                                You will have an advisor who will guide you through the process of finding your career path while making sure you are doing everything possible to achieve your goals.
                    </div>
                    </Grid>
                </Grid>
                <div class="cta-modal">
                    But most important
                </div>
                <div class="sign-up-desc">
                    <img alt="image3" src={require("./images/purple-thing-2.png").default} class="purple-thing-2" />
                    <img alt="image3" src={require("./images/earth.png").default} class="earth" />
                    <div class="sign-up-desc-modal">
                        <p>With your skills and talents you will be able to teach people around the globe through our platform </p>
                    </div>
                </div>
                <div class="sign-up-modal">
                    Helping us to bring education to <a class="strong-2">260 million children</a> around the world by 2030
                </div>
                <div class="sign-up-container">
                    <button class="generic-button-2"> JOIN NOW </button>
                    <div class="crop">
                        <img alt="image3" src={require("./images/blue-thing.png").default} class="blue-thing" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home