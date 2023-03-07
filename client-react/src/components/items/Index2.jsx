import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import Header from "./elements/Header";
import "./Style.css";

function Index2(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();
    const {getsubcate} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}`)
          .then(items => items.json())
          .then(
                (result) => {
                    // console.log(result);
                    setItems(result.items);
                },
            )
    },[getcate, getsubcate]);
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
            <Header data={items}/>
        </div>
        <div>
            <Items data={items} />
        </div>
        </>
    );
}

export default Index2;