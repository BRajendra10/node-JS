import React from 'react'
import Sidebar from './components/Sidebar'
import RightContainer from './components/RightContainer'
import Feeds from './components/Feeds'

function App() {
  return (
    <div className="w-full h-screen grid grid-cols-12 gap-4 p-4 bg-gray-100">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-7">
        <Feeds />
      </div>

      <div className="col-span-3">
        <RightContainer />
      </div>
    </div>
  )
}

export default App
