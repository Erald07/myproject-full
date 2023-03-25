import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import ButonCategory from "../ButonCategory";
import DropdownCategory from "../DropdownCategory";
import { CategoryContext } from '../contextCategory/CategoryContext';

const CategoryDesktop = () => {
    const {state, getCategory, count} = useContext(CategoryContext);
    // const [count, setCount] = useState(0);
    // const [state, setState] = useState([]);
    // const [getCategory, setCategory] = useState();
    // const [getSubCategory, setSubCategory] = useState([]);
    // const [getImage, setImage] = useState([]);
    // const [isShown, setIsShown] = useState(false);


    const navigate = useNavigate();

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

    // var subcategory = "";

    // subcategory = getSubCategory[0]?.subcategory?.map( (sub1, i) => {
    //     return(
    //         <div key={i} className='pl-10 py-8 space-y-3'>
    //             <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}`} key={i} className='mb-3 uppercase text-md font-bold'>{sub1.cate_name}</Link>
    //             <div className='py-2'>
    //                 {sub1.subcategory.map( (sub2, j) => {
    //                     return(
    //                         <>
    //                         <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}/${sub2.cate_name}`} key={j} className='text-sm py-2'>{sub2.cate_name}</Link>
    //                         <div className='py-2'>
    //                             {sub2?.subcategory?.map( (sub3, k) => {
    //                                 return(
    //                                     <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}/${sub2.cate_name}/${sub3.cate_name}`} key={k} className='text-sm pl-3'>{sub3.cate_name}</Link>
    //                                 );
    //                             })}
    //                         </div>
    //                         </>
    //                     );
    //                 })}
    //             </div>
    //         </div>
    //     );
    // });

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
        // <CategoryContext.Provider value={{count, setCount, getSubCategory, setSubCategory, setIsShown, setCategory, subcategory, getImage, state}}>
        <>
        <div className="container mb-1">
            {categoriesDesktop} 
        </div>
        <div className='hidden lg:block border border-gray-200 border-solid'></div>
        {count === 1 ? <DropdownCategory /> : ""}
        {count === 2 ? navigate(`/categoria-prodotto/${getCategory}`) : ""}
        {/* <CategoryMobile /> */}
        {/* <Footer /> */}
        </>
        // </CategoryContext.Provider>
    );
}
export default CategoryDesktop;