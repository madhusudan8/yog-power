import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function Email() {
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
              <div className='Email-template'>
                <label htmlFor="">Email Template
                  <select className='padding-left-40 ' name="" id="">
                    <option value="">Select</option>
                  </select>
                </label>
                <div>
                  <input className='padding-left-90 padding-top-20' type="radio" /> All Memebers
                  <input type="radio" className='padding-left-30' /> Active Memebers
                  <input type="radio" className='padding-left-30' /> Inactive Memebers
                  <input type="radio" className='padding-left-30' />Enquiry List
                  <input type="radio" className='padding-left-30' />Gener
                  <input type="radio" className='padding-left-30' />Service Wise
                  <input type="radio" className='padding-left-30' />Tenure Wise
                  <input type="radio" className='padding-left-30' />Age Group
                  <input type="radio" className='padding-left-30' />Custom Mail List
                </div>
              </div>
              <div>
                Subject <span>*</span>
                <input className='padding-left-80 padding-top-20' type="placeholder" />
              </div>
              <div>
                Message <span>*</span>
                <input className='padding-left-70 padding-top-20' type="placehoder" />
              </div>
              <div>
                Attachment <br />
                (maximum size 10 MB)
                <form action="/action_page.php">
                  <input className='padding-left-130' type="file" id="myFile" name="filename" />
                </form>
              </div>
              <div>
                <input className='padding-left-130' type="checkbox" name="" id="" />
                send a copy to me
              </div>
              <div className='btn btn-sendmail'>
                Send Mail
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Email
