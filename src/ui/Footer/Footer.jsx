import React from 'react'
import injectSheet from 'react-jss'
import Section from 'ui/Section'
import iMeetup from 'media/logos/meetup-swarm.svg'
import iGithub from 'media/logos/github-octocat.svg'
import iFacebook from 'media/logos/facebook.svg'
import iSlack from 'media/logos/slack.svg'
import iContact from 'media/contact02.svg'

const meetupURL = 'https://www.meetup.com/trivalleycoders/'
const gitHubURL = '"https://www.meetup.com/trivalleycoders/"'
const facebookURL = 'https://www.facebook.com/groups/free.code.camp.sanramon/'
const slackURL = 'https://join.slack.com/t/trivalleycoders/shared_invite/enQtMjk2NDY3NDAwMjI1LWU0YjFjNjE5MDgwYzYwYmUwMWJlNjk1NDU4YmI5ZmZjZGU0ZDcwY2E2Y2RlNmU0MWFlZTUyODFkYzM1NGVlYTQ'

const Footer = ({ classes }) => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.links}>
          <div className={classes.linkRow}>
            <a href={meetupURL}><img src={iMeetup} className={classes.logo} alt='meetup logo' /></a>
            <a href={gitHubURL}><img src={iGithub} className={classes.logo} alt="klequis' github" /></a>
          </div>
          <div className={classes.linkRow}>
            <a href={facebookURL}><img src={iFacebook} className={classes.logo} alt='tri valley coders facebook' /></a>
            <a href={slackURL}><img src={iSlack} className={classes.logo} alt='tri valley coders slack' /></a>
          </div>
        </div>
        <div className={classes.contact}>
          <img src={iContact} className={classes.contactIcon} alt='contact carl' />
          <span className={classes.contactEmail}>carl@trivalleycoders.com</span>
        </div>
      </div>
    </section>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: '#24292e',
  },
  inner: {
    maxWidth: 751,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '3rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up(500)]: {
      flexDirection: 'row',
    },
  },
  linkRow: {
    display: 'flex',
    justifyContent: 'space-around',
    // eslint-disable-next-line
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: '3rem',
    [theme.breakpoints.up(500)]: {
      justifyContent: 'space-around',
    }
  },
  logo: {
    maxHeight: 60,
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactIcon: {
    maxHeight: 20,
  },
  contactEmail: {
    color: 'white',
    fontWeight: 500,
    marginTop: '1rem',
  },
})

export default injectSheet(styles)(Footer)
