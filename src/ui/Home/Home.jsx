import React from 'react'
import { Route, Link } from 'react-router-dom'
import Footer from 'ui/Footer'
import Hero from 'ui/Hero'
import posts from 'posts'
import Text from 'elements/Text'

const titleToHyphenatedText = (title) => {
  const lower = title.toLowerCase()
  const arr = lower.split(' ')
  const hyphens = arr.join('-')
  return hyphens
}

const Home = () => {
  // console.log('posts', posts)

  return (
    <div>
      {/* <Breakpoints /> */}
      <Hero />
      <Text p>
        some text
      </Text>
      <div>
        {
          posts.map(p => {
            const path = titleToHyphenatedText(p.title)
            return (
              <Link key={path} to={`/${path}`}>{p.title}</Link>
            )
          })
        }
      </div>
      {
        posts.map(p => {
          const path = titleToHyphenatedText(p.title)
          return (
            <Route
              key={path}
              path={`/${path}`}
              component={p.component}
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