import React from "react";


let Button = (props) => {
    let { linkTo, itemLabel, color } = props;

    let C = 'button';
    if (linkTo) {
        C = 'a'
    }

    console.log(color)
    return (
        <C
            href={linkTo}
            className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700 md:py-4 md:text-lg md:px-10`}
        >
            {itemLabel}
        </C>
    )

}

export default Button;