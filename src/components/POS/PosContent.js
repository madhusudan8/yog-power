import React from 'react'

function PosContent() {
  return (
    <div>
      <div>
        <div className='pos-main'>
          <form id="form">
            <input className='placeholder-pos'  type="text" maxlength="240" placeholder="Search Product" id="txtsc" class="form-control" style={{ width:700 }} />
          </form>
          <p> Currently No Results Found</p>
        </div>
      </div>
    </div>
  )
}

export default PosContent