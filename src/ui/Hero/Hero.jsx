import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
import Text from 'elements/Text'
import Code from 'elements/Code'

const exampleCode = `
const Welcome = ({ name }) => {

  return (
    <h1>Welcome {name}</h1>
  )

}
`.trim()

const Hero = ({ classes, breakpoint }) => {


  return (
    <Section className={classes.section} background='dark'>
      <div className={classes.wrapper}>
        <Text h1 marginBottom={false}>Carl's Blog</Text>
        <div>
        <Code code={exampleCode} />
        </div>
      </div>
    </Section>
  )

}

const styles = theme => {
  return({
    section: {
      padding: 0,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
}

export default injectSheet(styles)(Hero)