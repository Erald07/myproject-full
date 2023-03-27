import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ButonCategory from "../ButonCategory";
import DropdownCategory from "../DropdownCategory";
import { CategoryContext } from '../contextCategory/CategoryContext';

const CategoryDesktop = () => {
    const {state, getCategory, count} = useContext(CategoryContext);

    const navigate = useNavigate();

    var categoriesDesktop = "";

    categoriesDesktop = state?.map((category, p) => {
        return(
            <div key={p} className="hidden lg:relative lg:inline-flex lg:items-center lg:px-4">
                <div>
                <ButonCategory 
                    key={p}
                    name={category.cate_name === "Abbigliamento Bambino" ? "Bambino" : category.cate_name === "Abbigliamento Bambina" ? "Bambina" : category.cate_name === "AUTO & VIAGGIO" ? "Auto e viaggio" : category.cate_name} 
                    onClick={category.cate_name}
                    className={"py-4 lowercase first-letter:capitalize leading-5 text-base font-inherit font-semibold outline-none text-primary" }
                />
                </div>
            </div>
        );
    });

    return( 
        <>
        <div className="container mb-1">
            {categoriesDesktop} 
        </div>
        <div className='hidden lg:block border border-gray-200 border-solid'></div>
        {count === 1 ? <DropdownCategory /> : ""}
        {count === 2 ? navigate(`/categoria-prodotto/${getCategory}`) : ""}
        </>
    );
}
export default CategoryDesktop;