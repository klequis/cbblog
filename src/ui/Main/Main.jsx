import React from 'react'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'
import posts from 'posts'
import { toHyphenatedText } from 'lib/toHyphenatedText'
import TOC from 'ui/TOC'
import Post from 'ui/Post'
import Button from 'elements/Button'

const Main = ({ classes }) => {

  return (
    <div>
      <Route exact path='/' component={TOC} />
      <Button>Ripple</Button>
      {
        posts.map(p => {
          const path = toHyphenatedText(p.title)
          return (
            <Route
              key={path}
              path={`/${path}`}
              component={Post}
            />
          )
        }

        )
      }
    </div>
  )
}

const styles = {


}

export default injectSheet(styles)(Main)
