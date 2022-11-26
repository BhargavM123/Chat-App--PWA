import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home


// body::-webkit-scrollbar {
//   width: 0.25rem;
// }

// body::-webkit-scrollbar-track {
//     background: #1e1e24;
// }

// body::-webkit-scrollbar-thumb {
//     background: #f10c0c;
// }