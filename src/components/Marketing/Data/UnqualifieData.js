import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function UnqualifieData() {
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
                <div>
                  <label htmlFor=""> Select Groups
                    <select name="" id="">
                      <option value="">select group</option>
                    </select>
                  </label>
                </div>
                <div className='btn btn-manage-groups'>
                  manage groups
                </div>
              </div>
              <div>
                <label htmlFor=""> Communicate
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Send E-mail</option>
                    <option value=""> Send SMS</option>
                  </select>
                </label>
                <label htmlFor=""> Action
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Move TO Achive</option>
                    <option value=""> Delete</option>
                  </select>
                </label>
                <div className='btn marketing-achive-btn'>
                  Achive
                </div>
                <div className='btn marketing-achive-btn'>
                  Export Excel
                </div>
                <div className='btn marketing-achive-btn'>
                  Bulk Conversion
                </div>
                <div className='btn marketing-achive-btn'>
                  Import Suspect  list
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnqualifieData