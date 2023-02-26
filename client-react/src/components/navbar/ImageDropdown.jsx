import React, {useState, useContext} from "react";
import { CategoryContext } from "./contextCategory/CategoryContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const ItemModal = () => {
    const {  getImage } = useContext(CategoryContext);

    return(
        // <div className="bg-gray-100 pb-10">
        //     <h2 className='uppercase pt-8 pl-6 font-bold text-sm pb-2'>in evidenza</h2>
            // <div className="max-w-[270px] h-auto mx-6">
            <>
                <div className="translate-y-6 -translate-x-1 flex">
                    <div className="bg-primary text-white text-center w-16 absolute">
                        <p>-{Math.round(100-((getImage?.sale_price*100)/(getImage?.price)))}%</p>
                    </div> 
                    {getImage?.vip_price ? 
                        <div className="bg-secondary text-white text-center w-16 absolute mt-8">
                            <p>-{Math.round(100-((getImage?.vip_price*100)/(getImage?.price)))}%</p>
                        </div>
                        :
                        ""
                    }
                </div>
                <div className="bg-white border border-solid border-gray-300">
                    <img src={getImage?.image_link} alt="" />
                </div>
                <div className="py-2 flex items-center justify-between">
                    <div className="text-primary flex items-center">
                        {getImage?.price ? 
                            <h6 className="line-through font-extralight md:text-sm lg:text-base">&#8364; {getImage?.price}</h6>
                            :
                            ""
                        }
                        {getImage?.sale_price ?
                            <h5 className="ml-1 font-medium md:text-base lg:text-xl">&#8364; {getImage?.sale_price}</h5>
                            :
                            ""
                        }
                    </div>
                    {getImage?.vip_price ? 
                        <div className="border-solid border border-secondary w-[100px] xl:block lg:hidden"></div>
                        :
                        ""
                    }
                    <div className="text-right text-secondary items-center uppercase">
                        {getImage?.vip_price ?  
                            <h5>&#8364; {getImage?.vip_price} <FontAwesomeIcon icon={faCircleInfo} className="text-xs"/><div className="text-[8px] flex">con vip card</div></h5>
                        : 
                        ""
                        }
                    </div> 
                </div>
                <div className="py-1 text-left">
                    <p className="uppercase text-sm font-light">{getImage?.marche}</p>
                    <p className="text-base leading-4 first-letter:capitalize">{getImage?.title}</p>
                </div>
                </>
            // </div>
        // </div> 
    );
}

export default ItemModal;