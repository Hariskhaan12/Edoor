import React from 'react'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function Navbar() {
  let Navigate=useNavigate();

  let loginbtnStyle = {
      backgroundColor: "blue",
      color: "#ffff",
      padding: "11px",
      borderRadius: "4px",
      width:"fit-content",
      fontWeight: "Bold",
      borderColor:"transparent",
      marginRight:"10px",
     cursor:"pointer"
    };

    let SignUpbtnStyle = {
      backgroundColor: "lightgreen",
      color: "black",
      padding: "11px",
      borderRadius: "4px",
      borderColor: "transparent",
      fontWeight: "Bold",
      cursor: "pointer",
    };

 
 let LoginFunc=()=>{
   Navigate("/Auth");
 }

 let SignUpFunc=()=>{
  Navigate("/Auth");
 }



  
  return (
    <div >
      <header >
        <div class="nav-container">
          <nav>
            <div class="nav-brand">
              <div class="hamburger-menu-container">
                <div class="hamburger-menu">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
                <div class="nav-dropdown-menu">
                  <a href="#" class="current-link">
                    Home
                  </a>
                  <h5>Public</h5>
                  <ul class="nav-ul">
                    <li class="nav-item">
                      <i class="fas fa-globe-europe"></i>
                      <a href="#" class="nav-link">
                        Stack Overflow
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Tags
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Users
                      </a>
                    </li>
                  </ul>
                  <h5>Find a Job</h5>
                  <ul class="nav-ul">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Jobs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Companies
                      </a>
                    </li>
                  </ul>
                  <h5>
                    Teams <a href="#">What's this ?</a>
                  </h5>
                  <a href="#" class="nav-link">
                    <i class="fas fa-briefcase"></i>
                    <span>Free 30 Day Trial</span>
                  </a>
                </div>
              </div>

              <a href="#" class="nav-icon">
                <i class="fab fa-stack-overflow"></i>
                <div class="nav-icon-text">
                  E'<span class="nav-bold-text">Door</span>
                </div>
              </a>
            </div>
            <div class="nav-base-links">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">For Teams</a>
                </li>
              </ul>
            </div>
            <div class="nav-search">
              <div class="search-container">
                <i class="fas fa-search"></i>
                <input type="text" id="" placeholder="Search..." />
              </div>
              <div class="search-hints">
                <div class="search-arrow-up"></div>
                <div class="search-hint-body">
                  <div class="hints-grid-column">
                    <div class="hint-text">
                      <span>[tag] </span> search within a tag
                    </div>
                    <div class="hint-text">
                      <span>user:1234 </span> search by author
                    </div>
                    <div class="hint-text">
                      <span>"words here"</span> exact phrase{" "}
                    </div>
                  </div>
                  <div class="hints-grid-column">
                    <div class="hint-text">
                      <span>answers:0</span> unanswered questions
                    </div>
                    <div class="hint-text">
                      <span> score:3 </span> posts with a 3+ score
                    </div>
                    <div class="hint-text">
                      <span>isaccepted:yes </span> search within status
                    </div>
                  </div>
                </div>
                <div class="search-hint-footer">
                  <a href="#" class="btn">
                    Ask a question
                  </a>
                  <a href="#" class="search-help">
                    Search help
                  </a>
                </div>
              </div>
            </div>
            <div class="nav-right-buttons">
              <div class="search-btn">
                <i class="fas fa-search"></i>
              </div>
              {/* 
              <a href="#" class="btn btn-login">
                Log in
              </a>
              <a href="#" class="btn btn-register">
                Sign up
              </a> */}
              <Button val="Log in" styl={loginbtnStyle} func={LoginFunc} />
              <Button val="SignUp" styl={SignUpbtnStyle} func={SignUpFunc} />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar