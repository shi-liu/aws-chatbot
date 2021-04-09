import Typography from '@material-ui/core/Typography';
import React from 'react';
import Navbar from '../Navbar';
import { HeroContainer, HeroContent, HeroItems } from './HeroElements';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
    ...theme.heroComp
})

const Hero = ({ classes }) => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                <Typography className={classes.titleFont}>
                        QUALITY CHICKEN AND STEAK
                    </Typography>
                    <Typography className={classes.subFont}>
                        Desserts coming soon!
                </Typography>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default withStyles(styles)(Hero);