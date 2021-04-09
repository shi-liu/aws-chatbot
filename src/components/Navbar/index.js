import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    ...theme.navComp
})


/*
Navbar based on material ui's component
Used a scroll library for easy static page navigation
*/
const Navbar = ({ classes }) => {
   
    return (
        <section id="navbar">
            <AppBar position="static" style={{background: "transparent", boxShadow: 'none'}}>
                <Toolbar>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <Typography className={classes.compName}>Maze Cafe</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to="menu" smooth={true}>
                                <Button size="small" color="secondary">Menu</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to="contact" smooth={true}>
                                <Button size="small" color="secondary">Contact</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </section>
    )
};

export default withStyles(styles)(Navbar);