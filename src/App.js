import React from 'react'
import SideNav from './components/SideNav'
import Topnav from './components/Topnav'
import Content from './components/Content'
import Topheader from './components/Topheader'


const App = () => {
  return (
    <>
      <div >
        <Topnav />
      </div>
      <div style={{ display: 'flex' }}>
        <div className='sideNav' style={{justifyContent:'start', width:'5%'}}>
          <SideNav />
        </div>
        <div className='Body' style={{width:'100%'}}>
          <Topheader />
          <Content/>
        </div>
        
      </div>
    </>

  )
}

export default App
