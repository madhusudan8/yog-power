import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function MealPlanTemplate() {
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
                        No Results Found
                      </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default MealPlanTemplate