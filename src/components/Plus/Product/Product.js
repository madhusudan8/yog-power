import React from 'react'

function Product() {
    return (
        <>
            <div className='add-product'>
                <h5>Add Product</h5>
            </div>
            <div className='product-main'>
                <div className='product-left'>
                    <div>
                        <div>
                            <h5>Product Details</h5>
                        </div>
                        <label htmlFor="">Catagory Type
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">Fitness</option>
                                <option value="">Tennis</option>
                                <option value="">Yoga</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Sub Catagory Type
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">Fitness</option>
                                <option value="">Tennis</option>
                                <option value="">Yoga</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Brand Name
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">Fitness</option>
                                <option value="">Tennis</option>
                                <option value="">Yoga</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label htmlFor=""> Product Name
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor=""> Description
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor=""> SKU
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor=""> HSN Product
                            <input type="text" />
                        </label>
                    </div>
                </div>
                <div className='product-right'>
                    <h5>
                        Retail Sales
                    </h5>
                    <div>
                        <label htmlFor=""> Retail Price
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Tax
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">GST</option>
                                <option value="">Composit</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <h6>
                            Stock
                        </h6>
                    </div>
                    <div>
                        <label htmlFor="">Cost/Purchse <br />Price
                            <input type="text" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            Set stock <br /> as unlimited
                            <input type="checkbox" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">Stock
                            <input type="text" /></label>
                    </div>
                    <div>
                        <label htmlFor="">Supplier
                            <select name="" id="">
                                <option value="">Select</option>
                                <option value="">Test</option>
                                <option value="">Test CL</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Product