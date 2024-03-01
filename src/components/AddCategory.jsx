import React, { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp';
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState()

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubMit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ... cats]);
            setInputValue('');
        }

    }

  return (
    <form onSubmit={handleSubMit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}