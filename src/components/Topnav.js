import React from 'react'

const Topnav = () => {
  return (
    <div className='topnav'>
      <div className='topnav-left'>
        <div>
          <img className='img' src="https://yoactiv.s3.amazonaws.com/gallery/logo/109112021030311.jpg" />
          <p className='indira'>indiranagar</p>
        </div>
        <div className='dropdown'>
          <select className='memeber' id="id">
            <option value="Mobile number">Member Name</option>
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
          <button className='btn'>GO</button>
        </div>
      </div>
      <div className='topnav-right'>
        <div className='Top-Icon'>
        <img src="img/book.svg"/>
        </div>
        <div className='Top-Icon'>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className='Top-Icon'>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className='Top-Icon'>
          <i class="fa-solid fa-plus"></i>
        </div>

        <div className='Top-Icon circle'>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
    </div>
  )
}

export default Topnav