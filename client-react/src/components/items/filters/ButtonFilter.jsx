import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ContextButtonFilter } from './contextFilter/ContextButtonFilter';

function ButtonFilter(props) {
    const [isShow, setIsShow] = useState(false);

    const handleClick = event => {
        setIsShow(current => !current);
    }

    return (
        <div className="border border-gray-400 border-solid rounded-2xl py-2 px-4 text-xs text-gary leading-tight w-auto hover:bg-gray-400 hover:text-white cursor-pointer items-center" onClick={handleClick}>
            {props.name}
            <span><FontAwesomeIcon icon={faChevronDown} className='ml-4 text-[10px]'/></span>
        </div>
    )
}

export default ButtonFilter