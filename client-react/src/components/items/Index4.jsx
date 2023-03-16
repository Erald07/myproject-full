import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import Header from "./elements/Header";
import "./Style.css";

function Index4(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();
    const {getsubcate} = useParams();
    const {getsubsubcate} = useParams();
    const {getsubsubsubcate} = useParams();

    useEffect(() => {
        const getSubSubSubSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}/${getsubsubcate}/${getsubsubsubcate}`);
            const subcates = await result.json();
            if(subcates.status === 200){
                setItems(subcates.items);
            }
        }

        getSubSubSubSubCate();
    },[getcate, getsubcate, getsubsubcate, getsubsubsubcate]);
    
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

export default Index4;