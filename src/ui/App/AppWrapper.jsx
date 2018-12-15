import React from 'react'
import withThemeProvider from 'theme/withThemeProvider'
import App from './App'

const AppWrapper = ({ classes }) => {
  return (
    <App />
  )
}

export default withThemeProvider(AppWrapper)

