import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'

function CentralPannle() {
  return (
    <>
      <div>CentralPanel
        <div >
          <Topnav />
        </div>
        <div style={{ display: 'flex' }}>
          <div className='sideNav' style={{ justifyContent: 'start', width: '5%' }}>
            <SideNav />
          </div>
          <div className='Body' style={{ width: '100%' }}>
            <Topheader />
            <div className='CentralPannle-main'>
              <div >
                <label htmlFor="">
                  <select name="" id="">
                    <option value="">select Catagory</option>
                    <option value="">Shoulder</option>
                    <option value="">Biceps</option>
                    <option value="">Triceps</option>
                    <option value="">Chest</option>
                    <option value="">Back</option>
                    <option value="">Leg</option>
                    <option value="">Abs</option>
                    <option value="">Cardio</option>
                    <option value="">Warmup</option>
                    <option value="">Other</option>
                    <option value="">Badminton</option>
                  </select>
                </label>
              </div>
              <div className='btn btn-go-ExcerciseLibrary'>
                Go
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CentralPannle