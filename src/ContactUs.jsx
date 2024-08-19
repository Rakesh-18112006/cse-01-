import Footnote from "./Footnote"
import Navbar from "./Navbar"
import { MdAddIcCall } from "react-icons/md"; 
import { SiGmail } from "react-icons/si";

const ContactUS = () => {
    return(
        <div>
            <Navbar></Navbar>
            <h2 style={{
                paddingLeft : '40%',
                paddingTop : '5%',
            }}>Class Representatives....</h2>
            <div style = {{
                paddingTop : '2%',
                paddingLeft : '42%',
            }}>
   
            <h2 style = {{
                color : 'brown',
            }}>Mr. Mithilesh Kumar</h2>
          
            <h4> <MdAddIcCall /> : 9398384684 </h4>
            <h4> <SiGmail /> : mithilesh@gmail.com </h4>
    
            <h2 style={ {
                color : 'brown',
            }} >Mrs. Mohitha</h2>
            <h4> <MdAddIcCall /> : 9381453687 </h4>
            <h4> <SiGmail /> : mohitha@gmail.com </h4>
            </div>
            <Footnote></Footnote>
        </div>
    );
}
export default ContactUS;