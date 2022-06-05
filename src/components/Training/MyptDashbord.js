import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function MyptDashbord() {
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
            <div className='ptdash-top'>
              <div className='ptdash-topmost'>
                <p>Form</p>
                <input type="date" data-date-inline-picker="true" />
                <div className='btn btn-go-MyptDashbord'>
                  Go
                </div>
              </div>
              <div className='ptdash-divs'>
                <div className='div1'>
                  <h6>Sales</h6>
                  <p>0</p>
                  <p>View more</p>
                </div>
                <div className='div2'>
                  <h6>Payments Collected</h6>
                  <p>0</p>
                  <p>View more</p>
                </div>
                <div className='div3'>
                  <h6>Payments Pending</h6>
                  <p>0</p>
                  <p>View more</p>
                </div>
              </div>
            </div>
            <div className='btdash-mid'>
              <div className=' dashmid-div1'>
              <h6 className='border-bottom'>Personal Training Clients</h6>
                  <h6 className='border-bottom'>0</h6>
                  <p>View more</p>
              </div>
              <div className='dashmid-div2'>
              <h6 className='border-bottom'>General Training Clients</h6>
                  <h6 className='border-bottom'>0</h6>
                  <p>View more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyptDashbord