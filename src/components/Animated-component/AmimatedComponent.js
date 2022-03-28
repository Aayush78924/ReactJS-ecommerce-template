import React,{useState,useEffect,useRef} from 'react'
import img from '../../assets/spice8.png'
import {Grow,Slide} from '@mui/material'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom' 
const AmimatedComponent = () => {
    const containerRef=useRef(null);
    const [counter,setCounter]=useState(0);
    const [checked,setChecked]=useState(true)
    useEffect(()=>{
        setInterval(()=>{setCounter(pre=>Number(pre)+Number(1));console.log(counter)},1000)
        
    },[])
    
  return (
      <div style={{width:'100%',padding:'50px'}}>
    <div style={{backgroundColor:'#0362fc', display:'flex',width:'100%',height:'600px',justifyContent:'space-between',alignItems:'center',padding:'25px'}}>
       
    {counter%10!=0?  
    <> 
    <div style={{display:'flex',width:'100%',height:'600px',justifyContent:'space-between',alignItems:'center',padding:'25px'}}>
    <Slide direction="left" in={counter} container={containerRef.current}>
    <div>
    <div style={{fontWeight:'500',width:'100%',fontSize:'50px',color:'white'}}>Buy your favourite Spices from us!!!!</div>
    <div style={{width:'100%'}}><Button as={Link} to='/shop'  variant="success">Start Shopping!!!!!!!</Button></div>
    <div style={{width:'100%'}}><Button as={Link} to='/signin' style={{borderRadius:'0',margin:'5px',height:'50px',width:'100px'}} variant="success">Sign Up</Button><Button as={Link} to='/signin' style={{borderRadius:'0',width:'100px',margin:'5px',height:'50px'}} variant="success">LogIn</Button>
    </div>
    </div>
    </Slide>
    <Grow in={counter} style={{ transformOrigin: '0 0 0' }}
    {...(counter ? { timeout: 1000 } : {})}>
        <img src={img} style={{heigth:'100%'}}></img>
    </Grow>
    </div>
    </> 
    :null}
    </div>
    </div>
  )
}

export default AmimatedComponent