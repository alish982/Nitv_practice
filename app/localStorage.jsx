'use client';
import React from 'react'

const LocalStorage = () => {
    const newLocal = localStorage.getItem("token_ho_yo")
    console.log(newLocal)
  return newLocal
  
}

export default LocalStorage