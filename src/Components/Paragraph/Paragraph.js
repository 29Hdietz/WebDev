import React, {useState, useEffect} from "react";
import './paragraph.css'

const Paragraph = (props) =>
{
    
 useEffect(() => {

    }, [])
    
    return <div className="ParagraphDiv"> 
       <h2> paragraph</h2>
       <p>here is<a href={props.link}>my Github link</a> <br/>
      Our project, Orbital Debris Tracker, is an interactive 3D web application that visualizes real-time satellite and space debris data in Earth’s orbit. 
      Using Three.js and WebGL, the frontend renders a dynamic globe showing live orbital paths, while a Node.js/Express backend retrieves and caches TLE data from sources like Celestrak.
      This full-stack project introduces  3D rendering technology not deeply covered in class and tackles the real-world issue of orbital congestion 
      by making complex aerospace data visually accessible. 
      It’s a collaborative, demo-ready system that highlights both technical depth and public relevance through engaging, data-driven visualization.</p>

    </div>
}
export default Paragraph