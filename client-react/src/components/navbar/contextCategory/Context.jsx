import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from './CategoryContext';


const Context = (props) => {

    const [count, setCount] = useState(0);
    const [state, setState] = useState([]);
    const [getCategory, setCategory] = useState();
    const [getSubCategory, setSubCategory] = useState([]);
    const [getImage, setImage] = useState([]);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const getCate = async () => {
            const result = await fetch('http://localhost:8000/api/categories');
            const cates = await result.json();
            if(cates.status === 200){   
                setState(cates.categories);
            }
        }

        getCate();
    }, [])

    useEffect(()=> {
        const getSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categories/${getCategory}`);
            const subcates = await result.json();
            if(subcates.status === 200){
                setSubCategory(subcates.subcategory);
                setImage(subcates.subimage);
            }
        }

        getSubCate();

    },[getCategory, getImage]);

    function categoryHandler(category){
        setCategory(category);
    } 

    var subcategory = "";

    subcategory = getSubCategory[0]?.subcategory?.map( (sub1, i) => {
        return(
            <div key={i} className='pl-10 py-8 space-y-3'>
                <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}`} key={i} className='mb-3 uppercase text-md font-bold'>{sub1.cate_name}</Link>
                <div className='py-2'>
                    {sub1.subcategory.map( (sub2, j) => {
                        return(
                            <>
                            <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}/${sub2.cate_name}`} key={j} className='text-sm py-2'>{sub2.cate_name}</Link>
                            <div className='py-2'>
                                {sub2?.subcategory?.map( (sub3, k) => {
                                    return(
                                        <Link to={`categoria-prodotto/${getCategory}/${sub1.cate_name}/${sub2.cate_name}/${sub3.cate_name}`} key={k} className='text-sm pl-3'>{sub3.cate_name}</Link>
                                    );
                                })}
                            </div>
                            </>
                        );
                    })}
                </div>
            </div>
        );
    });


    return (
        <CategoryContext.Provider value={{count, setCount, getSubCategory, setSubCategory, setIsShown, getImage, state, getCategory, setCategory, categoryHandler, subcategory}}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default Context
