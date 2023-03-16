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
        const getSubSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}`);
            const subcates = await result.json();
            if(subcates.status === 200){
                setItems(subcates.items);
            }
        }

        getSubSubCate();
    },[getcate, getsubcate]);
    
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