import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function AssesmentTemplate() {
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
            <div className='AssesmentTemplate-div'>
              <div className='btn btn-add-new-template '>
                Add New Template
              </div>
            </div>
            <div>
              No results found
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssesmentTemplate