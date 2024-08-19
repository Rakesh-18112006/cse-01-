import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footnote = () => {
    return (
        <div style = {{
            marginTop : '12%',
        }}>
            <footer style = {{
            backgroundColor: 'BLACK',
            display : 'flex',
            justifyContent : 'center',
          }}>
             <div style = {{
               padding : 50,}}>
                <h2 style = {{
                    color : 'white',
                    fontWeight : '500',}}>
                         #Computer Science Department
                         </h2>
                    <p style = {{
                    color : 'white',
                    fontWeight : '500',

                }}>© Rajiv Gandhi University of Knowledge Technologies, All Rights Reserved... @cse-01 CF-02 </p>
                <span style  = {{
                    color : 'white',
                }}>
                <h3 style  = {{
                    color : 'brown',
                }}>web developers :</h3>
                <h5> Mr.Rakesh Mummana (Frontend Developer)</h5>
                <h5> Mr.Harshith Bandari (Designer)</h5>
                <h5> Mr.Surya Annepu (Backend Developer)</h5>
                </span>
             </div>
                         <div style = {{
               padding : 50,
             }}>
                <h2 
                style = {{
                    color : 'white',
                    fontWeight : '500',

                }}> Usefull links</h2>
                <ul>
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><Link style = {{
                        textDecoration : 'none',
                    }}
                     to="/rows">RowRotation</Link></li>
                                    
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><Link style = {{
                        textDecoration : 'none',
                    }}
                     to="#">Faculty</Link></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                    }}
                     href="#">Sports</a></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><Link style = {{
                        textDecoration : 'none',
                    }}
                     to="/contactus">Contact Us</Link></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><Link style = {{
                        textDecoration : 'none',
                    }}
                     to="/about">About Us</Link></li>
                 </ul>
                 </div>
               <div style = {{
               padding : 50,}}>
                <h2 
                style = {{
                    color : 'white',
                    fontWeight : '500',

                }}> Social links</h2>
                <ul>
                    <li style = {{
                        listStyle : 'none',
                        color : 'red',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                        color : 'red',
                    }}
                     href="https://www.youtube.com"><IoLogoYoutube />   Youtube</a></li>
                                    
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                    }}
                     href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                    }}
                     href="https://www.twitter.com"><BsTwitterX /> Twitter</a></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                    }}
                     href="https://www.instagram.com"><GrInstagram />Instagram</a></li>
                                     
                    <li style = {{
                        listStyle : 'none',
                        color : 'white',
                        fontWeight : '500',
                    }}><a style = {{
                        textDecoration : 'none',
                    }}
                     href="#">About Us</a></li>
                </ul>

             </div>
             <div>
                <form  style = {{
                    display : 'flex',
                    flexDirection : 'column',
                    alignItems : 'center',
                    gap : 30,
                    marginTop : '50px', 
                    marginRight : '40px',

                }}>
                    <input type="name"
                     name = "FullName"
                     placeholder="FullName"
                     style = {{
                        border : 'none',
                        padding : '14px',
                        // marginTop : '30px', 
                        borderRadius : '16px',
                     }}
                     ></input>
                      <input style = {{
                        border : 'none',
                        padding : '14px',
                        borderRadius : '16px',

                      }}
                     type="email"
                     placeholder="Enter Email Here .... "
                     ></input>
                     <button style = {{
                        padding : '15px',
                        borderRadius : '16px',
                        backgroundColor : 'blue',
                        border : 'none',
                     }}>submit</button>

                   </form>
                </div>
            </footer>
        </div>
    );
 }
  export default Footnote;