import React from 'react'

function Expense() {
    return (
        <div>
            <div className='expense-top'>
                Add Expense
            </div>
            <div className='expense-mid'>
                <p>
                    DEBIT VOUCHER
                </p>
            </div>
            <div className="expense-main">
                <div className='expense-right'>
                    <div>
                        <img src="https://yoactiv.s3.amazonaws.com/gallery/logo/109112021030311.jpg" alt="crashed" />
                        <div className="expense-image">
                            Indiranagar
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Catagory <span>*</span>
                            <select name="" id="">
                                <option value="">Select Catagory</option>
                                <option value="">Travel</option>
                                <option value="">Rent</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Paid to <span>*</span>
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Towards <span>*</span>
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            $ <span>*</span>
                            <input type="text" />
                        </label>
                        <br /> words in Rupee
                    </div>
                    <div className='upload-image-expense'>
                        <label for="avatar"></label>
                        <input type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg"></input>
                    </div>

                </div>
                <div className='expense-left'>
                    <div className='expense-left-top'>
                        <div>
                            Voucher Date <span>*</span>
                            <input type="date" id="start" name="trip-start"
                                placeholder="Date of Birth"
                                min="2000-01-01" max="2050-12-31" />
                        </div>
                        <div>
                            <label htmlFor="">No
                                <input type="text" /></label>
                        </div>
                    </div >
                    <div className='expense-left-buttom'>
                        <div>
                            <label htmlFor="">
                                Source
                                <select name="" id="">
                                    <option value="">Select Source</option>
                                    <option value="">Office Cash</option>
                                    <option value="">Bank Account</option>
                                    <option value="">Reimbursable</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                Mode Of Payment
                                <select name="" id="">
                                    <option value="">Cash</option>
                                    <option value="">Checq No</option>
                                    <option value="">Card</option>
                                    <option value="">Account Number</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense