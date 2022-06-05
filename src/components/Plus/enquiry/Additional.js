import React from 'react'

const Additional = () => {
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
                <div>
                    <p>
                        2. Where do you stay?
                    </p>
                    <form id="form">
                        <input type="search" id="query" name="q" placeholder="Locality" />
                    </form>
                </div>
                <div>
                    <label for="service">Are you a Vegeterian</label>
                    <br /><br />
                        <select name="names" id="service">
                            <option value="food">Food type</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
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
                    <button className='btn margin-btn'>SAVE</button>
                </div>
            </div>
        </>
    )
}

export default Additional