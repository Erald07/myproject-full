import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Items from "./Items";
import Header from "./elements/Header";
import "./Style.css";
import Filter from "./filters/Filter";
import CartProvider from "./cart/ContextCart";
import ShowFilters from "./ShowFilters";

function Index2(){
    const [items, setItems] = useState([]);

    const {getcate} = useParams();
    const {getsubcate} = useParams();

    const queryParams = new URLSearchParams(window.location.search);
    var colore = ''
    var marche = '';
    var genere = '';
    var eta = '';
    var taglia = '';
    var availability = '';
    var min_price = '';
    var max_price = '';
    var orderBy ='price';
    if(queryParams.get("colore") !== null){
        colore = queryParams.get("colore");
    }
    if(queryParams.get("marche") !== null){
        marche = queryParams.get("marche");
    }
    if(queryParams.get("genere") !== null){
        genere = queryParams.get("genere");
    }
    if(queryParams.get("eta") !== null){
        eta = queryParams.get("eta");
    }
    if(queryParams.get("taglia") !== null){
        taglia = queryParams.get("taglia");
    }
    if(queryParams.get("exclude_out_of_stock") !== null){
        availability = queryParams.get("exclude_out_of_stock");
    }
    if(queryParams.get("min_price") !== null){
        min_price = queryParams.get("min_price");
    }
    if(queryParams.get("max_price") !== null){
        max_price = queryParams.get("max_price");
    }
    if(queryParams.get("orderBy") !== null){
        orderBy = queryParams.get("orderBy");
    }

    useEffect(() => {
        const getSubSubCate = async () => {
            const result = await fetch(`http://localhost:8000/api/categoria-prodotto/${getcate}/${getsubcate}?colore=${colore}&marche=${marche}&genere=${genere}&eta=${eta}&taglia=${taglia}&exclude_out_of_stock=${availability}&min_price=${min_price}&max_price=${max_price}&orderBy=${orderBy}`);
            const subcates = await result.json();
            if(subcates.status === 200){
                setItems(subcates.items);
            }
        }

        getSubSubCate();
    },[getcate, getsubcate, colore, marche, genere, eta, taglia, availability, min_price, max_price, orderBy]);
    
    return(
        <>
        <div>
            <Header data={items}/>
        </div>
        <div>
            <Filter data={items}/>
        </div>
        <div>
            <ShowFilters />
        </div>
        <div>
            <CartProvider data={items}>
                <Items data={items}/>
            </CartProvider>
        </div>
        </>
    );
}

export default Index2;