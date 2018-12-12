import React from 'react'
import withThemeProvider from 'theme/withThemeProvider'
import App from './App'

const AppWrapper = ({ classes }) => {
  return (
    <div>
      <App />
    </div>
  )
}

export default withThemeProvider(AppWrapper)

