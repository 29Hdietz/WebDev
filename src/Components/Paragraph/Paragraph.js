import React, {useState, useEffect} from "react";
import './paragraph.css'

const Paragraph = (props) =>
{
    
 useEffect(() => {

    }, [])
    
    return <div className="ParagraphDiv"> 
       <h2> paragraph</h2>
       <p>here is<a href={props.link}>my Github link</a> <br/>
       This is the place holder where ill talk about my final project idea!!!!!!!</p>

    </div>
}
export default Paragraph