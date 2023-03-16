import {useCallback, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "./elements/Header";
import Items from "./Items";
import Filter from "./filters/Filter";
import "./Style.css";
import FilterFooter from "./elements/FilterFooter";
import Footer from "./elements/Footer";
import Context from "../navbar/contextCategory/Context";

function Index1(){
    const [items, setItems] = useState([]);
    const {getcate} = useParams();

    useEffect(() => {
        // fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}`)
        //   .then(items => items.json())
        //   .then(
        //         (result) => {
        //             setItems(result.items);
        //         },
        //     )
        const getSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}`);
            const subcates = await result.json();
            // console.log(subcates);
            if(subcates.status === 200){
                setItems(subcates.items);
            }
        }

        getSubCate();
        // getItems();
    },[getcate]);
    
    return(
        <Context>
        <>
        <div>
            <Header data={items}/>
        </div>
        <div>
            <Filter data={items}/>
        </div>
        <div>
            <Items data={items} />
        </div>
        </>
        </Context>
    );
}

export default Index1;