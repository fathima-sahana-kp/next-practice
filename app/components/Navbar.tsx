


import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="nav-overflow bg-black text-uppercase  p-4" data-bs-toggle="nav-overflow">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link text-white" aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">features</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">Analytics</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">Reports</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" href="#">Help</Link>
          </li>
        </ul>
      </div>
</div>
  )
}

export default Navbar