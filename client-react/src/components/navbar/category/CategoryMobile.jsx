import React, { useState, useEffect, useContext } from "react";
import ElementEmptyCategory from "./ElementEmptyCategory";
import ElementHasCategory from "./ElementHasCategory";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ImageDropdown from "../ImageDropdown";
import { CategoryContext } from "../contextCategory/CategoryContext";

function CategoriesMobile(){

    const {state, getSubCategory, categoryHandler} = useContext(CategoryContext);
    // const [state, setState] = useState([]);
    // const [getCategory, setCategory] = useState();
    // const [getSubCategory, setSubCategory] = useState([]);
    const [getSubSubCategory, setSubSubCategory] = useState([]);
    const [getSubSubSubCategory, setSubSubSubCategory] = useState([]);
    // const [getImage, setImage] = useState([]);

    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);

    const handleClick2 = () => setClick2(!click2);
    const Close2 = () => setClick2(false);

    const handleClick3 = () => setClick3(!click3);
    const Close3 = () => setClick3(false);

    const handleClick4 = () => setClick4(!click4);
    const Close4 = () => setClick4(false);
    
    function subCategoryHandler(subcategory){
        const found = getSubCategory[0]?.subcategory?.filter(item => item?.cate_name == subcategory)
        setSubSubCategory(found);
    }

    function subSubCategoryHandler(subsubcategory){
        const found = getSubSubCategory[0]?.subcategory?.filter(item => item?.cate_name == subsubcategory)
        setSubSubSubCategory(found);
    }

    // useEffect(() => {
    //     const getCate = async () => {
    //         const result = await fetch('http://localhost:8000/api/categories');
    //         const cates = await result.json();
    //         // console.log(cates.categories);
    //         if(cates.status === 200){
    //             setState(cates.categories);
    //         }
    //     }

    //     getCate();
    // }, []);


    // useEffect(()=> {
    //     const getSubCate = async () => {
    //         const result = await fetch(`http://localhost:8000/api/categories/${getCategory}`);
    //         const subcates = await result.json();
    //         if(subcates.status === 200){
    //             setSubCategory(subcates.subcategory);
    //             setImage(subcates.subimage);
    //         }
    //     }

    //     getSubCate();
    // },[getCategory],[getImage]);

    function isEmpty(obj) { 
        if(Object.keys(obj).length > 0){
            return false;
        }
        else{
            return true;
        }
    }

    var categories = "";
    categories = state?.map( (category, j) => {
        return(
            <React.Fragment key={j}>    
                <ElementHasCategory
                    key={category?.id}
                    onClick={function(){categoryHandler(category?.cate_name); handleClick2(); }}
                    name={category?.cate_name}
                    className={click2 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                    to={`categoria-prodotto/${getSubCategory?.cate_name}`}
                    nameLink={getSubCategory[0]?.cate_name}
                    children={getSubCategory[0]?.subcategory?.map( (subcategory1, i) => {
                        return(
                            <React.Fragment key={i}>
                            {isEmpty(subcategory1?.subcategory) ? 
                                <ElementEmptyCategory key={subcategory1?.id} link={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${subcategory1?.cate_name}`} name={subcategory1?.cate_name} isEmpty={subcategory1?.subcategory}/>
                                : 
                                <ElementHasCategory 
                                    key={i}
                                    onClick={function(){subCategoryHandler(subcategory1?.cate_name); handleClick3(); }}
                                    name={subcategory1?.cate_name}
                                    className={click3 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                                    to={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${getSubSubCategory[0]?.cate_name}`}
                                    nameLink={getSubSubCategory[0]?.cate_name}
                                    children={getSubSubCategory[0]?.subcategory?.map( (subcategory2, k) => {
                                        return(
                                            <React.Fragment key={k}>   
                                            {isEmpty(subcategory2?.subcategory) ? 
                                                <ElementEmptyCategory key={subcategory2?.id} link={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${subcategory1?.cate_name}/${subcategory2?.cate_name}`} name={subcategory2?.cate_name} isEmpty={subcategory2?.subcategory}/>
                                                :
                                                <ElementHasCategory
                                                    key={k}
                                                    onClick={function(){subSubCategoryHandler(subcategory2?.cate_name); handleClick4();}}
                                                    name={subcategory2?.cate_name}
                                                    className={click4 ? "pt-5 min-h-screen z-20 flex-col lg:hidden h-full w-full max-w-2xl absolute bg-white top-0 left-0 z-1 opacity-100" : "nav-menu flex flex-col h-full w-80 absolute -left-full top-0 opacity-100"}
                                                    to={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${getSubSubCategory[0]?.cate_name}/${getSubSubSubCategory[0]?.cate_name}`}
                                                    nameLink={getSubSubSubCategory[0]?.cate_name}
                                                    children={getSubSubSubCategory[0]?.subcategory.map((subcategory3, l) => {
                                                        return(
                                                            <React.Fragment key={l}>
                                                                <ElementEmptyCategory key={l} link={`categoria-prodotto/${getSubCategory[0]?.cate_name}/${subcategory1?.cate_name}/${subcategory2?.cate_name}/${subcategory3?.cate_name}`} name={subcategory3?.cate_name} isEmpty={subcategory3?.subcategory}/>
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
                            {/* <CategoryContext.Provider value={{getImage}}> */}
                                <div className="bg-gray-100 min-h-fit pb-10 hidden last:block">
                                    <div className="max-w-[270px] h-auto mx-auto pt-6">
                                        <ImageDropdown />
                                    </div>
                                </div>
                            {/* </CategoryContext.Provider> */}
                            </React.Fragment>
                        );  
                    })} 
                />
            </React.Fragment>   
        );
    });

    return(
        <div>
            {categories}
        </div>
    );
}

export default CategoriesMobile;