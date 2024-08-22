import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import './Footnote.css'; // Import the CSS file

const Footnote = () => {
    return (
        <div className="footnote-container">
            <footer className="footnote">
                <div className="footnote-section">
                    <h2>#Computer Science Department</h2>
                    <p>© Rajiv Gandhi University of Knowledge Technologies, All Rights Reserved... @cse-01 CF-02</p>
                </div>
                <div className="footnote-section">
                    <h2>Useful Links</h2>
                    <ul>
                        <li><Link to="/rows">RowRotation</Link></li>
                        <li><Link to="#">Faculty</Link></li>
                        <li><a href="#">Sports</a></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <div className="footnote-section">
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href="https://www.youtube.com"><IoLogoYoutube /> Youtube</a></li>
                        <li><a href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
                        <li><a href="https://www.twitter.com"><BsTwitterX /> Twitter</a></li>
                        <li><a href="https://www.instagram.com"><GrInstagram /> Instagram</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="footnote-form">
                    <form>
                        <input type="text" name="FullName" placeholder="Full Name" />
                        <input type="email" placeholder="Enter Email Here..." />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </footer>
        </div>
    );
}

export default Footnote;
