import React from 'react';

let FaIcon = (props) => {
    let { icon, size, color, brand } = props;

    let type;
    brand === true ? type = 'fab' : type = 'fas';
    return (
        <div className="flex justify-center mr-4 sm:mr-8">
            <i className={`${type} fa-${icon} fa-${size} text-${color}`}></i>
        </div>
    )
}

export default FaIcon;