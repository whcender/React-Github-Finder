import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import Navbar from './Navbar'

function About() {
  return (
    <>
        <Navbar icon={<GoMarkGithub />} />
        <div className="container">
            <h1>About this App</h1>
        </div>
    </>
    )
}

export default About