import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from '../cartWidget/cartWidget'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className='appBar'>
        <Toolbar>
          <div className = 'container'>
          <h3>OPEN MARKET</h3>
          
          <div className= 'condition-list'>
            <p variant="h6" className={classes.title}>
              Nuevo
            </p>
            <p variant="h6" className={classes.title}>
              Usado
            </p>
          </div>
          


          <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
            <CartWidget />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

