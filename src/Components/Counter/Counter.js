import React , {useState , useEffect}from "react";
import './Counter.css'

const Counter = (props) => {

   
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

      const reset = () => {
        setCurrentCount(0)
    }
    
    useEffect(() => {
        if (currentCount > 10) {
             setCurrentCount(0)
            }
    }, [currentCount])

    const buttonStyle = {
        backgroundColor: props.buttonColor,
    }

    return (<div className="wrapper">
    <h2>{props.incrementBy} Counter</h2>
    <button className="countButton" style={buttonStyle} onClick={handleClick}> +{props.incrementBy} </button>
    <button  className="countButton"  style={buttonStyle} onClick={reset}> Reset </button>
    <div className="countDisplay"> {currentCount} </div>

    </div>)

}

export default Counter