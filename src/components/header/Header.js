import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='container-fluid header px-5'>
            <div className='row py-5 pt-5 header-desc-div'>
            <div className='col-md-2 mt-5'>
            <h1 className='text-light fw-light'>Aesop<sapn style={{fontSize:"20px"}}>&copy;</sapn></h1>
            </div>
            <div className='col-md-4 mt-5'>
            <p className='text-light fw-bold'>Seven aromas, imbued with intrigue</p>
            <h2 className='text-light mb-3'>Fragrances that linger on body and mind</h2>
            <p className='text-light mb-5'>Acting as enveloping layers that inspirit the self and senses, our eaux de parfum distill a nuanced and nonconformist approach to fragrance creation.</p>

            <button className='btn btn-a w-75'><div className='d-flex justify-content-between align-items-center pt-2 px-3'>
                <p className='fw-bold'>Discover Fragnance</p>
                <p><i class="fa fa-arrow-right"></i></p>
                </div></button>
            </div>
            </div>
            
        </div>
    )
}

export default Header
