import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function CustomerMailList() {
  return (
    <>
      <div >
        <Topnav />
      </div>
      <div style={{ display: 'flex' }}>
        <div className='sideNav' style={{ justifyContent: 'start', width: '5%' }}>
          <SideNav />
        </div>
        <div className='Body' style={{ width: '100%' }}>
          <Topheader />
          <div>
            <div>
              <div>
                <label htmlFor="">
                  <select className='padding-left-5' name="" id="">
                    <option value=""> Select List</option>
                  </select>
                </label>
                <div className='btn btn-marketing-edit'>
                  Edit
                </div>
              </div>
              <div>
                <label htmlFor="">Communicate
                  <select className='padding-left-10 padding-top-10' name="" id="">
                    <option value="">Select</option>
                    <option value="">Send E-mail</option>
                    <option value="">Send SMS</option>
                  </select>
                </label>
              </div>
              <div>
                <input className='padding-left-5 ' type="placeholder" />
                <div className='btn btn-add-to-list'>
                  Add to list
                </div>
              </div >
              <div className='mid-CustomerMailList'>
              </div>
              <div>
                No Results Found
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerMailList