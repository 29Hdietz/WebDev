import React, { useState, useEffect } from "react"
import Counter from "./Counter/Counter"
import Searchbar from "./SearchBar/searchbar"
import Paragraph from "./Paragraph/Paragraph"

const App = () => {
  
  const [productsState, setProductState] = useState([])

   useEffect(() => {
           
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then((productsArray) => {
             setProductState(productsArray)
            })

    }, [])

      const hasProducts = productsState.length > 0
 
  return(
  <div> 
    <h1>React App Demo</h1>

    {hasProducts ? <Searchbar searchItems = {productsState}/> : "Loading..."}
 
    <Counter incrementBy ={1} buttonColor = {'blue'}/>

    <Counter incrementBy ={2} buttonColor = {'red'}/>

    <Paragraph link = {'https://github.com/29Hdietz/WebDev/tree/main/src'}/>

  </div>
  )
}

export default App