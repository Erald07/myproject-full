import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import Header from "./elements/Header";
import "./Style.css";

function Index3(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();
    const {getsubcate} = useParams();
    const {getsubsubcate} = useParams();

    // useEffect(() => {
    //     fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}`)
    //       .then(items => items.json())
    //       .then(
    //             (result) => {
    //                 // console.log(result);
    //                 setItems(result.items);
    //             },
    //         )
    // },[getcate, getsubcate, getsubsubcate]);
    useEffect(()=> {
        const getSubSubSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}`);
            const subcates = await result.json();
            if(subcates.status === 200){
                setItems(subcates.items);
            }
        }

        getSubSubSubCate();

    },[getcate, getsubcate, getsubsubcate]);
    
    return(
        <>
        <div>
            <Header data={items}/>
        </div>
        <div>
            <Items data={items} />
        </div>
        </>
    );
}

export default Index3;