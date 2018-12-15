import React from 'react'
import { Route } from 'react-router-dom'
import Footer from 'ui/Footer'
import Hero from 'ui/Hero'
import posts from 'posts'
import { toHyphenatedText } from 'lib/toHyphenatedText'
import TOC from 'ui/TOC'
import Post from 'ui/Post'
import Button from 'elements/Button'

const Home = () => {

  return (
    <div>
      <Route exact path='/' component={Hero} />
      <Route exact path='/' component={TOC} />
      <Button>Hi</Button>
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
      <Footer />
    </div>
  )
}

export default Home