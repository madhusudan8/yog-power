import React from 'react'

const MemberAdditional = () => {
  return (
    <>
      <div>
        <div>
          <p>1. Have you undergone any surgery?</p>
          <form>
            <div className="radio">
              <label>
                <input type="radio" value="option1" checked={true} />
                Yes
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="option2" />
                No
              </label>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p>
          2. Where do you stay?
        </p>
        <form id="form">
          <input type="search" id="query" name="q" placeholder="Locality" />
        </form>
      </div>
      <div>
        <div>
          <p>Write about Yourself</p>
        </div>
        <div>
          <input placeholder="Write about Yourself" />
        </div>
      </div>
      <div>
        <div>
          <p>
            3. Are you a vegetarian?</p>
        </div>
        <div>
          <select name="food" id="foods">
            <option value="food">Food Type</option>
            <option value="yees">Yes</option>
            <option value="no">NO</option>

          </select>
        </div>
        <div className='dropdown-age '>
          <p>
            4. How old are you?
          </p>
          <ul>
            <li><label for="muhRadio1"><input type="radio" name="muhRadio" value="" /> 18-25</label></li>
            <li><label for="muhRadio2"><input type="radio" name="muhRadio" value="" /> 26-35</label></li>
            <li><label for="muhRadio3"><input type="radio" name="muhRadio" value="" /> 36-45</label></li>
            <li><label for="muhRadio4"><input type="radio" name="muhRadio" value="" /> 45+</label></li>
          </ul>
        </div>
        <div>
          <div>
            <p>
              6.
              Have you practiced Yoga or any form of Fitness activity before?
            </p>
          </div>
          <div>
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" checked={true} />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
                  No
                </label>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p>7.Blood Level</p>
          <select name="number" id="value">
            <option value="value">100</option>
            <option value="value">200</option>
          </select>
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

export default MemberAdditional