import { createContext, useEffect, useRef } from "react";

export const ContextFilter = createContext({});

export default function QueryFilter(props){
    // const queryParams = new URLSearchParams(window.location.search);
    // var colore = ''
    // var marche = '';
    // var genere = '';
    // var eta = '';
    // var taglia = '';
    // var availability = '';
    // var min_price = '';
    // var max_price = '';
    // var orderBy ='price';
    // if(queryParams.get("colore") !== null){
    //     colore = queryParams.get("colore");
    // }
    // if(queryParams.get("marche") !== null){
    //     marche = queryParams.get("marche");
    // }
    // if(queryParams.get("genere") !== null){
    //     genere = queryParams.get("genere");
    // }
    // if(queryParams.get("eta") !== null){
    //     eta = queryParams.get("eta");
    // }
    // if(queryParams.get("taglia") !== null){
    //     taglia = queryParams.get("taglia");
    // }
    // if(queryParams.get("exclude_out_of_stock") !== null){
    //     availability = queryParams.get("exclude_out_of_stock");
    // }
    // if(queryParams.get("min_price") !== null){
    //     min_price = queryParams.get("min_price");
    // }
    // if(queryParams.get("max_price") !== null){
    //     max_price = queryParams.get("max_price");
    // }
    // if(queryParams.get("orderBy") !== null){
    //     orderBy = queryParams.get("orderBy");
    // }
    return(
        <ContextFilter.Provider /*value={{colore, marche, genere, eta, taglia, availability, min_price, max_price, orderBy}}*/>
            {props.children}
        </ContextFilter.Provider>
    );
}