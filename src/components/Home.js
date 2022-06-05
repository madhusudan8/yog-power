import React from 'react'
import SideNav from './SideNav'
import Topnav from './Topnav'
import Content from './Content'
import TopTab from './TopTab'


const Home = () => {
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
          <TopTab/>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default Home
