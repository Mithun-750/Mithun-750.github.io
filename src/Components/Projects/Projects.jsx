import React from 'react'
import './Projects.css'
import Vartha from './Project/Vartha/Vartha'
import NoteDrop from './Project/NoteDrop/NoteDrop'
import TTT from './Project/TTT/TTT'
import Weather from './Project/Weather/Weather'

export default function Projects() {
    return (
        <div className='Projects-Container'>
            <h1 className='rem3' >My Projects</h1>
            <div className="projects-intro">
                Throughout my journey as a full-stack developer, I've had the opportunity to work on numerous projects. Among the various technologies I've employed, React stands out as my primary tool of choice. For a comprehensive view of my work, I invite you to explore my GitHub account, where you'll find a collection of my projects. Below, I've highlighted a few notable ones for your reference.
            </div>
            <NoteDrop direction="right" />
            <Vartha direction="left" />
            <TTT direction="right" />
            <Weather direction="left" />
        </div>
    )
}
