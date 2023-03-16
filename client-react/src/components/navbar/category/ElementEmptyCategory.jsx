import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ElementEmptyCategory = props => {
    return(
        <li className="nav-item border-gray-300 border-t">
            <Link className="nav-links py-5 w-full flex justify-between font-semibold px-6" to={props.link}>
                <div className="lowercase first-letter:capitalize" >
                    {props.name}
                </div>
                {props.isEmpty ? '' : <FontAwesomeIcon icon={faAngleRight} className="text-primary float-right py-1" />}
            </Link>
        </li>
    );
}

export default ElementEmptyCategory;