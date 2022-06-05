import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function PushNotification() {
  return (
    <>
      <div >
        <Topnav/>
      </div>
      <div style={{ display: 'flex' }}>
        <div className='sideNav' style={{ justifyContent: 'start', width: '5%' }}>
          <SideNav/>
        </div>
        <div className='Body' style={{ width: '100%' }}>
          <Topheader/>

          <div>
            <div>
              <div>
                <label htmlFor="">
                  Title <span>*</span>
                  <input className='padding-left-50' type="placeholder" />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Message <span>*</span>
                  <input className='padding-left-20 padding-top-20' type="placeholder" />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  Details <span>*</span>
                  <input className='padding-left-35 padding-top-20' type="placeholder" />
                </label>
              </div>
              <div className='padding-left-80s'>
                Notify To
                <input  type="checkbox" />Members
                <input type="checkbox" />Non Members and Members not logged in
              </div>
              <div className='padding-left-80s padding-top-20'>
                Platform
                <input type="checkbox" />Android
                <input type="checkbox" />IOS
              </div>
              <div className=' btn btn-PushNotification'>
                Send
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default PushNotification