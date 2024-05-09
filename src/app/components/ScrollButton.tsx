"use client"
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
import { useEffect } from 'react'
 
const ScrollButton = () =>{
 
  const [visible, setVisible] = useState(false)
 

  
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 700){
      setVisible(true)
    } 
    else if (scrolled <= 700){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };

 
  useEffect(() => {
    // esto sólo se ejecuta en cliente
   
    toggleVisible();
    window.addEventListener('scroll', toggleVisible);
    
    return () => window.removeEventListener('scroll', toggleVisible);
  }, [])
    
 
  
   
  
  
  return (
    
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
  
}
  
export default ScrollButton;