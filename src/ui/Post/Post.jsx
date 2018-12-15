import React from 'react'
import injectSheet from 'react-jss'
import posts, { getPostByPath } from 'posts'
import iHome from 'media/home.svg'
import Text from 'elements/Text'
// Dev
import { green } from 'logger'

const Post = (props) => {
  const { classes } = props
  // green('props', props)
  const { path } = props.match
  green('Post: path', path)
  const post = getPostByPath(path)
  return (
    <div>
      <div className={classes.pageHeader}>
        <img src={iHome} alt='navigate to home page' />
        <Text h2 noMargin>{post.title}</Text>
      </div>
      <Text p>
        by <a href={'http://carlbecker.com'}>{post.author}</a>
      </Text>
      <post.component />
    </div>
  )
}

const styles = {
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
  }
}

export default injectSheet(styles)(Post)