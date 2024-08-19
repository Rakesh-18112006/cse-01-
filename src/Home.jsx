
import Footnote from "./Footnote";
import Navbar from "./Navbar";
import MyCarousel from "./MyCarousel";
import 'bootstrap/dist/css/bootstrap.css'


const Home = () => {
    return(
        <div style={{
            backgroundColor: 'rgba(180, 184, 183,0.5)', //#616161

        }}>
            <Navbar></Navbar>
            <MyCarousel></MyCarousel> 
            <Footnote></Footnote>
        </div>
    );
}
export default Home;