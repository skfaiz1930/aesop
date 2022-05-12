import React, { useEffect } from 'react'
import './navbar.css'

const Navbar = () => {
    let prevScrollpos = window.pageYOffset;

// useEffect(()=>{
//   const func =  
//         func()
// })
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";

      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
      if(prevScrollpos === 0){
        document.getElementById("navbar").style.display = "none";
      }else{
        document.getElementById("navbar").style.display = "block";
      }
    };

useEffect(()=>{
    if(prevScrollpos === 0){
        document.getElementById("navbar").style.display = "none";
      }else{
        document.getElementById("navbar").style.display = "block";
      }
},[])


    return (
        <>
        <div className='container-fluid pt-4 pb-3 px-5 shadow-sm' id='navbar' style={{backgroundColor:"#FFFEF2"}}>
            <div className='d-flex justify-content-between nav-div'>
                <div className='d-flex justify-content-evenly align-items-center first-flex'>
                <p className='link-p p-1'>Skin Care</p>
                <p className='link-p p-1'>Body & Hand</p>
                <p className='link-p p-1'>Hair</p>
                <p className='link-p p-1'>Fragnance</p>
                <p className='link-p p-1'>Home</p>
                <p className='link-p p-1'>Kits & Travel</p>
                <p className='link-p p-1'>Gifts</p>
                <p className='link-p shop-p'>Shop</p>
                <p className='link-p'>Read</p>
                <p className='link-p'>Stores</p>
                <p className='link-p fw-light'><i className="fa fa-search"></i></p>
                </div>
                <div className='d-flex first-flex'>
                <p className='link-p'>Login</p>
                <p className='link-p mx-3'>Cart</p>
                </div>

                <div div className='sec-flex'>
                <a href='' style={{textDecoration:"none",color:'black'}}><h1 className=''>Aesop</h1></a>
            </div>
            <div className='sec-flex'>
        <div className='d-flex'>
        <p className='link-p fw-light'><i className="fa fa-search"></i></p>
        <p className='link-p mx-4'>Cart</p>
        <p className='link-p'><i className="fa fa-bars"></i></p>
        
        </div>
        </div>

            </div>
        </div>
      
        <div className='container-fluid pt-4 pb-3 px-5 div-one' style={{backgroundColor:"#333333"}}>
            <div className='d-flex justify-content-between nav-div'>
                <div className='d-flex justify-content-evenly align-items-center'>
                <p className='text-light link-p p-1'>Skin Care</p>
                <p className='text-light link-p p-1'>Body & Hand</p>
                <p className='text-light link-p p-1'>Hair</p>
                <p className='text-light link-p p-1'>Fragnance</p>
                <p className='text-light link-p p-1'>Home</p>
                <p className='text-light link-p p-1'>Kits & Travel</p>
                <p className='text-light link-p p-1'>Gifts</p>
                <p className='text-light link-p shop-p'>Shop</p>
                <p className='text-light link-p'>Read</p>
                <p className='text-light link-p'>Stores</p>
                <p className='text-light link-p fw-light'><i className="fa fa-search"></i></p>
                </div>
                <div className='d-flex'>
                <p className='text-light link-p'>Login</p>
                <p className='text-light link-p mx-3'>Cart</p>
                </div>
            </div>
        </div>
        <div className='container-fluid pt-4 pb-3 px-5 div-two'>
        <div className='d-flex justify-content-between'>
            <div>
                <a href='' style={{textDecoration:"none",color:'white'}}><h1 className='text-light'>Aesop</h1></a>
            </div>
        <div className='d-flex'>
        <p className='text-light link-p fw-light'><i className="fa fa-search"></i></p>
        <p className='text-light link-p mx-4'>Cart</p>
        <p className='text-light link-p'><i className="fa fa-bars"></i></p>
        
        </div>
        </div>
        </div>
        </>
    )
}

export default Navbar
