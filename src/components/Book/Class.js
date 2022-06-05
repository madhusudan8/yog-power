import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function Class() {
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
            <div className='pos-main'>
              <form id="form">
                <input type="text" maxlength="240" placeholder="Search Product" id="txtsc" class="form-control" style={{ width: 800 }} />
              </form>
              <p> Currently No Results Found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Class