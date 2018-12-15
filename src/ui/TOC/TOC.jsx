import React from 'react'
import { Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import Link from 'elements/Link'
import { toHyphenatedText } from 'lib/toHyphenatedText'
import posts from 'posts'

const TOC = ({ classes }) => {
  return (
    <ul className={classes.list}>
      {
        posts.map(p => {
          const path = toHyphenatedText(p.title)
          return (
            <li key={path}>
              <Link to={`/${path}`}>{p.title}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

const styles = {
  list: {
    listStyleType: 'none',
  },
}

export default injectSheet(styles)(TOC)