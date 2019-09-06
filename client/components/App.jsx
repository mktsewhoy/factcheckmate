import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import Header from './Header'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    <Header />
    <ErrorMessage />
    <LoadSubreddit>
      <WaitIndicator />
    </LoadSubreddit>
    <SubredditList />
  </div>
)

export default App
