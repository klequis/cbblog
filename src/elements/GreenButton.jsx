import React from 'react'
import injectSheet from 'react-jss'


const Button = ({ classes, children }) => {
  return (
    <div className={classes.wrapper}>
      <button className={classes.btn}>{children}</button>
    </div>
  )

}

const styles = theme => ({
  wrapper: {
    padding: 16,
  },
  btn: {
    // added
    position: 'relative',
    backgroundColor: '#4CAF50',
    border: 'none',
    fontSize: 28,
    color: '#FFFFFF',
    padding: 20,
    width: 200,
    textAlign: 'center',
    '-webkit-transition-duration': '0.4s', /* Safari */
    transitionDuration: '0.4s',
    textDecoration: 'none',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:focus': {
      outline: 0,
    },
    '&::after': {
      content: '""',
      background: '#90EE90',
      // background: 'white',
      display: 'block',
      position: 'absolute',
      paddingTop: '300%',
      paddingLeft: '350%',
      marginLeft: '-20px !important',
      marginTop: '-120%',
      opacity: 0,
      transition: 'all 0.8s',

    },
    '&:active::after': {
        content: '""',
        padding: 0,
        margin: 0,
        opacity: 1,
        transition: '0s',
    }
  }

})

export default injectSheet(styles)(Button)

const newStyle = {



}