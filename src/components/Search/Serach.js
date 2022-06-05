import React from 'react'

function Serach() {
    return (
        <div>
            <div className='search-top'>
                <p>Search</p>
            </div>
            <div className='search-main'>
                <div className='search-form'>
                    <label htmlFor="">
                        <input className='padding-left-10' type="text" placeholder='What are you looking for?' />
                    </label>
                </div>
                <div>
                    <p>Search Client Name, Email ID, Phone Number,Member ID, Attendance ID or Club ID</p>
                </div>
            </div>
        </div>
    )
}

export default Serach