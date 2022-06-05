import React from 'react'

function SupportRequest() {
    return (
        <div>
            <div className='support-request'>
                Add support request
            </div>
            <div className='support-main'>
                <div>
                    Mobile <span className='asterisks'>*</span>
                    <label htmlFor="">
                        : <input type="numbers" />
                    </label>
                    <div className='btn btn-go'>
                        GO
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportRequest