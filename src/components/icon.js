import React from 'react';
import classnames from 'classnames';

let Icon = (props) => {
    let { icon, size, color, brand, classNames, linkTo, target, dataRel } = props;
    console.log(props)
    let type;
    brand === true ? type = 'fab' : type = 'fas';

    let ret;
    let retIcon = <i className={classnames(`${type} fa-${icon} fa-${size}`, classNames)} />
    if (linkTo) {
        ret = <a className={'pointer mr-3'} href={linkTo} target={target} data-rel={dataRel}>{retIcon}</a>
    } else {
        ret = retIcon;
    }

    return (
        <div className="col-span-1 flex justify-center mr-3">
            {ret}
        </div>
    )
}

export default Icon;