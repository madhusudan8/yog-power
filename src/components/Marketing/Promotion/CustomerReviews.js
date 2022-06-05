import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function CustomerReviews() {
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
                  <label for="email"><b>Message <span>*</span></b></label>
                  <input type="text" placeholder="Search by Name/Mobile Number" name="message" id="mesage" required />
                </div>
                <div className='btn btn-go-customer-review'>
                  Go
                </div>
              </div>
              <div>
                <div>
                  Page of 1 of 1
                </div>
                <div>
                  <h6>
                    Date
                  </h6>
                  <h6>
                    Name
                  </h6>
                  <h6>
                    E-Mail id
                  </h6>
                  <h6>
                    Contact Number
                  </h6>
                  <h6>
                    Experience Title
                  </h6>
                  <h6>
                    Reply/Post
                  </h6>
                  <h6>
                    Report/Type
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerReviews