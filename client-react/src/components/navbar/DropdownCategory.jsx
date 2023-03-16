
import React, {useState, useContext} from "react";
import { CategoryContext } from "./contextCategory/CategoryContext";
import ImageDropdown from "./ImageDropdown";

const DropdownCategory = () => {

    const {  subcategory } = useContext(CategoryContext);

    return(
        <div className="hidden lg:block container justify-between">
            <div className="flex justify-between">
                <div className="flex grow shrink flex-wrap">
                    <div className='bg-white'>
                        <div className='grid grid-cols-4'>
                            {subcategory}
                        </div>
                    </div>
                </div> 
                <div className='shrink-0 w-1/4'>
                    <div className="bg-gray-100 pb-10">
                        <h2 className='uppercase pt-8 pl-6 font-bold text-sm pb-2'>in evidenza</h2>
                        <div className="max-w-[270px] h-auto mx-6">
                            <ImageDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default DropdownCategory;
