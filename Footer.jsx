import { Container, Facebook, Instagram, Rows, Twitter } from "lucide-react";
import React from "react";
import "./Footer.css"
  
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-items">
            <div className="colItems">
                <h2>For Dev</h2>
              
                <a href="/">How it works</a>
                <a href="/">How to create a profile</a>
                <a href="/">Find Jobs</a>
            </div>
            <div className="colItems">
                <h2>For Clients</h2>
                <a href="/">How it works</a>
                <a href="/">How to post a job</a>
                <a href="/">Find Dev</a>
            </div>
            <div >
                <h2>Stay Connected</h2>
                <div className="connected">
                    <a href="https://www.facebook.com/login/"><Facebook size={30}/></a>
                    <a href="https://twitter.com/i/flow/login/"><Twitter size={30}/></a>
                    <a href="https://www.instagram.com/accounts/login/"><Instagram size={30}/></a>

                </div>
                

            </div>

        </div>
        <div className="devLink">
            <h2>DevLink</h2>
            <div className="devLink-items">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms</a>
                <a href="/">Code of Conduct</a>

            </div>
        </div>
        

    </div>
  )
}
export default Footer;