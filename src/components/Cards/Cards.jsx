import React from 'react';
import {Card,CardContent, Typography ,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered,deaths, lastUpdate}})=> {
    if(!confirmed){
        return 'Loading....';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Infected</Typography>
                        <Typography variant="h5">
                            <Countup
                            start={0}
                            end={confirmed.value}
                            separator=","
                            duration="2"
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Infected Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Recovered</Typography>
                        <Typography variant="h5">
                            <Countup
                            start={0}
                            end={recovered.value}
                            separator=","
                            duration="2"
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total Recovered Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Deaths</Typography>
                        <Typography variant="h5">
                            <Countup
                            start={0}
                            end={deaths.value}
                            separator=","
                            duration="2"
                            /></Typography>                      
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Active Death Cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
} 
export default Cards;