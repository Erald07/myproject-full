import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import "./Style.css";

function Index3(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();
    const {getsubcate} = useParams();
    const {getsubsubcate} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}`)
          .then(items => items.json())
          .then(
                (result) => {
                    // console.log(result);
                    setItems(result.items);
                },
            )
    },[getcate, getsubcate, getsubsubcate]);
    // useEffect(()=> {
    //     const getSubCate = async () => {
    //         const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}`);
    //         const subcates = await result.json();
    //         console.log(subcates);
    //         if(subcates.status === 200){
    //             setItems(subcates.items);
    //         }
    //     }

    //     getSubCate();

    // },[getcate, getsubcate]);
    
    return(
        <>
        <div>
            <Items data={items} />
        </div>
        </>
    );
}

export default Index3;