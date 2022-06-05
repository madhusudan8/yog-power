import React from 'react'

const MemberProfessional = () => {
  return (
    <>
      <div>
        <h6>
          Professional Information Primary Contact
        </h6>
        <div className="proffesional-member">
          <div>
            <label>Occupation :
              <input type="text" />
            </label>
          </div>
          <div>
            <label>Company Name :
              <input type="text" />
            </label>
          </div>
          <div>
            <label>Official Email :
              <input type="text" />
            </label>
          </div>
          <div>
            <label>Contact Number :
              <input type="text" />
            </label>
          </div>
        </div>
        <div className='margin-placeholder'>
          <div className='btn margin-btwn-btns font-fam'>
            Add member & Bill
          </div>
          <div className='btn margin-btwn-btns font-fam'>
            Add To Transfer
          </div>
          <div className='btn margin-btwn-btns font-fam'>
            Sell Product
          </div>
          <div className='btn margin-btwn-btns font-fam'>
            Cancel
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberProfessional