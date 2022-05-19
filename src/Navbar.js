import React from 'react'
import bookmarkIcon from './IMAGES/logo-bookmark.svg'

const Navbar = () => {
  return (
    <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand mx-5" href="#"> <img src={bookmarkIcon} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">FEATURES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PRICING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

export default Navbar