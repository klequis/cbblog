import React from 'react'
import injectSheet from 'react-jss'
import Section from 'ui/Section'
import Text from 'ui/Text'

const Skills = ({ classes, breakpoint }) => {


  return (
    <Section className={classes.wrapper} background='dark'>
      <Text variant='h1'>Carl's Blog</Text>
    </Section>
  )

}

const styles = theme => {
  return({

  })
}

export default injectSheet(styles)(Skills)