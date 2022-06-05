import React from 'react'
import MemberAdditional from './Plus/member/MemberAdditional'
import MemberPersonal from './Plus/member/MemberPersonal'
import MemberFitness from './Plus/member/MemberFitness'
import MemberProfessional from './Plus/member/MemberProfessional'

const Member = () => {
    return (
        <div>
            <div className="top-navbar">
                <h3>Add Member</h3>
            </div>
            <div>
                <div>
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Personal Information</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profssional Information</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Additional Details</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-fitness" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Fitness Profile</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                           <MemberPersonal/>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <MemberProfessional/>
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <MemberAdditional/>
                        </div>
                        <div class="tab-pane fade" id="nav-fitness" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <MemberFitness/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member