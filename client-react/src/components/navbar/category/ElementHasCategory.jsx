import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ElementHasCategory = props => {
    // console.log(props);
    return(
    <li className="nav-item border-gray-300 border-t cursor-pointer" onClick={props.onClick}>
        <div className="nav-links py-5 w-full flex justify-between font-semibold px-6" onClick={props.onClick}>
            <div className="lowercase first-letter:capitalize" >
                {props.name}
                <div className="lowercase" >
                    <nav className="navbar max-w-screen-2xl" onClick={e => e.stopPropagation()}>
                        <div className={props.className}>
                            <div className="pb-3 text-center">
                                <FontAwesomeIcon icon={faAngleLeft} className="text-primary float-left p-1 text-xl px-6" onClick={props.onClick}/>
                                <Link to={props.to} className="text-primary justify-center text-center font-[700] uppercase text-lg pb-5">{props.nameLink}</Link>
                            </div>
                            {props.children}
                        </div>
                    </nav>
                </div>
            </div>
            {props.isEmpty ? '' : <FontAwesomeIcon icon={faAngleRight} className="text-primary float-right py-1" />}
        </div>
    </li>
    );
}

export default ElementHasCategory;