import React from 'react'
import SideNav from '../../SideNav'
import Topheader from '../../Topheader'
import Topnav from '../../Topnav'

function YoactiveFirst() {
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
                                About Us <br />
                                <input type="placeholder" />
                            </div>
                            <div>
                                Website <br />
                                <input type="placeholder" />
                            </div>
                            <div>
                                FB Page ID <br />
                                <input type="placeholder" />
                            </div>
                            <div>
                                <h6>
                                    Additional Features
                                </h6>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor=""><input type="radio" />Parking</label>
                                    <label htmlFor="">  <input type="radio" />Personal Training</label>
                                    <label htmlFor=""><input type="radio" />Pool</label>
                                    <input type="radio" />Group Class
                                    <input type="radio" />Free Trail
                                    <input type="radio" />Sunday Open
                                    <input type="radio" />Shower
                                </div>
                                <div>
                                    <input type="radio" />Nutritional Support
                                    <input type="radio" />Locker Room
                                    <input type="radio" />Certified Trainers
                                    <input type="radio" />Shower Room
                                    <input type="radio" />First-aid Kit
                                    <input type="radio" />Sauna
                                    <input type="radio" />Free Wi-Fi
                                </div>
                                <div>
                                    <input type="radio" />Adavnce equipment's
                                    <input type="radio" />Changing Room
                                    <input type="radio" />In-house Store
                                    <input type="radio" />Healthy Cafe
                                    <input type="radio" />24/7
                                    <input type="radio" />Hand towels
                                    <input type="radio" />Free Wi-Fi
                                </div>
                                <div>
                                    <input type="radio" />Spa
                                    <input type="radio" />Outdoor Training
                                    <input type="radio" />Physiotheapy
                                </div>
                            </div>
                            <div>
                                <h6>Tags</h6>
                                <div>
                                    <input type="radio" />Women's Only
                                    <input type="radio" />Workplace Wellness Partner
                                    <input type="radio" />Instant Booking
                                    <input type="radio" />Earn Cashback
                                    <input type="radio" />New
                                    <input type="radio" />Earn Rewards
                                </div>
                            </div>
                            <div>
                                <h6>Average Monthly  Bugert Per Person</h6>
                                <div>
                                    <label htmlFor="">
                                        <select name="" id="">
                                            <option value="">Select</option>
                                            <option value="">Less than 1000</option>
                                            <option value="">1000-2500</option>
                                            <option value="">2500-5000</option>
                                            <option value="">7500-10000</option>
                                            <option value="">10000-15000</option>
                                            <option value="">15000 & Above</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='btn btn-save yoactiv-profile'>
                                    Save
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoactiveFirst