import React from 'react'

const MemberFitness = () => {
  return (
    <div>
      <div>
        <div>
          <div className='member-fitness-top'>
            <h5>
              Injuries and conditions
            </h5>
          </div>
          <div className='diseses'>
            <div>
              <div>
                <input type="radio" id="huey" />
                <label for="huey">1 day per week</label>
              </div>

              <div>
                <input type="radio" id="dewey" />
                <label for="dewey">Diabetes</label>
              </div>

              <div>
                <input type="radio" id="louie" />
                <label for="louie">Glaucoma</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Hip Pain</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Leg Pain</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Pacemaker</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Smoking</label>
              </div>
            </div>
            <div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Asthma/COPD</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Digestive Disorder</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Heart Disease/Condition</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Hip Replacement</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Metabolic Disorders (thyroid,kidney,etc)</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Parkinson's Disease</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Stroke</label>
              </div>

            </div>
            <div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Back Pain</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Dizziness/Vertigo</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Hernia/Diastasis Recti</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Injury Recent</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Multiple Sclerosis</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Pregnancy</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Surgery</label>
              </div>

            </div>
            <div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Bone Fracture</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Epilepsy</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">High Blood Pressure</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Joint Pain</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Neck Pain/Disorder</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Scoliosis</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">injury test</label>
              </div>

            </div>
            <div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Carpal Tunnel</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Foot Pain</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">High Cholestrol</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Knee Replacement</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Osteopenia/Osteoporosis</label>
              </div>
              <div>
                <input type="radio" id="louie" />
                <label for="louie">Shoulder Pain/Condition</label>
              </div>
            </div>
          </div>
        </div>
        <div className='member-fitenss-middle'>
          <div>
            <h5>
              Fitness Goals
            </h5>
          </div>
          <div className='member-fitness-goal'>
            <div>
              <label htmlFor="goal">Goal Type</label>
              <select name="food" id="foods">
                <option value="food">Select</option>
                <option value="yees">Lose Waight</option>
                <option value="no">Gain Weight</option>
                <option value="no">Bulid Muscles</option>
                <option value="no">Improve Over All Fitness</option>
                <option value="no">i don't know</option>
                <option value="no">Increase Flexibilty</option>
              </select>
            </div>
          </div>
          <div> Start Date
            <label htmlFor="">
              <input type="date" id="start" name="trip-start"
                value="2022-05-15"
                min="2000-01-01" max="2050-12-31" />
            </label>
          </div>
          <div> End Date
            <label htmlFor="">
              <input type="date" id="start" name="trip-start"
                value="2022-05-15"
                min="2000-01-01" max="2050-12-31" />
            </label>
          </div>
          <div className='Enquiry-flex'>
            <div>
              <p>Goal Remarks</p>
            </div>
            <div>
              <input placeholder="Write about Yourself" />
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
      </div>
    </div>
  )
}

export default MemberFitness