import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
    ...theme.contactComp
})

const Footer = ({classes}) => {
    return (
        <section id="contact">
            <div className={classes.root}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={3} align="center">
                        <Typography color="secondary" className={classes.basicFont}>
                        Operating Hours: Everday 12pm - 10pm</Typography>
                    </Grid>
                    <Grid item xs={3} align="center">
                        <Typography color="secondary" className={classes.basicFont}>
                        Phone Number: 101-124-9890</Typography>
                    </Grid>
                    <Grid item xs={6} align="center">
                        <IconButton><TwitterIcon color="secondary"/></IconButton>
                        <IconButton><InstagramIcon color="secondary"/></IconButton>
                        <IconButton><FacebookIcon color="secondary"/></IconButton>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default withStyles(styles)(Footer);