import React from 'react'
import YoactiveCover from './YoactiveCover'
import YoactiveFirst from './YoactiveFirst'

function YoactivCom() {
  return (
    <div>
      <div>
        <div>
          <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Yoactiv.com Profile</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cover Picture</button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> <YoactiveFirst/> </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <YoactiveCover/> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YoactivCom