import AsyncMongo from 'posts/AsyncMongo'
import MUIStart from 'posts/MUIStart'
import { toHyphenatedText } from 'lib/toHyphenatedText'
import { green } from 'logger'

/*
    path: is the title converted to a hyphenated string
*/

const posts = [
  {
    title: 'Async Mongo with Express',
    author: 'Carl (klequis)',
    component: AsyncMongo,
  },
  {
    title: 'Getting Started with Material UI',
    author: 'Carl (klequis)',
    component: MUIStart,
  }
]

export default posts

export const getPostByPath = ( path ) => {
  const idx = posts.findIndex(i => {
    const titleAsPath = `/${toHyphenatedText(i.title)}`
    return (
       titleAsPath === path
    )
  })
  if (idx === -1) {
    return {title: 'cannot find post'}
  } else {
    return posts[idx]
  }
}