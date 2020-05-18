import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%'
    },

    adornment: {
        width: '25em'
    }
}))

const Footer = () => {

    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <img className={classes.adornment} src={footerAdornment} alt='black slash' />
        </footer>
    );
};

export default Footer;
