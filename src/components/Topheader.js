import React from 'react'

function Topheader() {
  return (
    <div className='top-Header'>
      <div className='Right-header'>
        <div>
          Home
        </div>
        <div>
          &nbsp;&nbsp; /
        </div>
        <div>
          &nbsp;  Dashboard
        </div>

      </div>

      <div className='Left-header'>
        <div>
          Snapshot
        </div>
        <div>
          &nbsp;&nbsp; Follow-ups
        </div>
        <div>
          &nbsp;  Leaderboards
        </div>
      </div>
    </div>
  )
}

export default Topheader