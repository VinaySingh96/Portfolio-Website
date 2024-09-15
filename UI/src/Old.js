import CodingProfiles from "./CodingProfiles";
import CTA from "./CTA";
import Navbar from "./Navbar";
import myPic from './Assets/myPic.jpg';

const Old = () => {
  return (
    <>
    <div className='name'> 
      <h4>Hello I'm</h4>
      <h2>Vinay Singh</h2>
      <h5>Software Engineer &nbsp; -- &nbsp; Fullstack Developer</h5>
    </div>
      <CTA/>
      <div className='me'>
        <img src={myPic} alt="me" style={{borderRadius:150}}/>
      </div>
      <CodingProfiles />
      <Navbar />
    </>
  )
}

export default Old;