import React from 'react'

const Content = () => {
  return (
    <>

      <div className='dashbord-main'>
        <div className='dashbord-left'>
          <div className='top-main'>
            <div className='today'>
              <select className='dropdown-main' id="id">
                <option value="days">Today</option>
                <option value="number">Last 7 Day</option>
                <option value="Month">Month Till End</option>
                <option value="Customer">Customer Date Range</option>
              </select>
            </div>
            <div className>
              <button className='btn'>GO</button>
            </div>
          </div>
          <div className='buttom-main'>
            <div className='div1'>
              <ul>
                <li>SALES</li>
                <li>1400</li>
                <li>VIEW MORE.</li>
              </ul>
            </div>
            <div className='div2'>
              <ul>
                <li>PAYMENTS COLLECTED</li>
                <li>1400</li>
                <li>VIEW MORE</li>
              </ul>
            </div>
            <div className='div3'>
              <ul>
                <li>PAYMENTS PENDING</li>
                <li>0</li>
                <li>VIEW MORE</li>
              </ul>

            </div>
          </div>
          <div className='buttom-main2'>
            <div className='div4'>
              <ul>
                <li className='border-bottom'>NEW CLIENT(S)</li>
                <li className='border-bottom'>1</li>
                <li>VIEW MORE</li>
              </ul>
            </div>
            <div className='div5'>
              <ul>
                <li className='border-bottom'>RENEWALS</li>
                <li className='border-bottom'>0</li>
                <li>VIEW MORE</li>
              </ul>
            </div>
            <div className='div6'>
              <ul>
                <li className='border-bottom'>CHECK-INS</li>
                <li className='border-bottom'>1</li>
                <li>VIEW MORE</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='dashbord-right'>
          <div className='paylink'>
            SEND PAY LINK
          </div>
          <div className='dashbord-right-table'>
            <table>
              <tr>
                <th>Summary</th>
              </tr>
              <br />
              <i class="fa-solid fa-chevron-left"></i>
              <i class="fa-solid fa-chevron-right"></i>

              <tr>
                <td>Follow-ups</td>
              </tr>
              <tr>
                <td>Appointments</td>
              </tr>
              <tr>
                <td>Classes</td>
              </tr>
              <tr>
                <td>Service expiry</td>
              </tr>
              <tr>
                <td>PT expiry</td>
              </tr>
              <tr>
                <td>Upgrades</td>
              </tr>
              <tr>
                <td>Client birthdays</td>
              </tr>
              <tr>
                <td>Client Anniversaries</td>
              </tr>
              <tr>
                <td>Staff birthdays</td>
              </tr>
              <tr>
                <td>Staff Anniversaries</td>
              </tr>


            </table>


          </div>

        </div>
        <div />
      </div>
      <div className='dashboard-footer'>


        <div className='Classes'>
          <div className='class1'>
            Classes
          </div>
          <div className='gym'>
            Gym Floor
          </div>

        </div>

        <div className='BOOKINGS'>

          BOOKINGS
          <div className='same'>

          </div>
          <div className='same'>

          </div>

        </div>
        <div className='RESERVATIONS'>
          RESERVATIONS
          <div className='same'>

          </div>
          <div className='same'>

          </div>
        </div>
        <div className='CANCELLATIONS'>
          CANCELLATIONS
          <div className='same'>

          </div>
          <div className='same'>

          </div>
        </div>
        <div className='views'>
        <div className='view'>
          view
        </div>
        <div className='view'>
          view
        </div>
        </div>



      </div>
    </>
  )
}

export default Content