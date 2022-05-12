import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import TopNotification from './components/topnotification/TopNotification';
import Body from './pages/body/Body';

function App() {
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false);
    },3000)
  },[]);

  return (
    loader === true ? 
    <>
    <div className='d-flex justify-content-center' style={{marginTop:"30vh"}}>
    <div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary mx-3" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    </div>
    </>
    :
    <>
<TopNotification/>
<Navbar/>
<Header/>
<Body/>
</>
  );
}

export default App;
