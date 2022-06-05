import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function Event() {
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
          <div className='event-main'>
            <div>
              <label htmlFor=""> From
                <input type="date" id="start" name="trip-start"
                  value="2022-05-15"
                  min="2000-01-01" max="2050-12-31" />
              </label>
            </div>
            <div>
              <label htmlFor=""> To
                <input type="date" id="start" name="trip-start"
                  value="2022-05-15"
                  min="2000-01-01" max="2050-12-31" />
              </label>
            </div>
            <div>
              <input type="placeholder" placeholder='Search' />
            </div>
            <div className='btn btn-event-go'>
              Go
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Event