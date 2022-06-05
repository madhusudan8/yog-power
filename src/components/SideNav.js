import React, { useState } from 'react'
import '../components/scss/main.scss'
import { Link } from 'react-router-dom'

const SideNav = () => {
    const [sidenavhide, setSidenavHide] = useState(true)
    const [trainingnavhide, setTrainingNavHide] = useState(true)
    return (
        <>
            <div className="sidenav-main">
                <div className='Sidenabvar'>
                    <div className='dashbord'>
                        <i class="fa-solid fa-gauge fa-2x" ></i>
                        <Link to="/">
                            <p>Dashbord</p>
                        </Link>
                    </div>
                    <div className='enquiries'>
                        <i class="fa-solid fa-magnet fa-2x"></i>
                        <Link to="/Enquiries">
                            <p>Enquiry</p>
                        </Link>
                    </div>
                    <div className='marketing' onClick={() => (sidenavhide ? setSidenavHide(false) : setSidenavHide(true))}>
                        <i class="fa-solid fa-comments fa-2x"></i>
                        <p>Marketing</p>
                    </div>
                    <div className='clients'>
                        <i class="fa-solid fa-people-roof fa-2x"></i>
                        <p>Clients</p>
                    </div>
                    <div className='training' onClick={() => (trainingnavhide ? setTrainingNavHide(false) : setTrainingNavHide(true))}>
                        <i class="fa-solid fa-bolt-lightning fa-2x"></i>
                        <p>Training</p>
                    </div>
                    <div className='staff'>
                        <i class="fa-solid fa-address-book fa-2x"></i>
                        <p>staff</p>
                    </div>
                    <div className='report'>
                        <i class="fa-solid fa-calendar-days fa-2x"></i>
                        <p>Report</p>
                    </div>
                    <div className='setup'>
                        <i class="fa-solid fa-gear fa-2x"></i>
                        <p>Setup</p>
                    </div>

                </div>
                <div className={sidenavhide ? 'marketing-side-navbar d-none' : 'marketing-side-navbar'}>
                    <h6>Marketing</h6>
                    <div>
                        <form id="form">
                            <input type="search" id="query" name="q" placeholder="Search" />
                        </form>
                    </div>
                    <div>
                        <div className="accordion sidenav-dropdown" id="accordionPanelsStayOpenExample" >
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Communication
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <ul>
                                            <Link to="/Email">
                                                <h6>Email</h6>
                                            </Link>
                                            <Link to="/Sms">
                                                <h6>SMS</h6>
                                            </Link>
                                            <Link to="/PushNotification">
                                                <h6>Push Notification</h6>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Engagement
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <ul>
                                            <Link to="/Offers">
                                                <h6> Offers</h6>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Data
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        <ul>
                                            <Link to="/UnqualifieData">
                                                <h6> Unqualified Data</h6>
                                            </Link>
                                            <Link to="/CustomerMailList">
                                                <h6>Customer Mail List</h6>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        Promotion
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div class="accordion-body">
                                        <ul>
                                            <Link to="/CustomerReviews">
                                                <h6>Customer Reviews</h6>
                                            </Link>
                                            <Link to="/YoactivCom">
                                                <h6>Yoactiv.Com Profilet</h6>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={trainingnavhide ? 'Training-sidenav-dropdown d-none' : 'Training-sidenav-dropdown'}>
                    <div>
                        <p><strong>Training</strong></p>
                    </div>
                    <div>
                        <form id="form">
                            <input type="search" id="query" name="q" placeholder="Search" />
                        </form>
                    </div>
                    <div>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Training
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <Link to="/MyptDashbord">
                                                <li><h6>My PT Dashbord</h6></li>
                                            </Link>
                                            <Link to="/ExcerciseLibrary">
                                            <li><h6>Excersize Library</h6></li>
                                            </Link>
                                            <Link to="/MealPlanTemplate">
                                            <li><h6>Meal Plan Templates</h6></li>
                                            </Link>
                                            <Link to="/AssesmentTemplate">
                                            <li><h6>Assesment Templates</h6></li>
                                            </Link>        
                                        </ul>
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

export default SideNav