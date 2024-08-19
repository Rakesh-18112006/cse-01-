
import Navbar from "./Navbar";
import Footnote from "./Footnote";

 const TimeTable = () => {
    return(
        
        <div>
            <Navbar></Navbar>
            <div >
                <h1 style = {{
                    backgroundColor : 'purple',
                    fontSize : 85,
                    paddingLeft : '36%',
                    fontWeight : 'bold',

                    }}>Time Table</h1>
            </div>
            <span style = {{
                     paddingLeft : '20%',
                      }}>
                    <img src = "./timetable.jpg" alt = "timetable" ></img>
            </span>
               <Footnote></Footnote>
        </div>
    );
 }
 export default TimeTable;