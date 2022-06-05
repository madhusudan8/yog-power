import React, { useState } from 'react'
import '../components/scss/main.scss'
import { Link } from 'react-router-dom'

const Topnav = () => {
  const [plushide, setPlusHide] = useState(true)
  const [bookhide, setBookHide] = useState(true)
  const [accounthide, setAccountHide] = useState(true)

  return (
    <>
      <div className='topnav'>
        <div className='topnav-left'>
          <div>
            <img className='img' src="https://yoactiv.s3.amazonaws.com/gallery/logo/109112021030311.jpg" alt='logo' />
            <p className='indira'>indiranagar</p>
          </div>
          <div className='dropdown'>
            <select className='memeber' id="id">

              <option value="Mobile number"><h6>Member Name</h6></option>
              <option value="Email">Member Email</option>
              <option value="Member">Member ID</option>
              <option value="Attendance">Attendance ID</option>
              <option value="Club">Club ID</option>
            </select>
          </div>
          <div className='search-box'>
            <input className='search' type="text" placeholder="Search.." name="search" />
          </div>
          <div>
            <button className='btn btn-go'>GO</button>
          </div>
        </div>
        <div className='topnav-right'>
          <div className='Top-Icon' >
            <Link to={"/Search"}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
          <div className='Top-Icon' onClick={() => (plushide ? setPlusHide(false) : setPlusHide(true))}>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className='Top-Icon' onClick={() => (bookhide ? setBookHide(false) : setBookHide(true))}>
            <i class="fa-solid fa-book-open"></i>
          </div>
          <div className='Top-Icon'>
            <i class="fa-solid fa-calendar-days"></i>
          </div>
          <div className='Top-Icon'>
            <Link to={"/Pos"}>
              <i class="fa-solid fa-p"></i>
            </Link>
          </div>
          <div className='Top-Icon'>
            <Link to={"/Qs"}>
              <i class="fa-solid fa-q"></i>
            </Link>
          </div>
          <div className='Top-Icon circle' onClick={() => (accounthide ? setAccountHide(false) : setAccountHide(true))}>
            <i class="fa-solid fa-user"></i>
          </div>
        </div>
        <div className={plushide ? 'plus-dropdown d-none' : 'plus-dropdown'} >
          <ul>
            <li >
              <Link to="/Enquiry">
                Enquiry
              </Link>
            </li>
            <li>
              <Link to="/Member">
                Member
              </Link>
            </li>
            <li>
              <Link to="/Staff">
                Staff
              </Link>
            </li>
            <li>
              <Link to="/Product">
                Product
              </Link>
            </li>
            <li>
              <Link to="/Expense">
                Expense
              </Link>
            </li>
            <li>
              Invoice
            </li>
            <li>
              <Link to="/SupportRequest">
                SupportRequest
              </Link>
            </li>
          </ul>
        </div>
        <div className={bookhide ? 'book-dropdown d-none' : 'book-dropdown'}>
          <ul>
            <li>
              <Link to="/Turf">
                Turf/Venue
              </Link>
            </li>
            <li>
              <Link to="/Class">
                Class
              </Link>
            </li>
            <li>
              <Link to="/Event">
                Event
              </Link>
            </li>
          </ul>
        </div>
        <div className={accounthide ? 'account-dropdown d-none' : 'account-dropdown'}>
          <ul>
            <li>
            <Link to="/AdminProfile">
            Admin Profile
              </Link>
            </li>
            <li>
            <Link to="/AccountPlan">
            Account Plan
              </Link>
            </li>
            <li>
            <Link to="/CentralPannle">
            Central Panel
              </Link>
            </li>
            <li>
            <Link to="/AddBranch">
            Add a Branch
              </Link>
            </li>
            <li>
            <Link to="/LogOut">
            Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Topnav