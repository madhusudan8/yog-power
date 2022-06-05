import React from 'react'

function Staff() {
  return (
    <div>
      <>
        <div className='add-staff'>
          Add Staff
        </div>
        <div className='staff-main'>
          <div className='staff-top'>
            <div>
              <div className='image-personal'>
                <img src="https://backstage.yoactiv.com/gallery/proimg/noimg.png" alt="image is crashed" />
              </div>
              <div className='upload-image-member'>
                <label for="avatar"></label>
                <input type="file"
                  id="avatar" name="avatar"
                  accept="image/png, image/jpeg"></input>
              </div>
            </div>
          </div>
          <div className='staff-mid'>
            <div className='staff-mid'>
              <label>Full Name<span className='asterisks'>*</span></label>
              <input className='padding-left-70' type="text" placeholder=" First name and Last Name" />
              <div>
                <label for="phone">Contact number<span className='asterisks'>*</span>
                  <input className='padding-left-25'
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </label>
                <div>
                  <label>Email<span className='asterisks'>*</span>
                    <input className='padding-left-95' type="email" />
                  </label>
                </div>
              </div>
              Gender<span className='asterisks'>*</span><input type="radio" className='padding-left-85' id="male" name="Gender" value="Male" />
              <label for="Male">Male</label>
              <input  type="radio" id="Female" name="Gender" value="Female" />
              <label for="Female">Female</label> <br />
              Vaccinated : <input className='padding-left-55' type="radio" id="male" name="Gender" value="Male" />
              <label for="Male">Yes</label>
              <input type="radio" id="Female" name="Gender" value="Female" />
              <label for="Female">No</label><br />
              Login Access : <input className='padding-left-40' type="radio" id="male" name="Gender" value="Male" />
              <label for="Male">Yes</label>
              <input type="radio" id="Female" name="Gender" value="Female" />
              <label for="Female">No</label><br />
              Password :
              <input className='padding-left-70' type="password" placeholder="8 to 12 Character" name="password" required /><br />
              Upload Resume: <input className='padding-left-25' type="file" id="myFile" name="filename" /><br />
              Employee Category:<select className='padding-left-5' name="names" id="service">
                <option value="food">Select</option>
                <option value="">Employee</option>
                <option value="">Consulntant</option>
                <option value="">Freelancer</option>
              </select> <br />
              Payout Type:<select className='padding-left-55' name="names" id="service">
                <option value="food">Select</option>
                <option value="">Employee</option>
                <option value="">Consulntant</option>
                <option value="">Freelancer</option>
              </select><br />
              Grade:<select className='padding-left-90' name="names" id="service">
                <option value="food">Select</option>
                <option value="">Employee</option>
                <option value="">Consulntant</option>
                <option value="">Freelancer</option>
              </select>
            </div>
          </div>
          <div className='staff-buttom'>
            Date of Birth<input className='padding-left-30' type="date" id="birthday" name="birthday" /><br />
            Anniversary<input className='padding-left-40' type="date" id="Anniversary" name="Anniversary" /> <br />
            Salary <input className='padding-left-75' type="text" /><br />
            Job Designation<select className='padding-left-10' name="names" id="service">
              <option value="food">Select</option>
              <option value="">Employee</option>
              <option value="">Consulntant</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
            </select><br />
            Admin Rights<select className='padding-left-30' name="names" id="service">
              <option value="food">Select</option>
              <option value="">Employee</option>
              <option value="">Consulntant</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
              <option value="">Freelancer</option>
            </select><br />
            Date of Joining <input className='padding-left-10' type="Date" /><br />
            Attendance ID <input className='padding-left-20' type="text" /><br />
            PAN Card  <input className='padding-left-55' type="text" /><br />
            Account No <input className='padding-left-40' type="text" /><br />
            IFSC <input className='padding-left-90' type="text" /><br />
            HRMS ID <input className='padding-left-60' type="text" /><br />
          </div>
        </div>
      </>

    </div>
  )
}

export default Staff