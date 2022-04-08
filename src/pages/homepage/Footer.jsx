import React from 'react'
import './Footer.css'
import styled from 'styled-components'
const Footer = () => {
  return (
      <>
        <div  style={{display:'flex',width:'100vw',fontSize:'23px',backgroundColor:'bisque',flexDirection: 'column',padding:'25px',flexWrap:'wrap'}}>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',padding:'5px'}}>
            <Container>
                <b>E-Z Masala</b>
                    <div style={{wordWrap:'wrap'}}>
                    EZ-Masala has revolutionized the current way of 
                    cooking in the world of Indian kitchens. For this, no long-life 
                    expertise is required to make vegetables in the kitchen. You become 
                    a super chef of your home on your own for a lifetime just by watching 
                    the video once for all you have to make.
                    </div>
            </Container>
            <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'start'}}>
                <b>Contact Details:</b>
                <div>Mobile<br></br> 9910 387 487</div>
                <div>Email:<br></br>ezmasala.it@gmail.com</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'start',padding:'5px'}}>
                <b>Legal Details:</b>
                <div>Privacy</div>
                <div>Tearms</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'150px',alignItems:'start',justifyContent:'start'}}>
                <b>Location:</b>
                <div style={{wordWrap:'wrap'}}>B1-337, First Floor, Janakpuri
                New Delhi - 110058</div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>Stay Connected</div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <a href="https://www.facebook.com/ezmasala" target="_blank" class="socialMediaLogo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" color="black" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path></svg> </a>
        <a href="https://www.linkedin.com/in/ezmasala" target="_blank" class="socialMediaLogo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="black" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg> </a>
        <a href="https://www.instagram.com/ez-masala" target="_blank" class="socialMediaLogo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" color="black" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM11 2.5c0-0.275 0.225-0.5 0.5-0.5h2c0.275 0 0.5 0.225 0.5 0.5v2c0 0.275-0.225 0.5-0.5 0.5h-2c-0.275 0-0.5-0.225-0.5-0.5v-2zM8 5c1.656 0 3 1.344 3 3s-1.344 3-3 3c-1.656 0-3-1.344-3-3s1.344-3 3-3zM14 13.5v0c0 0.275-0.225 0.5-0.5 0.5h-11c-0.275 0-0.5-0.225-0.5-0.5v0-6.5h1.1c-0.066 0.322-0.1 0.656-0.1 1 0 2.762 2.237 5 5 5s5-2.238 5-5c0-0.344-0.034-0.678-0.1-1h1.1v6.5z"></path></svg> </a>
        <a href="https://www.pinterest.com/ezmasala" target="_blank" class="socialMediaLogo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="black" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg> </a>
        <a href="https://www.youtube.com/channel/ezmasala" target="_blank" class="socialMediaLogo"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" color="black" size="25" height="25" width="25" xmlns="http://www.w3.org/2000/svg" style={{color: 'black'}}><path d="M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z"></path></svg> </a>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        Copyright © 
        </div>

    </div>
    </>
  )
}

export default Footer

const Container=styled.div`
width:500px;
@media (max-width: 500px) {
    width:300px;
  }
`