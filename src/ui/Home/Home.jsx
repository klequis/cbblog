import React from 'react'
import { Route, Link } from 'react-router-dom'
import Footer from 'ui/Footer'
import Hero from 'ui/Hero'
import Code from 'ui/Code'
import posts from 'posts'

const titleToHyphenatedText = (title) => {
  const lower = title.toLowerCase()
  const arr = lower.split(' ')
  const hyphens = arr.join('-')
  return hyphens
}

const exampleCode = `
const Home = () => {
  const name = 'Carl'
  return (
    <h1>Hello World {name}</h1>
  )
}
`.trim()

const Home = () => {
  // console.log('posts', posts)

  return (
    <div>
      {/* <Breakpoints /> */}
      <Hero />
      <div>
        <Code code={exampleCode} />
      </div>
      <div>
        {
          posts.map(p => {
            const path = titleToHyphenatedText(p.title)
            return (
              <Link to={`/${path}`}>{p.title}</Link>
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