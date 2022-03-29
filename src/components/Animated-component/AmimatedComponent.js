import React,{useState,useEffect,useRef} from 'react'
import img from '../../assets/spice8.png'
import {Grow,Slide} from '@mui/material'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
import styled from 'styled-components'
const AmimatedComponent = () => {
    const containerRef=useRef(null);
    const [counter,setCounter]=useState(0);
    const [checked,setChecked]=useState(true)
    useEffect(()=>{
        setInterval(()=>{setCounter(pre=>Number(pre)+Number(1));console.log(counter)},1000)
        
    },[])
    
  return (
    <div style={{width:'100vw',display:'flex',justifyContent: 'center',padding:'10px'}}>
      <center>
    <Container style={{marginTop:"10px",marginLeft:'10px'}}>
      {counter%10!=0?
      <div>
      <Slide direction="left" in={counter} container={containerRef.current}>
      <div>
      <div style={{fontWeight:'500',width:'100%',fontSize:'3em',color:'white'}}>Buy your favourite Spices from us!!!!</div>
      <div style={{width:'100%'}}><Button as={Link} style={{margin:'5px'}} to='/shop'  variant="success">Start Shopping!!!!!!!</Button></div>
      <div style={{width:'100%'}}><Button as={Link} style={{margin:'5px'}} to='/signin'  variant="success">Sign Up</Button><Button as={Link} style={{margin:'5px'}} to='/signin' variant="success">LogIn</Button>
      </div>
      </div>
      </Slide></div>:null
        } 
      {counter%10!=0?
      <div><Grow in={counter} style={{ transformOrigin: '0 0 0' }}
      {...(counter ? { timeout: 1000 } : {})}>
          <Img src={img} style={{height:'300px'}}></Img>
      </Grow>
      </div>
      :<div style={{height:'300px'}}></div>}
    </Container>
    </center>
    </div>



  //     <div style={{width:'100%',padding:'50px'}}>
  //   <Container>
       
  //   {counter%10!=0?  
  //   <Slide direction="left" in={counter} container={containerRef.current}>
  //   <div>
  //   <div style={{fontWeight:'500',width:'100%',fontSize:'50px',color:'white'}}>Buy your favourite Spices from us!!!!</div>
  //   <div style={{width:'100%'}}><Button as={Link} to='/shop'  variant="success">Start Shopping!!!!!!!</Button></div>
  //   <div style={{width:'100%'}}><Button as={Link} to='/signin' style={{borderRadius:'0',margin:'5px',height:'50px',width:'100px'}} variant="success">Sign Up</Button><Button as={Link} to='/signin' style={{borderRadius:'0',width:'100px',margin:'5px',height:'50px'}} variant="success">LogIn</Button>
  //   </div>
  //   </div>
  //   </Slide>
   
  //   :null}

  //   {counter%10!=0?
  //   <div><Grow in={counter} style={{ transformOrigin: '0 0 0' }}
  //   {...(counter ? { timeout: 1000 } : {})}>
  //       <img src={img}></img>
  //   </Grow></div>:null}
  //   </Container>
  //   </div>
  )
}

export default AmimatedComponent

const Container=styled.div`
background-color:#0362fc;
flex-wrap:wrap;
display:flex;
width:95vw;
height:600px;
justify-content:space-between;
align-items:center;
padding:10px;


@media (max-width: 500px) {
  height:800px;
  flex-direction: column;
  justify-content:center;
}
}
`

const Img=styled.img`
@media (max-width: 500px) {
  height:200px;
  width:200px

`