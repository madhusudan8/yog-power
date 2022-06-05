import React from 'react'
import SideNav from '../SideNav'
import Topheader from '../Topheader'
import Topnav from '../Topnav'


function Enquiries() {
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
                        <div className='main-enquiries'>
                            <div className='allEnquiries-top'>
                               <div className='allEnquiries-top-no-results'>
                               <h3>All Enquiries</h3>
                                No Results Found
                               </div>
                                <div className='today-enquiries'>
                                    <select className='dropdown-enquiries' id="id">
                                        <option value="days">Today</option>
                                        <option value="number">Last 7 Day</option>
                                        <option value="Month">Month Till End</option>
                                        <option value="Customer">Customer Date Range</option>
                                    </select>
                                    <div>
                                        <button className='btn button-enquiries'>GO</button>
                                    </div>
                                    <div className='enquirires-links'>
                                        <a href="memleadimport.aspx" className='btn btn-import'>Import Enquiry</a>
                                        <a href="memshipequ.aspx?Archive=1" className='btn btn-export'>Export Achive</a>
                                    </div>
                                </div>
                                <div className='enquiries-cards'>
                                    <div className="card card-enquiries">
                                        <h4>Enquiries-0</h4>
                                        <div className='enquiries-text'>
                                            <h6 className="card-open">Open <br />0</h6>
                                            <h6 className="converted-open">Converted <br />0</h6>
                                            <h6 className="lost-open">Achive/Lost <br />0</h6>
                                        </div>
                                    </div>
                                    <div className="card open-enquiries">
                                        <h4>Open Enquiries</h4>
                                        <div className='enquiries-text'>
                                            <h6 className="card-open">Enquiry <br />  0</h6>
                                            <h6 className="converted-open">Trial Scheduled<br />  0</h6>
                                            <h6 className="lost-open">Post Trial<br />  0</h6>
                                            <h6 className="lost-open">Sales Stage<br />  0</h6>
                                        </div>
                                    </div>
                                    <div className="card trial-status">
                                        <h4>Trial Status</h4>
                                        <div className='enquiries-text'>
                                            <h6 className="card-open">Trial Scheduled <br />0</h6>
                                            <h6 className="converted-open">Trial Completed <br />0</h6>
                                            <h6 className="lost-open">Converted <br />0</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='main-enquiry-dropdown'>
                                    <div>
                                        <label htmlFor="">Filter By
                                            <select className='dropdown-enquiries' id="id">
                                                <option value="days">Select</option>
                                                <option value="number">Last 7 Day</option>
                                                <option value="Month">Month Till End</option>
                                                <option value="Customer">Customer Date Range</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">Filter By
                                            <select className='dropdown-enquiries' id="id">
                                                <option value="days">Select</option>
                                                <option value="number">Last 7 Day</option>
                                                <option value="Month">Month Till End</option>
                                                <option value="Customer">Customer Date Range</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">Filter By
                                            <select className='dropdown-enquiries' id="id">
                                                <option value="days">Select</option>
                                                <option value="number">Last 7 Day</option>
                                                <option value="Month">Month Till End</option>
                                                <option value="Customer">Customer Date Range</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <label htmlFor="">Filter By
                                            <select className='dropdown-enquiries' id="id">
                                                <option value="days">Select</option>
                                                <option value="number">Last 7 Day</option>
                                                <option value="Month">Month Till End</option>
                                                <option value="Customer">Customer Date Range</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div>
                                        <a href="memshipequ.aspx?Archive=1" className='btn '>Export Enquiry</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enquiries