// @flow
import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const App = () => {
    const classes = styles();
    return (
        <div className="App">
            <Grid container className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12} className={classes.header}>
                        <Typography variant="h3" color="primary">
                            Sertifiseringer
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardHeader title="Sertifiseringer"/>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Oracle Certified Java Programmer 1 (Java 8)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};


const styles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 140
    },
    header: {
        marginBottom: 20
    }
}));

export default App;
