import React from 'react'
import '../components/scss/main.scss'

const SideNav = () => {
    return (
        <div className='Sidenabvar'>
            <div className='dashbord'>
                <i class="fa-solid fa-gauge fa-2x" ></i> 
                <p>Dashbord</p>
            </div>
            <div className='enquiries'>
                <i class="fa-solid fa-magnet fa-2x"></i>
                <p>Enquirires</p>
            </div>
            <div className='marketing'>
                <i class="fa-solid fa-comments fa-2x"></i>
                <p>Marketing</p>
            </div>
            <div className='clients'>
                <i class="fa-solid fa-people-roof fa-2x"></i>
                <p>Clients</p>
            </div>
            <div className='training'>
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
    )
}

export default SideNav