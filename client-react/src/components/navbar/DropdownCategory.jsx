
import React, {useState, useContext} from "react";
import { CategoryContext } from "./ContextCategory/CategoryContext";
import ItemModal from "./ItemModal";

const Modal = () => {

    const {  subcategory } = useContext(CategoryContext);

    return(
        <div className="hidden lg:block container justify-between">
            <div className="flex justify-between">
                <div className="flex grow shrink flex-wrap">
                    <div className='bg-white'>
                        <div className='grid grid-cols-4'>
                            {subcategory}
                            {/* Eri */}
                        </div>
                    </div>
                </div> 
                <div className='shrink-0 w-1/4'>
                    <ItemModal />
                </div>
            </div>
        </div> 
    );
}

export default Modal;
