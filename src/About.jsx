import Footnote from "./Footnote"
import Navbar from "./Navbar"

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style = {{
                color : 'brown',
                marginLeft : '35%',
                marginTop : '3%',
            }}>About CSE-01 :</h1>
            <div style = {{
                margin : '2% 20%',

            }}>
            <h4 style = {{
                border : '5px solid grey',
                padding : '24px',
                color : 'whitesmoke',
                backgroundColor : 'black',
                borderRadius : '50px',
                boxShadow: '0 38px 34px 0 rgba(0,0,0,0.1)',
            }}>
          
   
Welcome to the official page of CSE-01, a dynamic and cohesive group of students united by our passion for learning and excellence. As a university-level class specializing in Computer Science and Engineering, we pride ourselves on our strong sense of unity and discipline that drives our academic and extracurricular achievements.
In the classroom, our dedication to studies is evident through our consistently outstanding academic performances. We strive to push the boundaries of knowledge, engage in innovative projects, and support each other in mastering complex concepts and technologies.
Beyond academics, the students of CSE-01 excel in a diverse array of cultural activities and sports. From participating in university cultural festivals to competing in various sports tournaments, we believe in the importance of a well-rounded education that fosters creativity, teamwork, and physical well-being.
Our collective spirit and commitment to excellence not only enhance our individual growth but also contribute positively to the university community. We are proud of our accomplishments and remain dedicated to upholding the values of unity and discipline in all our endeavors.

Join us on our journey as we continue to learn, grow, and make a difference both inside and outside the  classroom.
            </h4>

            </div>
            <Footnote></Footnote>
        </div>
    );
}
export default About;