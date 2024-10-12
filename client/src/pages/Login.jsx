import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

function Login() {
  return (
    <div>
         <Link to='/userlogin' className="lg:border-[3px] lg:border-black lg:p-2">
              User Login
              </Link>
              <Link to='/adminlogin' className="lg:border-[3px] lg:border-black lg:p-2">
              Admin Login
              </Link>
      
    </div>
  )
}

export default Login
