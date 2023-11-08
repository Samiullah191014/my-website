import React from 'react'
import skill from "./Images/skill.png"
import skill1 from "./Images/skill1.png"


const MyEducationSkills = () => {
  return (
    <>
        <div className='container ' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" id='education'>
            <div className='row'>
                <div className='col-12 col-lg-3 d-none d-lg-block'>
                    <img src={skill1} alt="img" style={{width:'300px', height:'300px', marginTop: '150px'}}/>
                </div>
                <div className='col-12 col-lg-6  marginTop' >
                    <h3 className='text-color text-center'>My Education</h3>
                    <h2 className='text-center widclass'>Education and Skills</h2>
                    <p className='textColor text-left'>Explore my educational journey and proficiency. From my academic achievements in Software Engineering to a broad spectrum of skills, ranging from web development and software programming to essential office tools and digital marketing, I'm well-equipped to thrive in the world of technology.</p>
                </div>
                <div className='col-12 col-lg-3 d-none d-lg-block'>
                <img src={skill} alt="img" style={{width:'300px', height:'300px'}}/>

                </div>

            </div>
        </div>
    </>
  )
}

export default MyEducationSkills