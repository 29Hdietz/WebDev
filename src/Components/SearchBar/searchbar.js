import React, {useState, useEffect} from "react";
import './searchbar.css'

const Searchbar = (props) => {
   const [searchVal, setSearchVal] = useState("")
   
    const handleInput = (event) => {
       setSearchVal(event.target.value)
    }

    const clearSearch = () => {
         setSearchVal("")
    }

    const isSearchText = (searchVal.length > 0)

    const FilteredProducts = props.searchItems.filter((product) => {
         return product.title.includes(searchVal)}
          )

    useEffect(() => {

    }, [])

   return <div> 

        <div className="searhBarDiv"><input type="text" value = {searchVal} onChange = {handleInput}/> </div>

        {isSearchText && <button onClick={clearSearch}>X</button>}

       <ul> 
        {FilteredProducts.map((product) => {
            return  <li key={product.id}>
                <div className="productListing">
                    <strong>{product.title}</strong>
                    <p>${product.price}</p>
                
                </div>
                <div className="productImage"><img
                src={product.image}
                alt={product.title}/></div>
            </li>
            } )}
        </ul> 

    </div>
}

export default Searchbar 