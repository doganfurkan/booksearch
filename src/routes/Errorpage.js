import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <div style={{textAlign:"center", padding:"2rem"}}>There has been an error. Click down below to return back to the homepage. <br /> <br /> <Link to={"/"}>Go Back to Home</Link></div>
  )
}
