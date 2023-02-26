import React, { useState, useEffect } from "react";
import ElementEmptyCategory from "./ElementEmptyCategory";
import ElementHasCategory from "./ElementHasCategory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ImageDropdown from "../ImageDropdown";

function CategoriesMobile(){
    const [state, setState] = useState([]);
    const [getCategory, setCategory] = useState();
    const [getSubCategory, setSubCategory] = useState([]);
    const [getSubSubCategory, setSubSubCategory] = useState([]);
    const [getSubSubSubCategory, setSubSubSubCategory] = useState([]);

    const [getImage, setImage] = useState([]);

    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);

    const handleClick2 = () => setClick2(!click2);
    const Close2 = () => setClick2(false);

    const handleClick3 = () => setClick3(!click3);
    const Close3 = () => setClick3(false);

    const handleClick4 = () => setClick4(!click4);
    const Close4 = () => setClick4(false);

    function categoryHandler(category){
        setCategory(category);
    }   

    function subCategoryHandler(subcategory){
        const found = getSubCategory[0]?.subcategory?.filter(item => item?.cate_name == subcategory)
        setSubSubCategory(found);
    }

    function subSubCategoryHandler(subsubcategory){
        const found = getSubSubCategory[0]?.subcategory?.filter(item => item?.cate_name == subsubcategory)
        setSubSubSubCategory(found);
    }

    useEffect(() => {
        fetch('http://localhost:8000/api/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    setState(result);
                },
        )
    }, []);


    useEffect(()=> {
        fetch(`http://localhost:8000/api/categories/${getCategory}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setSubCategory(result.subcategory);
                    setImage(result.subimage);
                },
            )   
    },[getCategory],[getImage]);

    function isEmpty(obj) { 
        if(Object.keys(obj).length > 0){
            return false;
        }
        else{
            return true;
        }
    }

    var categories = "";

    categories = state.categories?.map( (category, j) => {
        return(
            <React.Fragment key={category.cate_id}>    
                <ElementHasCategory
                    key={category?.cate_id}
                    onClick={function(){categoryHandler(category?.cate_name); handleClick2(); }}
                    name={category?.cate_name}
                    className={click2 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                    to={`categoria-prodotto/${getSubCategory[0]?.cate_name}`}
                    nameLink={getSubCategory[0]?.cate_name}
                    children={getSubCategory[0]?.subcategory?.map( (subcategory1, j) => {
                        return(
                            <React.Fragment key={subcategory1.cate_id}>
                            {isEmpty(subcategory1?.subcategory) ? 
                                <ElementEmptyCategory key={subcategory1?.cate_id} link={`categoria-prodotto/${subcategory1?.cate_name}`} name={subcategory1?.cate_name} isEmpty={subcategory1?.subcategory}/>
                                : 
                                <ElementHasCategory 
                                    key={subcategory1?.cate_id}
                                    onClick={function(){subCategoryHandler(subcategory1.cate_name); handleClick3(); }}
                                    name={subcategory1?.cate_name}
                                    className={click3 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                                    to={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${getSubSubCategory[0]?.cate_name}`}
                                    nameLink={getSubSubCategory[0]?.cate_name}
                                    children={getSubSubCategory[0]?.subcategory?.map( (subcategory2, k) => {
                                        return(
                                            <React.Fragment key={subcategory2?.cate_id}>   
                                            {isEmpty(subcategory2?.subcategory) ? 
                                                <ElementEmptyCategory key={subcategory2?.cate_id} link={`categoria-prodotto/${subcategory1?.cate_name}/${subcategory2?.cate_name}`} name={subcategory2?.cate_name} isEmpty={subcategory2?.subcategory}/>
                                                :
                                                <ElementHasCategory
                                                    key={subcategory2?.cate_id}
                                                    onClick={function(){subSubCategoryHandler(subcategory2?.cate_name); handleClick4();}}
                                                    name={subcategory2?.cate_name}
                                                    className={click4 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                                                    to={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${getSubSubCategory[0]?.cate_name}/${getSubSubSubCategory[0]?.cate_name}`}
                                                    nameLink={getSubSubSubCategory[0]?.cate_name}
                                                    children={getSubSubSubCategory[0]?.subcategory.map((subcategory3, l) => {
                                                        return(
                                                            <React.Fragment key={l}>
                                                                <ElementEmptyCategory key={l} link={`categoria-prodotto/${subcategory1?.cate_name}/${subcategory2?.cate_name}/${subcategory3?.cate_name}`} name={subcategory3?.cate_name} isEmpty={subcategory3?.subcategory}/>
                                                            </React.Fragment>
                                                        );
                                                    })}
                                                /> 
                                            }
                                            </React.Fragment>
                                        );
                                    })}
                                />
                            }
                            </React.Fragment>
                        );  
                    })} 
                >
                {/* {getSubCategory[0]?.subcategory?.map((getItem, k) => {
                    return(
                    <div className="bg-gray-100 min-h-fit pb-10">
                        <div className="max-w-[270px] h-auto mx-auto pt-6">
                            <div className="translate-y-6 -translate-x-1 flex">
                                <div className="bg-primary text-white text-center w-16 absolute">
                                    <p>-{Math.round(100-((getImage.sale_price*100)/(getImage.price)))}%</p>
                                </div> 
                                {getImage.vip_price ? 
                                    <div className="bg-secondary text-white text-center w-16 absolute mt-8">
                                        <p>-{Math.round(100-((getImage.vip_price*100)/(getImage.price)))}%</p>
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                            <div className="bg-white border border-solid border-gray-300">
                                <img src={getImage.image_link} alt="" />
                            </div>
                            <div className="py-2 flex items-center justify-between">
                                <div className="text-left text-primary">
                                    {getImage.price ? 
                                        <h6 className="line-through font-extralight text-sm">&#8364; {getImage.price}</h6>
                                        :
                                        ""
                                    }
                                    {getImage.sale_price ?
                                        <h5 className="font-medium text-base">&#8364; {getImage.sale_price}</h5>
                                        :
                                        ""
                                    }
                                </div>
                                {getImage.vip_price ? 
                                    <div className="border-solid border border-secondary w-[160px]"></div>
                                    :
                                    ""
                                }
                                <div className="text-right text-secondary items-center uppercase">
                                    {getImage.vip_price ?  
                                        <h5>&#8364; {getImage.vip_price} <FontAwesomeIcon icon={faCircleInfo} className="text-xs"/><div className="text-[8px] flex">con vip card</div></h5>
                                    : 
                                    ""
                                    }
                                </div> 
                            </div>
                            <div className="py-1 text-left">
                                <p className="uppercase text-sm font-light">{getImage.marche}</p>
                                <p className="text-base leading-4 first-letter:capitalize">{getImage.title}</p>
                            </div>
                        </div>
                    </div> 
                    );
                })[0]} */}
                {/* <ImageDropdown /> */}
                </ElementHasCategory>
            </React.Fragment>   
        );
    });
                                    {/* // {...getSubCategory[0]?.subcategory?.map((getItem, k) => {
                                    //     return(
                                    //     <div className="bg-gray-100 min-h-fit pb-10">
                                    //         <div className="max-w-[270px] h-auto mx-auto pt-6">
                                    //             <div className="translate-y-6 -translate-x-1 flex">
                                    //                 <div className="bg-primary text-white text-center w-16 absolute">
                                    //                     <p>-{Math.round(100-((getImage.sale_price*100)/(getImage.price)))}%</p>
                                    //                 </div> 
                                    //                 {getImage.vip_price ? 
                                    //                     <div className="bg-secondary text-white text-center w-16 absolute mt-8">
                                    //                         <p>-{Math.round(100-((getImage.vip_price*100)/(getImage.price)))}%</p>
                                    //                     </div>
                                    //                     :
                                    //                     ""
                                    //                 }
                                    //             </div>
                                    //             <div className="bg-white border border-solid border-gray-300">
                                    //                 <img src={getImage.image_link} alt="" />
                                    //             </div>
                                    //             <div className="py-2 flex items-center justify-between">
                                    //                 <div className="text-left text-primary">
                                    //                     {getImage.price ? 
                                    //                         <h6 className="line-through font-extralight text-sm">&#8364; {getImage.price}</h6>
                                    //                         :
                                    //                         ""
                                    //                     }
                                    //                     {getImage.sale_price ?
                                    //                         <h5 className="font-medium text-base">&#8364; {getImage.sale_price}</h5>
                                    //                         :
                                    //                         ""
                                    //                     }
                                    //                 </div>
                                    //                 {getImage.vip_price ? 
                                    //                     <div className="border-solid border border-secondary w-[160px]"></div>
                                    //                     :
                                    //                     ""
                                    //                 }
                                    //                 <div className="text-right text-secondary items-center uppercase">
                                    //                     {getImage.vip_price ?  
                                    //                         <h5>&#8364; {getImage.vip_price} <FontAwesomeIcon icon={faCircleInfo} className="text-xs"/><div className="text-[8px] flex">con vip card</div></h5>
                                    //                     : 
                                    //                     ""
                                    //                     }
                                    //                 </div> 
                                    //             </div>
                                    //             <div className="py-1 text-left">
                                    //                 <p className="uppercase text-sm font-light">{getImage.marche}</p>
                                    //                 <p className="text-base leading-4 first-letter:capitalize">{getImage.title}</p>
                                    //             </div>
                                    //         </div>
                                    //     </div> 
                                    //     );
                                    // })[0]} */}
                                

    return(
        <div>
            {categories}
        </div>
    );
}

export default CategoriesMobile;