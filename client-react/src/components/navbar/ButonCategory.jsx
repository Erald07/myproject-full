import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "./ContextCategory/CategoryContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import ModalSubCategory from "./ModalSubCategory";


const ButonCategory = props => {

    const { count, setCount, setCategory, setIsShown } = useContext(CategoryContext);

    var debounce = require('debounce');

    const onClick = () => setCount(count + 1);
    const onClick2 = debounce(onClick, 300);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    function categoryHandler(category){
        setCategory(category);
    }   
    return (
        <>
        <div>
            <button
                className={count === 1 ? props.className : "py-4 lowercase first-letter:capitalize leading-5 text-base font-inherit font-semibold hover:text-primary outline-none text-gray-900"}
                onClick={function(){categoryHandler(props.onClick); handleClick(); onClick2();}}
            >
                {props.name}
            </button>
            <FontAwesomeIcon icon={faCaretUp} className={count === 1 ? "text-primary -bottom-3 block text-xl absolute left-1/2" : "text-primary hidden mx-auto relative text-xl"}/>
        </div>
        </>
    )
}

export default ButonCategory