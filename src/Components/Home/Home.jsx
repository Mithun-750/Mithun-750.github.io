import React from 'react'
import './Home.css'
import Mithun from '../../assets/mithun.png'
import SkillCard from './SkillCard'



export default function Home() {
    return (
        <div>
            <div className="abt-me">
                <h1>Hello there👋</h1>
                <img src={Mithun} alt="" />
                <span>This is Mithun.U here from the vibrant city of Bengaluru. I am a dedicated full-stack developer, with a particular focus on frontend development. My journey in the realm of technology is complemented by a range of diverse interests. I am currently pursuing a Bachelor of Technology (BTECH) in Computer Science and Engineering(CSE) at the prestigious <a href="https://www.iiits.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Information Technology Sri City</a>. Outside the world of coding, I find solace and exhilaration on the volleyball and cricket courts, immersing myself in the spirit of sportsmanship. My intellectual pursuits lead me to explore the realms of manhuas, manwas, and light novels, where storytelling and creativity converge.</span>

            </div>
            <div className="skill-container">

                <h1>My Skills</h1>

                <div className="skills">
                    <SkillCard name="HTML" level="Advanced" />
                    <SkillCard name="CSS" level="Advanced" />
                    <SkillCard name="Bootstrap" level="Intermediate" />
                    <SkillCard name="ReactJS" level="Intermediate" />
                    <SkillCard name="Node.js" level="Intermediate" />
                    <SkillCard name="Express.js" level="Beginner" />
                    <SkillCard name="MongoDB" level="Beginner" />
                    <SkillCard name="Python" level="Intermediate" />
                    <SkillCard name="C Programming" level="Advanced" />
                    <SkillCard name="SQL" level="Intermediate" />
                    <SkillCard name="Data Structures" level="Intermediate" />
                </div>
            </div>
        </div>
    )
}
