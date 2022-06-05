import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function Sms() {
  return (
    <>
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
                <label htmlFor="">Gateaway <span>*</span>
                  <select className='padding-left-60' name="" id="">
                    <option value="">Select SMS Type</option>
                    <option value="">Transaction SMS Balance : 0</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="">SMS Template
                  <select className='padding-left-40 padding-top-10' name="" id="">
                    <option value="">Select</option>
                  </select>
                </label>
                <div>
                  <input className='padding-left-130 padding-top-20' type="radio" />All Memebers
                  <input className='padding-left-30' type="radio" />Active Members
                  <input className='padding-left-30' type="radio" />Inactive Members
                  <input className='padding-left-30' type="radio" />Suspect List
                  <input className='padding-left-30' type="radio" />Enquiry List
                  <input className='padding-left-30' type="radio" />Gender <br />
                  <input className='padding-left-130' type="radio" />Service Wise
                  <input className='padding-left-30' type="radio" />Tenure Wise
                  <input className='padding-left-30' type="radio" />Age Group
                  <input className='padding-left-30' type="radio" />Custom Mailer List
                </div>
              </div>
              <div>
                <label for="email"><b>Message <span>*</span></b></label>
                <input className='padding-left-60 padding-top-20' type="text" placeholder=" Type an SMS or Select form the pre-defined template(s).Maximum 160 characters" name="message" id="mesage" required />
                <p className='padding-top-20'>Please note:-The USage of "&" is not allowd in the SMS</p>
                <input className='papadding-top-40 dding-left-130' type="checkbox" />Send a Copy to ME
              </div>
              <div className='btn padding-top-40 btn-send-sms'>
                send sms
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Sms