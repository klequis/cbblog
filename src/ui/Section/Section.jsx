import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const Section = (props) => {

  const { children, classes, className, background='light' } = props
  const clsNames = classNames(
    {
      [classes.dark]: background === 'dark',
    },
    [
      [classes.wrapper],
      className,
    ]

  )

return (
    <section className={clsNames}>
      <div className={classes.inner}>
      {children}
      </div>
    </section>
  )

}

const styles = theme => ({
  wrapper: theme.section.xs,
  inner: {
    maxWidth: 1180,
    margin: 'auto',
  },
  dark: {
    // backgroundColor: '#2b3137',
    backgroundColor: theme.section.colors.background.dark,
    color: 'white',
    boxShadow: theme.section.shadow.dark
  },
})

export default injectSheet(styles)(Section)