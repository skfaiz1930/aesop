import React,{useState} from 'react'
import './topNotification.css'

const TopNotification = () => {

  const [show,setShow] = useState(false)

    return (
      <>
        <div className='container-fluid py-2 bg-dark' id='top'>
            <div className='d-flex justify-content-center'>
                <div className='top-notify'>
                <a style={{textDecoration:'none',fontSize:'14px'}} className='text-light fw-light' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                Enjoy complimentary carbon neutral shipping on orders over HK$400 &nbsp;&nbsp; &#43;
                </a>
                </div>
            </div>
            
  


<div class="offcanvas offcanvas-start w-50 top-notify-drawer p-5" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="text-end">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body p-5">
<p className=''>Shipping fees and delivery times</p>
  </div>
</div>
            
        </div>

<div className='action-div'>
<button onClick={()=>setShow(true)} className='btn action-btn fw-light shadow-sm'><i class="fa fa-comment-alt"></i></button>
</div>

{show === true  &&
<div className='action-content-div shadow'>
  <div className='card-cation card'>
    <div className='top-action-content pt-2'>
      <div className='d-flex justify-content-between px-3'>
        <div>
        </div>
        <div>
      <p className='text-secondary fw-bold'>Help</p>
      </div>
      <div onClick={()=>setShow(false)} style={{cursor:'pointer'}}>
      <p className='text-secondary fw-bold'><i class="fa fa-minus"></i></p>
    </div>
    </div>
    </div>
    <div className='botton-action-content px-4 py-2'>
        <div className='shadow action-cards p-3 mb-3'>
          <div className='d-flex align-items-center'>
            <h3 className='text-info'><i className="fa fa-phone-alt"></i></h3>
            <h6 className='fw-light px-3'>Call Us</h6>
          </div>
        </div>

        <div className='shadow action-cards p-3 mb-3'>
          <div className='d-flex align-items-center'>
            <h3 className='text-info'><i class="fa fa-comment-alt"></i></h3>
            <h6 className='fw-light px-3'>Live Assistance</h6>
          </div>
        </div>

        <div className='shadow action-cards p-3 mb-3'>
          <div className='d-flex align-items-center'>
            <h3 className='text-info'><i class="fa fa-envelope-open-text"></i></h3>
            <h6 className='fw-light px-3'>Send us a message</h6>
          </div>
        </div>

    </div>
  </div>
</div>
}
        </>
    )
}

export default TopNotification
