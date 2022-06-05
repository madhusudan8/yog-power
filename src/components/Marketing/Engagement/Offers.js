import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function Offers() {
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
            <div className='padding-top-20 main-offers'>
              <div >
                <label htmlFor="">
                  <select className='
                  padding-left-20' name="" id="">
                    <option value="">Select Service</option>
                    <option value="">Yoga</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <select className='padding-left-40' name="" id="">
                    <option value="">Select</option>
                    <option value="">Active</option>
                    <option value="">Inactive </option>
                  </select>
                </label>
              </div>
              <div className='btn btn-offers'>
                Go
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offers