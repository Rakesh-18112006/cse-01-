 import { Link } from "react-router-dom";
//// backgroundColor : '#a21e82', 


const Navbar = () => {
    return (
        <div>  
       
        <nav style = {{
             display : "flex",
             alignItems : "center",
             backgroundColor:  'rgba(255, 128, 0,0.8)',    // '#08b69f', //#08b610f
             justifyContent : 'space-between',
             padding : '20px 48px', //'rgb(255, 128, 0)'
             boxShadow: '0 14px 12px 0 rgba(139, 252, 245,0.6)',
        }}>
            <div style={{
                display : "flex",
                alignItems : "center",
                gap : '10px',
                fontFamily: 'Gagalin-Regular',
                src : 'url("https://db.onlinewebfonts.com/t/240a7cb10b49b02c94ceddc459d385a9.eot")',
                 fontweight:'bold',
            }}>
        <img src= ".\f2logo.jpg" 
              width = "90"
              
              style ={{
                borderRadius : '35%',
              }}
              
              />
        <h1
        style = {{
            fontWeight : '900',
            fontSize : '2em',
        }}>CSE-01 F2 @OFFICIAL</h1>
        </div>
        <ul
        style = {{
            display : "flex",
            alignItems : "center",
            gap : 18,

        }}>
              <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}><Link  
            style = {{
                textDecoration : 'none',
                color : 'whitesmoke',
            }}
            to='/'>Home </Link ></li>
             <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}><Link  
            style = {{
                textDecoration : 'none',
                color : 'whitesmoke',
            }}
            to='/timetable'>Time Table </Link ></li>
            
             <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}><Link 
            style = {{
                textDecoration : 'none',
                color : 'whitesmoke',
            }}
            to='/rows'>RowRotation </Link ></li>
             <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}><Link  
            style = {{
                textDecoration : 'none',
                color : 'whitesmoke',
            }}
            to='/faculty'>Faculty </Link ></li>
             <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}>
                  <Link  
                          style = {{
                         textDecoration : 'none',
                           color : 'whitesmoke',
            }}
                           to='/contactus'>Contact-us
            </Link >
            </li>

             <li style={{
                listStyle : 'none',
                fontSize : '25px',
            }}><Link  
            style = {{
                textDecoration : 'none',
                color : 'whitesmoke',
            }}
            to='/about'>About </Link ></li>

        </ul>
        </nav>
        </div>
    );
 }
 export default Navbar;