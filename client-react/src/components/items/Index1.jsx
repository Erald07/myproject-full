import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items1 from "./Items1";
import "./Styleee.css";

function Index1(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}`)
          .then(items => items.json())
          .then(
                (result) => {
                    setItems(result.items);
                },
            )
    },[getcate]);
    
    return(
        <>
        <div>
            <Items1 data={items} />
        </div>
        </>
    );
}

export default Index1;